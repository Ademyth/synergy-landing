import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonsGroupClick = useCallback(() => {
    router.push("/fuel-your-mind");
  }, [router]);

  return (
    <section className={[styles.wrapperImageParent, className].join(" ")}>
      <div className={styles.wrapperImage}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className={styles.imageContent}>
        <div className={styles.imageParagraphParent}>
          <div className={styles.imageParagraph}>
            <h1 className={styles.secondaryHeadline}>
              Fuel your mind with synergy community
            </h1>
            <div className={styles.paragraph}>
              Whether you're into personal development or financial literacy,
              our community has something for every book lover. Dive into our
              community-curated library of books that inspire, educate, and
              entertain.
            </div>
          </div>
          <button className={styles.buttonsGroup} onClick={onButtonsGroupClick}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus4.svg"
              />
              <div className={styles.textContainer}>
                <a className={styles.learnMore}>Learn more</a>
              </div>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button2}>
              <img
                className={styles.iconJamIconsOutlineL2}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL3}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
