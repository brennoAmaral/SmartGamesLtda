import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonTabButton,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Utils from "../utils/utils";
import { useState } from "react";
import useSWR from "swr";
import fetcher from "../infra/fetcher.infra";
import { musicalNotes, triangle } from "ionicons/icons";
import { Redirect, useHistory } from "react-router";
import { getElement } from "ionicons/dist/types/stencil-public-runtime";
import IGamesResponseDTO from "../dtos/gameResponse.dto";
import GamesCard from "./GameCard";

interface IGamesRender {
  games?: IGamesResponseDTO[]
  isLoading: boolean
  setGame?: (game: IGamesResponseDTO)=>void
}

const GamesRender = ({ games, isLoading, setGame }: IGamesRender) => {
  if (!isLoading) {
    return (
      <IonGrid>
        <IonRow>
          {games?.map((game: IGamesResponseDTO, index) => {
            console.log(index)
            return (
              <GamesCard  game={game} key={index} setInspectGame={setGame?? undefined} index={index+1}/>
            );
          })}
        </IonRow>
      </IonGrid>

    );
  }
  return (
    <IonGrid >
      <IonRow>
        {

          [1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
            return (              
              <IonCol size="6" sizeSm="6" sizeMd="4" sizeLg="3" sizeXl="2" key={index}>
                <IonCard mode="ios">
                  <IonThumbnail style={{ width: '100%', height: '30vh' }}>
                    <IonSkeletonText animated={true}></IonSkeletonText>
                  </IonThumbnail>
                  <IonItem>
                    <IonLabel>
                      <IonSkeletonText animated={true} style={{ width: '80%' }}></IonSkeletonText>
                      <IonSkeletonText animated={true} style={{ width: '40%' }}></IonSkeletonText>
                      <IonSkeletonText animated={true} style={{ width: '60%', height: '25px' }}></IonSkeletonText>
                      <br />

                      <IonGrid>
                        <IonRow className="ion-justify-content-center">
                          <IonCol size="10">
                            <IonSkeletonText animated={true} style={{ width: '100%', height: '40px' }}></IonSkeletonText>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonLabel>
                  </IonItem>
                </IonCard>
              </IonCol>
            )
          })
        }
      </IonRow>
    </IonGrid>

  )


};

export default GamesRender;
