import { IonButton, IonButtons, IonCardContent, IonChip, IonContent, IonHeader, IonLabel, IonModal, IonSegment, IonSegmentButton, IonText, IonTitle, IonToast, IonToolbar, useIonRouter, useIonToast } from "@ionic/react"
import GamesCard from "./GameCard"
import IGamesResponseDTO from "../dtos/gameResponse.dto"
import { useEffect, useLayoutEffect, useState } from "react"
import IStoresDTO from "../dtos/stores.dto"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { ISellsRequest } from "../dtos/sellsStores.dto"
import { sellRequestSchema } from "../schemas/sells.schemas"
import axiosInstance from "../infra/api.infra"

const ViewGame = (stateGame: IGamesResponseDTO) => {
  const { description, stores, platforms } = stateGame
  const [store, setStore] = useState<IStoresDTO>(stores[0])
  const [sellCode, setSellCode] = useState<string>('') 
  const [isOpen, setIsOpen] = useState<boolean>(false) 
  const { handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(sellRequestSchema),
  });
  const shipMethod: Array<{ value: 'atHome' | 'atStore', name: string }> = [{ value: 'atHome', name: 'em casa' }, { value: 'atStore', name: 'Retirar na loja' }]
  const router = useIonRouter()
  const onSubmit = async (data: Pick<ISellsRequest, 'idStore' | 'shipMethod' | 'idPlatform'>) => {
    let price: number = 0
    stores?.forEach((str) => {
      if (str?.idStore === store?.idStore) {
        price = str?.price
      }
    })
    try {
      const { idPlatform, idStore, shipMethod } = data
      const result = await axiosInstance.put(`sell/${stateGame.idGame}/${idStore}/${1}/${idPlatform}/${price}/${shipMethod}/${0}`).then((result)=> result.data )
      if(data.shipMethod === 'atStore'){
        setSellCode(result)
        setIsOpen(true)
      }
    } catch (error) {
      console.log(error)
    }finally{

      router.push('/')
    }
  };
  const quantityInStore = (): number | undefined => {
    let quantity: number | undefined
    if (store) {
      stores.forEach((str) => {
        if (str.idStore === store.idStore) {
          quantity = str.quantity
        }
      })
    }
    return quantity
  }
  const handleStore = (store: IStoresDTO) => {
    setValue('idStore', store.idStore)
    setValue('quantity', 1)
    setStore(store)
  }
  const handlePlatform = (idPlatform: number) => {
    setValue('idPlatform', idPlatform)
  }

  const handleMethod = (method: 'atHome' | 'atStore') => {
    setValue('shipMethod', method)
  }



  const AddressMap = () => {
    return (
      <div className="google-map-code">
        <iframe src={store?.linkMap ?? ''} loading="lazy" width="100%" height="280px" style={{ border: 0 }} allowFullScreen={false} referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
  return (
    <GamesCard game={stateGame} >
      <IonToast
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          message={`Código de venda para retirar na loja: ${sellCode}`}
          buttons={[
            {
              text: 'fechar',
              role: 'cancel',
              handler: () => {
                setIsOpen(false)
              },
            },
          ]}
        >
        </IonToast>
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonCardContent style={{ paddingTop: '0px' }}>
          <IonText>
            {`${platforms?.length} `}Plataforma{platforms.length > 1 ? 's' : ''}:
          </IonText>
          <IonSegment scrollable={true} mode="ios" color={'primary'}>
            {(platforms ?? []).map((platform, index) => (
              <IonSegmentButton value={platform?.idPlatform ?? undefined} onClick={() => handlePlatform(platform.idPlatform)} key={index}>
                <IonLabel>{platform?.namePlatform}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
          {errors?.idPlatform && (
          <IonText color={'danger'}>
              {errors?.idPlatform?.message}
          </IonText>)
          }
        </IonCardContent>
        <IonCardContent style={{ paddingTop: '0px'}} >
          <div style={{display: 'flex', width:'100%', justifyContent:'space-between' }}>

          <IonText >
            {`${stores?.length} `}Loja{stores.length > 1 ? 's' : ''}:
          </IonText>
          {
            (
              store &&(
                <IonText>
            {`quantidade: ${quantityInStore()}`}
          </IonText>
          )
          )
        }
        </div>
          <IonSegment scrollable={true} color={'primary'} mode="ios">
            {(stores ?? []).map((store, index) => (
              <IonSegmentButton value={store?.idStore ?? undefined} onClick={() => handleStore(store)} key={index}>
                <IonLabel>{store?.nameStore.slice(12, store?.nameStore.length) ?? undefined}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
          {errors?.idStore && (
          <IonText color={'danger'}>
              {errors?.idStore?.message}
          </IonText>)
          }
        </IonCardContent>
        <IonCardContent style={{ paddingTop: '0px' }} >
          <IonText >
            Método de Entrega:
          </IonText>
          <IonSegment scrollable={true} color={'primary'} mode="ios">
            {shipMethod.map((method, index) => (
              <IonSegmentButton value={method.value} onClick={() => handleMethod(method.value)} key={index}>
                <IonLabel>{method.name}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
          {errors?.shipMethod && (
          <IonText color={'danger'}>
              {errors?.shipMethod?.message}
          </IonText>)
          }
        </IonCardContent>
        <IonCardContent style={{ paddingTop: '0', paddingBottom: '0' }}>
          <AddressMap />
        </IonCardContent>
        <IonCardContent style={{ paddingTop: '0' }}>
          <IonButton mode='ios' expand="block" type="submit">
            Comprar
          </IonButton>
        </IonCardContent>
        <IonCardContent style={{ paddingTop: '0', paddingBottom: '0' }}>
          <IonText >
            Sobre:
          </IonText>
        </IonCardContent>
        <IonCardContent>
          <IonText>
            {description}
          </IonText>
        </IonCardContent>
      </form>

    </GamesCard >
  )
}

export default ViewGame