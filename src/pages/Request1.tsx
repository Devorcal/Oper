import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import styles from "./Request1.module.css";

const Request1: FunctionComponent = () => {
  return (
    <div className={styles.request}>
      <div className={styles.main}>
        <h1 className={styles.label}>My Service</h1>
      </div>
      <main className={styles.body}>
        <section className={styles.container}>
          <div className={styles.column}>
            <div className={styles.content}>
              <h1 className={styles.h1TitleCopyGoes}>Transcript</h1>
              <p className={styles.pLoremIpsumDolor}>
                To request a transcript from Beteseb Academy, kindly proceed
                with the following information. Please note that there is a
                charge of 250 ETB for each transcript request. Payments are to
                be made physically at the office of Beteseb Academy.
              </p>
            </div>
            <div className={styles.actions}>
              <Button
                className={styles.button}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#4555ff",
                  borderRadius: "10px",
                  "&:hover": { background: "#4555ff" },
                  height: 41,
                }}
              >
                Send Request
              </Button>
            </div>
          </div>
          <div className={styles.column1}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </section>
        <section className={styles.containerParent}>
          <Container2 />
          <Container1 />
        </section>
      </main>
    </div>
  );
};

export default Request1;
