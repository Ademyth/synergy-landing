import type { NextPage } from "next";
import ChallengeItem1 from "../components/challenge-item1";
import Hero from "../components/hero";
import FrameComponent from "../components/frame-component";
import Collaboration from "../components/collaboration";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import Testimonial from "../components/testimonial";
import Content from "../components/content";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Root: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.disclaimer}>
          <div className={styles.disclaimer1}>Disclaimer</div>
        </div>
      </div>
      <img
        className={styles.iconJamIconsOutlineL}
        alt=""
        src="/icon--jamicons--outline--logos--plus.svg"
      />
      <img
        className={styles.iconJamIconsOutlineL1}
        alt=""
        src="/icon--jamicons--outline--logos--arrowright.svg"
      />
      <div className={styles.button2}>
        <img
          className={styles.iconJamIconsOutlineL2}
          alt=""
          src="/icon--jamicons--outline--logos--plus1.svg"
        />
        <div className={styles.textContainer}>
          <div className={styles.buttonText}>Button Text</div>
        </div>
        <img
          className={styles.iconJamIconsOutlineL3}
          alt=""
          src="/icon--jamicons--outline--logos--arrowright1.svg"
        />
      </div>
      <img
        className={styles.iconTablerIconsPlaneDe}
        alt=""
        src="/icon--tablericons--planedeparture.svg"
      />
      <ChallengeItem1 />
      <Hero />
      <FrameComponent />
      <Collaboration />
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <Testimonial />
      <Content />
      <Footer />
    </div>
  );
};

export default Root;
