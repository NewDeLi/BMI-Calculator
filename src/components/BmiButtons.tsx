import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiButtons: React.FC<{ onCalculate: () => void; onReset: () => void }> = (
  props
) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton fill="solid" onClick={props.onCalculate}>
          <IonIcon icon={calculatorOutline} slot="start" />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton fill="outline" onClick={props.onReset}>
          <IonIcon icon={refreshOutline} slot="start" />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiButtons;
