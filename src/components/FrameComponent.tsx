import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
        </div>
        <div className={styles.column1}>
          <div className={styles.content}>
            <h1 className={styles.streamlineTasksAnd}>
              Streamline Tasks and Enhance the Educational Experience
            </h1>
            <div className={styles.theBetesebAcademy}>
              The Beteseb Academy Portal revolutionizes education by simplifying
              administrative tasks and providing personalized support.
              Experience a seamless educational journey with our AI-driven
              platform.
            </div>
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
                borderRadius: "15px",
                "&:hover": { background: "#4555ff" },
                height: 41,
              }}
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
