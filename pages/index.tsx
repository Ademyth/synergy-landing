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
