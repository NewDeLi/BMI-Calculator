import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid className="ion-text-center ion-margin-top">
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton fill="solid" className="ion-text-left">
                <IonIcon icon={calculatorOutline} slot="start" />
                Calculate
              </IonButton>
              <IonButton fill="outline" className="ion-text-right">
                <IonIcon icon={refreshOutline} slot="start" />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h2>Result</h2>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
