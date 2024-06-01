import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.column}>
        <div className={styles.content}>
          <h1 className={styles.h1TitleCopyGoesContainer}>
            E<span className={styles.ducational}>{`DUCATIONAL `}</span>O
            <span className={styles.pportunitiesAt}>{`PPORTUNITIES AT `}</span>B
            <span className={styles.eteseb}>{`ETESEB `}</span>A
            <span className={styles.cademy}>{`CADEMY: `}</span>S
            <span className={styles.chool}>{`CHOOL `}</span>R
            <span className={styles.esearch}>{`ESEARCH `}</span>D
            <span className={styles.atabase}>{`ATABASE `}</span>
          </h1>
          <div className={styles.pLoremIpsumDolor}>
            Discover an Enriched Learning Experience at Beteseb Academy Research
            Database and visit our extensive collection of valuable resources.
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
              borderRadius: "10px",
              "&:hover": { background: "#4555ff" },
            }}
          >
            Visit
          </Button>
        </div>
      </div>
      <div className={styles.column1}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Container;
