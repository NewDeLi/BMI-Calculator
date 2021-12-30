import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const InputsSegement: React.FC<{
  selectedValue: "german" | "english";
  onSelectedValue: (value: "german" | "english") => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectedValue(event.detail.value);
  };
  return (
    <IonSegment onIonChange={inputChangeHandler} value={props.selectedValue}>
      <IonSegmentButton value="german">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="english">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputsSegement;
