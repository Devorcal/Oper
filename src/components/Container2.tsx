import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./Container2.module.css";

export type Container2Type = {
  className?: string;
};

const Container2: FunctionComponent<Container2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <img
        className={styles.identificationDocumentsIcon}
        loading="lazy"
        alt=""
        src="/identification-documents@2x.png"
      />
      <Column
        identificationID="Identification (ID)"
        toRequestAnIDCardFromBete="To request an ID card from Beteseb Academy, kindly proceed with the following information. There is a charge of 50 ETB for each ID card request. Payments are to be made physically at the office of Beteseb Academy."
      />
    </div>
  );
};

export default Container2;
