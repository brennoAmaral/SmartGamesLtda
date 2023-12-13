import { IonButton, IonButtons, IonHeader, IonIcon, IonSearchbar, IonToolbar } from "@ionic/react"
import { qrCode } from "ionicons/icons"

interface IHeader {
  setGameSearch: (text: string | null | undefined)=>void
  setQrCode: (value: boolean)=>void
}
const Header = ({setGameSearch, setQrCode}: IHeader) => {
  return (
    <>
      <IonHeader>

        <IonToolbar >
          <IonSearchbar slot="start" style={{width: '300px'}} debounce={500} onIonInput={(e)=>setGameSearch(e.detail.value)}></IonSearchbar>
          <IonButtons slot="end">
            <IonButton onClick={()=> setQrCode(true)}>
              <IonIcon slot="icon-only" icon={qrCode} color="primary" />
            </IonButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
    </>
  )
}

export default Header