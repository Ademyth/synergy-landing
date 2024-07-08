import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ChallengeItem from "../components/challenge-item";
import Footer from "../components/footer";
import styles from "./healthy-lifestyle.module.css";

const HealthyLifestyle: NextPage = () => {
  const router = useRouter();

  const onSynergyBookClubClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.healthyLifestyle}>
      <main className={styles.healthyLifestyleInner}>
        <section className={styles.frameParent}>
          <ChallengeItem
            iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--playcircle1.svg"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright4.svg"
            iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--plus4.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--arrowright.svg"
            iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus1.svg"
            iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright1.svg"
            buttonsGroupWidth="1271px"
            buttonsGroupAlignSelf="unset"
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
                  Embrace a Healthy Lifestyle
                </h1>
                <div className={styles.frameContainer}>
                  <div className={styles.paragraphWrapper}>
                    <div className={styles.paragraph}>
                      <p className={styles.ourGuidedMeditation}>
                        Our guided meditation and mindfulness programs help you
                        relax and focus. Personalized fitness and nutrition
                        planning give you the tools to achieve your health
                        goals.
                      </p>
                      <p className={styles.butWellnessIs}>
                        But wellness is not just about physical health; it's
                        also about emotional intelligence and self-awareness.
                        Our resources and exercises help you develop the skills
                        to navigate life's challenges with confidence. Embark on
                        curated wellness journeys that focus on:
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.mentalHealth}>Mental Health:</p>
                      <p className={styles.haveYouEver}>
                        Have you ever felt like you're drowning in a sea of
                        stress and anxiety? You're not alone; mental health
                        affects one in four people, and there's no reason to be
                        ashamed of it. But what if you had a lifeline to cling
                        to? Synergy Community's mental health resources offer a
                        safe and supportive space to navigate life's challenges.
                        Our guided meditations and mindfulness exercises help
                        calm the mind and reduce stress. Our licensed therapists
                        and counselors provide a listening ear and expert
                        guidance. Our online support groups also connect you
                        with others who understand what you're going through.
                      </p>
                      <p className={styles.imagineFeelingEmpowered}>
                        Imagine feeling empowered to manage your mental health,
                        to silence the negative self-talk, and build resilience.
                        This and more is what Synergy Community offers. Join us
                        and start your journey to a healthier, happier mind.
                      </p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                      <p className={styles.physicalHealth}>
                        <b>Physical Health:</b>
                      </p>
                      <p
                        className={styles.wantToGet}
                      >{`Want to get fit and feel amazing? It's not just about physical appearance; it's about energy, vitality, and living life to the fullest! But sometimes, getting started can be daunting. Synergy Community's physical health programs offer a supportive and motivating environment to reach your fitness goals. `}</p>
                      <p className={styles.ourFitnessChallenges}>
                        Our fitness challenges and workout programs cater to all
                        levels, from beginners to pros. Imagine feeling strong,
                        confident, and energized, ready to take on the day.
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
                className={styles.beautifulAfroAmericanWomanIcon}
                loading="lazy"
                alt=""
                src="/beautifulafroamericanwomanreading-1@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
      <div className={styles.healthyLifestyleChild} />
      <Footer
        propPadding="49px 20px 50px"
        propAlignSelf="stretch"
        propMarginLeft="unset"
        propWidth="unset"
      />
    </div>
  );
};

export default HealthyLifestyle;
