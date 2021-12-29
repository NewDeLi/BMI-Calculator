import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BmiButtons from "../components/BmiButtons";
import BMIResult from "../components/BmiResult";
import "./Home.css";

const Home: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [error, setError] = useState<string>();

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter a valid (positive) number");
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    console.log(bmi);
    setCalculatedBMI(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };
  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "okay", handler: clearError }]}
      />
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
                  <IonInput type="number" ref={heightInputRef} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Weight</IonLabel>
                  <IonInput type="number" ref={weightInputRef} />
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiButtons onCalculate={calculateBMI} onReset={resetInputs} />
            {calculatedBMI ? <BMIResult result={calculatedBMI} /> : null}
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
