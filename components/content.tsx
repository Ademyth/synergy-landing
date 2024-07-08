import type { NextPage } from "next";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.highAngleYoungPeopleChurchParent}>
        <img
          className={styles.highAngleYoungPeopleChurchIcon}
          alt=""
          src="/highangleyoungpeoplechurchpraying-1@2x.png"
          data-scroll-to="highAngleYoungPeopleChurchImage"
        />
        <h1 className={styles.secondaryHeadline}>
          <p
            className={styles.over500Synergy}
          >{`Over 500 Synergy Community members cannot be wrong at the same time! `}</p>
          <p className={styles.joinTheSynergy}>
            Join the Synergy Community Today!
          </p>
        </h1>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.button}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className={styles.textContainer}>
            <div className={styles.buttonText}>Improve workflow</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL1}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
          <div className={styles.badge}>
            <div className={styles.text}>9</div>
          </div>
        </div>
        <div className={styles.button2}>
          <img
            className={styles.iconJamIconsOutlineL2}
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className={styles.textContainer1}>
            <div className={styles.buttonText1}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL3}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
        </div>
        <div className={styles.button3}>
          <img
            className={styles.iconJamIconsOutlineL4}
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className={styles.textContainer2}>
            <div className={styles.buttonText2}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL5}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
          <div className={styles.badge1}>
            <div className={styles.text1}>9</div>
          </div>
        </div>
      </div>
      <b className={styles.caption}>Caption</b>
      <div className={styles.mainHeadline}>Headline One</div>
      <div className={styles.paragraph}>
        Don’t let life’s challenges hold you back. Become a part of the Synergy
        Community and start your journey towards personal growth, financial
        success, and a balanced lifestyle.
      </div>
      <div className={styles.synergize}>
        <div className={styles.synergizeCallToAction}>
          <div className={styles.readyToSynergizeWrapper}>
            <b className={styles.readyToSynergizeContainer}>
              <p className={styles.readyToSynergize}>Ready to Synergize?</p>
            </b>
          </div>
          <button className={styles.signUp}>
            <div className={styles.signUpButton}>
              <div className={styles.signUpFor}>Sign Up for Free</div>
            </div>
            <img
              className={styles.iconIconoirArrowRight}
              alt=""
              src="/icon--iconoir--arrowright-3.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
