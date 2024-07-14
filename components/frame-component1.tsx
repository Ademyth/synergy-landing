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
              Synergy Community is a Vibrant Hub Where You - Fuel your mind
            </h1>

            <div className={styles.paragraph}>
              Whether you're into personal development or financial literacy,
              our community has something for every book lover. Dive into our
              community-curated library of books that inspire, educate, and
              entertain.
            </div>
          </div>

          <button type="button" className={styles.button} onClick={onButtonsGroupClick}>
            Learn more
          </button>

          {/* <button className={styles.buttonsGroup} onClick={onButtonsGroupClick}>
            <div className={styles.button}>
              <div className={styles.textContainer}>
                <a className={styles.learnMore}>Learn more</a>
              </div>
            </div>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
