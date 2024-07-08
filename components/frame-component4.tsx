import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonsGroupClick = useCallback(() => {
    router.push("/build-healthy-relationship");
  }, [router]);

  return (
    <section className={[styles.userContentParent, className].join(" ")}>
      <div className={styles.userContent}>
        <div className={styles.userGrid}>
          <div className={styles.userItems}>
            <img
              className={styles.userThumbIcon}
              alt=""
              src="/user-thumb@2x.png"
            />
          </div>
          <div className={styles.userItems1}>
            <img
              className={styles.userThumbIcon1}
              alt=""
              src="/user-thumb-1@2x.png"
            />
          </div>
          <div className={styles.userItems2}>
            <img
              className={styles.userThumbIcon2}
              alt=""
              src="/user-thumb-2@2x.png"
            />
            <div className={styles.userThumb}>
              <img
                className={styles.userThumbIcon3}
                alt=""
                src="/user-thumb-3@2x.png"
              />
            </div>
          </div>
          <div className={styles.userTestimonial}>
            <div className={styles.userTestimonialContent}>
              <div className={styles.topParent}>
                <div className={styles.top}>
                  <b className={styles.caption}>Caption</b>
                  <div className={styles.mainHeadline}>
                    <p className={styles.technologyDesignTools}>
                      Technology design tools
                    </p>
                    <p className={styles.forEngineersAnd}>
                      for engineers and hobbyists
                    </p>
                  </div>
                  <h1 className={styles.secondaryHeadline}>
                    Build Meaningful Relationships
                  </h1>
                </div>
                <div className={styles.paragraph}>
                  Have you ever wished you had a network of friends who shared
                  your interests and values? Synergy Community offers a space to
                  connect with like-minded individuals who are on a similar
                  journey.
                </div>
              </div>
              <button
                className={styles.buttonsGroup}
                onClick={onButtonsGroupClick}
              >
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
          <div className={styles.userItems3}>
            <img
              className={styles.userThumbIcon4}
              alt=""
              src="/user-thumb-4@2x.png"
            />
          </div>
          <div className={styles.userItems4}>
            <img
              className={styles.userThumbIcon5}
              alt=""
              src="/user-thumb-5@2x.png"
            />
          </div>
          <div className={styles.userItems5}>
            <img
              className={styles.userThumbIcon6}
              alt=""
              src="/user-thumb-6@2x.png"
            />
            <div className={styles.userThumbWrapper}>
              <img
                className={styles.userThumbIcon7}
                alt=""
                src="/user-thumb-7@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.users}>
        <div className={styles.user}>
          <img
            className={styles.userThumbIcon8}
            alt=""
            src="/user-thumb-8@2x.png"
          />
        </div>
        <div className={styles.user1}>
          <img
            className={styles.userThumbIcon9}
            alt=""
            src="/user-thumb-9@2x.png"
          />
        </div>
        <div className={styles.users1}>
          <div className={styles.user2}>
            <img
              className={styles.userThumbIcon10}
              alt=""
              src="/user-thumb-10@2x.png"
            />
          </div>
          <img
            className={styles.userThumbIcon11}
            alt=""
            src="/user-thumb-11@2x.png"
          />
        </div>
      </div>
      <div className={styles.icons}>
        <img className={styles.wavesIcon} alt="" src="/waves-1.svg" />
        <img
          className={styles.iconContainer}
          loading="lazy"
          alt=""
          src="/icon-container.svg"
        />
        <img
          className={styles.iconContainer1}
          alt=""
          src="/icon-container-1.svg"
        />
        <img
          className={styles.iconContainer2}
          alt=""
          src="/icon-container-2.svg"
        />
        <img
          className={styles.iconContainer3}
          alt=""
          src="/icon-container.svg"
        />
        <img
          className={styles.iconContainer4}
          alt=""
          src="/icon-container-1.svg"
        />
        <img
          className={styles.iconContainer5}
          alt=""
          src="/icon-container-2.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
