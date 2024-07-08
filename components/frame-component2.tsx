import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onGraphLinkContainerClick = useCallback(() => {
    router.push("/finance");
  }, [router]);

  return (
    <section className={[styles.graphContentWrapper, className].join(" ")}>
      <div className={styles.graphContent}>
        <div className={styles.col}>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <b className={styles.caption}>Start building ideas</b>
              <div className={styles.mainHeadline}>Headline One</div>
              <h1 className={styles.secondaryHeadline}>
                Achieve Financial Stability
              </h1>
            </div>
            <div className={styles.paragraph}>
              Let's face it: managing our finances can be overwhelming. But what
              if you had access to expert guidance and resources to help you
              achieve financial stability?
            </div>
            <div
              className={styles.graphLink}
              onClick={onGraphLinkContainerClick}
            >
              <div className={styles.textContainer}>
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
        <div className={styles.col1}>
          <img
            className={styles.graphPartGraphStyle}
            loading="lazy"
            alt=""
            src="/graphpart--graphstyle.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
