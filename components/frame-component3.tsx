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
            <div className={styles.circles}>
              <img
                className={styles.iconJamIconsFilledCi}
                alt=""
                src="/icon--jamicons--filled--circlef.svg"
              />
              <img
                className={styles.iconJamIconsFilledCi1}
                alt=""
                src="/icon--jamicons--filled--circlef-1.svg"
              />
              <img
                className={styles.iconJamIconsFilledCi2}
                alt=""
                src="/icon--jamicons--filled--circlef-2.svg"
              />
            </div>
            <div className={styles.arrows}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--chevronleft.svg"
              />
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--chevronright.svg"
              />
            </div>
            <div className={styles.addressBar}>
              <div className={styles.feature}>feature</div>
            </div>
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
              <b className={styles.caption}>Caption</b>
              <div className={styles.mainHeadline}>Grow your collection</div>
              <h1 className={styles.secondaryHeadline}>
                Embrace a Healthy Lifestyle
              </h1>
            </div>
            <div className={styles.paragraph}>
              Your health is your wealth, and taking good care of our physical
              and mental health is essential, but it's easy to get stuck in a
              rut. Synergy Community's wellness journeys offer a fresh start.
            </div>
            <div className={styles.buttonsGroup}>
              <div className={styles.button}>
                <img
                  className={styles.iconJamIconsOutlineL2}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className={styles.textContainer}>
                  <div className={styles.buttonText}>Sign up now</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL3}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
              </div>
              <div className={styles.button2}>
                <img
                  className={styles.iconJamIconsOutlineL4}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className={styles.textContainer1}>
                  <div className={styles.buttonText1}>Button Text</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL5}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
              </div>
              <div className={styles.button3}>
                <img
                  className={styles.iconJamIconsOutlineL6}
                  alt=""
                  src="/icon--jamicons--outline--logos--playcircle.svg"
                />
                <div className={styles.textContainer2}>
                  <div className={styles.buttonText2}>Watch Demo</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL7}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
                <div className={styles.badge}>
                  <div className={styles.text}>9</div>
                </div>
              </div>
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
