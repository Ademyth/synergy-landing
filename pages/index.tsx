import type { NextPage } from "next";
import ChallengeItem1 from "../components/navbar/challenge-item1";
import Hero from "../components/hero/hero";
import FrameComponent from "../components/facing-challenges/frame-component";
import Collaboration from "../components/collaboration/collaboration";
import FrameComponent1 from "../components/fuel-mind/frame-component1";
import FrameComponent2 from "../components/achieve-financial/frame-component2";
import FrameComponent3 from "../components/embrace-healthy/frame-component3";
import FrameComponent4 from "../components/build-meaningful/frame-component4";
import Testimonial from "../components/testimonial/testimonial";
import Content from "../components/synergy-community/content";
import Footer from "../components/footer/footer";
import styles from "./index.module.css";

const Root: NextPage = () => {
  return (
    <div className={styles.root}>
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
