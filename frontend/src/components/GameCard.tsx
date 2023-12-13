import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonMenuButton, IonRippleEffect, IonText } from "@ionic/react";
import IGamesResponseDTO from "../dtos/gameResponse.dto";
import Utils from "../utils/utils";
import { ReactNode } from "react";
interface IGamesCard {
  game: IGamesResponseDTO
  setInspectGame?: (game: IGamesResponseDTO) => void
  index?: number
  children?: ReactNode
}
const GamesCard = ({ game, children, setInspectGame, index }: IGamesCard) => {
  const { description, idGame, linkImage, nameGame, platforms, stores } = game
  function handleViewGame(game: IGamesResponseDTO) {
    document.getElementById(`view_game_${game.idGame}`)?.click()
    setInspectGame && setInspectGame(game)
  }
  if (setInspectGame && index) {
    return (
      <IonCol size="12" sizeSm="6" sizeMd="4" sizeLg="4" sizeXl="2" key={index}>
        <IonCard mode="ios" id={`game_${idGame}`} onClick={setInspectGame !== undefined ? () => handleViewGame(game) : undefined} >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              alt="Silhouette of mountains"
              style={{ minWidth: '100%', height: '30vh' }}
              src={linkImage ?? "https://ionicframework.com/docs/img/demos/card-media.png"}
            />
          </div>
          <IonCardHeader >
            <IonCardTitle >{Utils.stringShorter(nameGame, 21)}</IonCardTitle>
            <div>
              {platforms.map((platform, index) => (
                <IonChip key={index} > {platform.namePlatform}</IonChip>
              ))}
            </div>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="success">
              <span style={{ fontSize: '25px' }}>
                {Utils.moneyBrMask(stores[0]?.price)}
              </span>
            </IonText>

          </IonCardContent>
          <IonMenuButton id={`view_game_${idGame}`} style={{ display: 'none', padding: '0px!important' }} >
          </IonMenuButton >
          {children}
        </IonCard>
      </IonCol>
    )
  }
  return (
    <IonCard mode="ios" id={`game_${idGame}`} onClick={setInspectGame !== undefined ? () => handleViewGame(game) : undefined} style={{ overflowY: "auto" }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          alt="Silhouette of mountains"

          style={{ minWidth: '100%', height: '30vh' }}
          src={linkImage ?? "https://ionicframework.com/docs/img/demos/card-media.png"}
        />
      </div>
      <IonCardHeader>
        <IonCardTitle>{nameGame}</IonCardTitle>
        {/* <IonCardSubtitle>
          {platforms.map((platform, index) => (
            <IonChip> {platform.namePlatform}</IonChip>
          ))}

        </IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonText color="success">
          <span style={{ fontSize: '25px' }}>
            {Utils.moneyBrMask(stores[0]?.price)}
          </span>
        </IonText>

      </IonCardContent>
      {children}
    </IonCard>
  );
}

export default GamesCard