import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ChallengeItem from "../components/challenge-item";
import Footer from "../components/footer";
import styles from "./build-healthy-relationship.module.css";

const BuildHealthyRelationship: NextPage = () => {
  const router = useRouter();

  const onSynergyBookClubClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.buildHealthyRelationship}>
      <section className={styles.frameParent}>
        <ChallengeItem
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--playcircle1.svg"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright4.svg"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--plus4.svg"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--arrowright.svg"
          iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus1.svg"
          iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright1.svg"
          buttonsGroupWidth="unset"
          buttonsGroupAlignSelf="stretch"
          buttonsGroupFlex="unset"
          onSynergyBookClubClick={onSynergyBookClubClick}
          onHomeTextClick={onSynergyBookClubClick}
          onChallengesTextClick={onSynergyBookClubClick}
          onSolutionTextClick={onSynergyBookClubClick}
          onCommunityTextClick={onSynergyBookClubClick}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.secondaryHeadlineParent}>
              <h1 className={styles.secondaryHeadline}>
                Build Meaningful Relationships
              </h1>
              <div className={styles.frameContainer}>
                <div className={styles.paragraphWrapper}>
                  <div className={styles.paragraph}>
                    <p className={styles.weBelieveIn}>
                      We believe in the power of community. Connect with
                      like-minded individuals who are on the same path to
                      personal growth. Our networking sessions and community
                      events are designed to foster meaningful relationships
                      that last.
                    </p>
                    <p className={styles.imagineAttendingA}>
                      Imagine attending a workshop on personal development,
                      sitting next to someone who shares your passion for
                      self-improvement, and striking up a conversation that
                      leads to a lifelong friendship. This is what we are all
                      about at Synergy Community. We love and care for one
                      another. You will be granted privileges to attend our
                      exclusive events (both online and in person), hangouts,
                      and networking sessions to build friendships and
                      professional relationships that last a lifetime and
                      refresh your mind.
                    </p>
                  </div>
                </div>
                <button className={styles.buttonsGroup}>
                  <div className={styles.button}>
                    <img
                      className={styles.iconJamIconsOutlineL}
                      alt=""
                      src="/icon--jamicons--outline--logos--plus4.svg"
                    />
                    <div className={styles.textContainer}>
                      <div className={styles.signUp}>Sign up</div>
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
            <img
              className={styles.peopleOfficeWorkDay1Icon}
              loading="lazy"
              alt=""
              src="/peopleofficeworkday-1@2x.png"
            />
          </div>
        </div>
      </section>
      <div className={styles.buildHealthyRelationshipChild} />
      <Footer
        propPadding="49px 20px 50px"
        propAlignSelf="unset"
        propMarginLeft="-82px"
        propWidth="1444px"
      />
    </div>
  );
};

export default BuildHealthyRelationship;
