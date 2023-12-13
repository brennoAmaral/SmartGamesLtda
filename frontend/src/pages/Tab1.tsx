import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";
import useSWR from "swr";

import fetcher from "../infra/fetcher.infra";
import GamesRender from "../components/GamesRender";
import Header from "../components/Header";
import IGamesResponseDTO from "../dtos/gameResponse.dto";
import ViewGame from "../components/ViewGame";
import QrCode from "../components/QrCode";


const gameInitValues: IGamesResponseDTO = {
  description: '',
  idGame: 0,
  linkImage: '',
  nameGame: '',
  platforms: [],
  stores: []
}
const Tab1: React.FC = () => {
  const [viewGame, setViewGame] = useState<IGamesResponseDTO>(gameInitValues)
  const refComponente = useRef<HTMLIonMenuElement>(null);
  const [gameSearch, setGameSearch] = useState<string | undefined | null>('')
  const { data, isLoading } = useSWR<IGamesResponseDTO[]>(`games/${gameSearch ? `${gameSearch}` : ''}`, fetcher)
  const [qrCode, setQrCode] = useState<boolean>(false)
  const [discount, setDiscount] = useState<number>(0)
  const [change, setChange] = useState<'qrCode' | 'qrScan'>();

  return (<>
    <IonMenu contentId="main-content" swipeGesture={false} ref={refComponente}>
      <ViewGame {...viewGame} />

      <IonModal isOpen={qrCode}>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" style={{ opacity: 0 }}>
              <IonButton onClick={() => setQrCode(false)}>Close</IonButton>
            </IonButtons>
            <IonSegment value={change} color={'primary'} mode="ios" style={{ width: '200px' }}>

              <IonSegmentButton value="qrCode" onClick={() => setChange('qrCode')}>
                <IonLabel>QrCode</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value={change} onClick={() => setChange('qrScan')}>
                <IonLabel>Scan</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            <IonButtons slot="end">
              <IonButton onClick={() => setQrCode(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" >
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {
              change === 'qrCode' ? (
                <>
                  <IonText color={'primary'}>
                    <h1 style={{ marginBottom: '10vh' }}>
                      Scaneie o código para aplica desconto em sua compra!
                    </h1>
                  </IonText>
                    <QrCode></QrCode>
                </>

                  ) :
                  (
                      <IonFab vertical="bottom" horizontal="center" slot="fixed">
                        <IonFabButton onClick={(click) => "addPhotoToGallery()"}>
                          <IonIcon name="camera"></IonIcon>
                        </IonFabButton>
                      </IonFab>
                  )}

                </div>
        </IonContent>
      </IonModal>
    </IonMenu>
    <IonPage id="main-content">
      <Header setGameSearch={setGameSearch} setQrCode={setQrCode} />
      <IonContent>
        <GamesRender isLoading={isLoading} games={data} setGame={setViewGame} />
      </IonContent>
    </IonPage>
  </>
  );
};

export default Tab1;
