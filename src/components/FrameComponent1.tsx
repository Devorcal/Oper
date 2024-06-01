import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.homePageInner, className].join(" ")}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.content}>
              <h1 className={styles.h1TitleCopyGoes}>
                Discover a World of Education Excellence
              </h1>
              <div className={styles.pLoremIpsumDolor}>
                Welcome to Beteseb Academy Portal, where learning meets
                innovation. Explore our comprehensive platform designed to
                enhance your educational journey and streamline administrative
                tasks.
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
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.column1}>
            <img
              className={styles.imageWrapperIcon}
              loading="lazy"
              alt=""
              src="/image-wrapper@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.featuresParent}>
              <b className={styles.features}>Features</b>
              <h1
                className={styles.discoverTheKey}
              >{`Discover the Key Features `}</h1>
            </div>
            <p className={styles.theMultiFunctionalPlatform}>
              {" "}
              The multi-functional platform designed to enhance your educational
              experience to make the most of your academic journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
