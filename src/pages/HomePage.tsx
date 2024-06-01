import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Container from "../components/Container";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <FrameComponent1 />
      <section className={styles.features}>
        <div className={styles.featuresIcons}>
          <img
            className={styles.icons}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.text}>
            <b className={styles.calendar}>Calendar</b>
            <p className={styles.planYourAcademic}>
              Plan your academic and personal schedules with ease.
            </p>
          </div>
        </div>
        <div className={styles.featuresIcons1}>
          <img
            className={styles.fingerprintIcon}
            loading="lazy"
            alt=""
            src="/fingerprint.svg"
          />
          <div className={styles.text1}>
            <b className={styles.studentAssistant}>Student Assistant</b>
            <p className={styles.getImmediateAnswers}>
              Get immediate answers to your academic questions, just like
              chatting with a student assistant.
            </p>
          </div>
        </div>
        <div className={styles.featuresIcons2}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.text2}>
            <b className={styles.educationalBooks}>Educational Books</b>
            <p className={styles.exploreAndDownload}>
              Explore, and download educational resources from our digital
              library.
            </p>
          </div>
        </div>
      </section>
      <FrameComponent />
      <Container />
    </div>
  );
};

export default HomePage;
