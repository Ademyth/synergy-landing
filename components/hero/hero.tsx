import type { NextPage } from "next";
import styles from "./hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.hero, className].join(" ")}
      data-scroll-to="hero"
    >
      <div className={styles.mainHeadlineWrapper}>
        <h1 className={styles.mainHeadline}>
          Empower your life with Synergy Community
        </h1>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroParagraph}>
          <div className={styles.paragraph}>
            Join a thriving community dedicated to personal growth, financial
            education, wellness, and meaningful connections. Unlock your
            potential and transform your life with synergy community.
          </div>
          <div className={styles.heroButton}>
            <button className={styles.heroButtonContainer}>
              <div className={styles.buttonsGroup}>
                <div className={styles.button}>
                  <img className={styles.iconJamIconsOutlineL} alt="" />
                  <div className={styles.textContainer}>
                    <div className={styles.getStarted}>Get Started</div>
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
              </div>
            </button>
          </div>
        </div>
      </div>
      <video className={styles.empty} controls>
        <source src="https://youtu.be/K4TOrB7at0Y" />
      </video>
    </section>
  );
};

export default Hero;
