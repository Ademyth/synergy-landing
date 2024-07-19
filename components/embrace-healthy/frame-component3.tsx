import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onTestimonialButtonContainerClick = useCallback(() => {
    router.push("/healthy-lifestyle");
  }, [router]);

  return (
    <section className={[styles.wavesParent, className].join(" ")}>
      <img className={styles.wavesIcon} alt="" src="/waves.svg" />
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialTop}>
          <div className={styles.topBar}>
          </div>
          <div className={styles.wrapperPicture}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
          </div>
          <div className={styles.wrapperPicture1}>
            <img
              className={styles.pictureIcon1}
              alt=""
              src="/picture-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.sectionTextParent}>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <h1 className={styles.secondaryHeadline}>
                Embrace a Healthy Lifestyle
              </h1>
            </div>
            <div className={styles.paragraph}>
              Your health is your wealth, and taking good care of our physical
              and mental health is essential, but it's easy to get stuck in a
              rut. Synergy Community's wellness journeys offer a fresh start.
            </div>
          </div>
          <div
            className={styles.testimonialButton}
            onClick={onTestimonialButtonContainerClick}
          >
            <div className={styles.textContainer3}>
              <b className={styles.learnMore}>Learn more</b>
            </div>
            <img
              className={styles.iconIconoirArrowRight}
              alt=""
              src="/icon--iconoir--arrowright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;