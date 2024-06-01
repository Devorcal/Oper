import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./Container1.module.css";

export type Container1Type = {
  className?: string;
};

const Container1: FunctionComponent<Container1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <Column
        identificationID="Proof of Enrollment"
        toRequestAnIDCardFromBete="To request proof of enrollment from Beteseb Academy, kindly proceed with the following information. There is a charge of 50 ETB for each proof of enrollment request. Payments are to be made physically at the office of Beteseb Academy."
        propHeight="72px"
      />
      <img
        className={styles.verifiedAccountIcon}
        loading="lazy"
        alt=""
        src="/verified-account@2x.png"
      />
    </div>
  );
};

export default Container1;
