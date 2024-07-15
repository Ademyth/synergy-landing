import type { NextPage } from "next";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.highAngleYoungPeopleChurchParent}>
        {/* <img
          className={styles.highAngleYoungPeopleChurchIcon}
          alt=""
          src="/highangleyoungpeoplechurchpraying-1@2x.png"
          data-scroll-to="highAngleYoungPeopleChurchImage"
        /> */}

        <div className={styles.secondaryHeadline}>
          <p
            className={styles.over500Synergy}
          >{`Over 500 Synergy Community members cannot be wrong at the same time! `}</p>
          <p className={styles.joinTheSynergy}>
            Join the Synergy Community Today!
          </p>
        </div>

        <div className={styles.paragraph}>
          Don’t let life’s challenges hold you back. Become a part of the Synergy
          Community and start your journey towards personal growth, financial
          success, and a balanced lifestyle.
        </div>

        <div className={styles.synergize}>
          <b className={styles.readyToSynergizeContainer}>
            <p className={styles.readyToSynergize}>Ready to Synergize?</p>
          </b>

          <button className={styles.signUp}>
            <span className={styles.signUpFor}>Learn More</span>

            <img
              className={styles.iconIconoirArrowRight}
              alt=""
              src="/icon--iconoir--arrowright-3.svg"
            />
          </button>
        </div>
      </div>
    </section >
  );
};

export default Content;
