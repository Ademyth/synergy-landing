import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import Footer from "../components/footer";
import styles from "./fuel-your-mind.module.css";

const FuelYourMind: NextPage = () => {
  return (
    <div className={styles.fuelYourMind}>
      <main className={styles.fuelYourMindInner}>
        <section className={styles.frameParent}>
          <FrameComponent5 />
          <div className={styles.contentParent}>
            <div className={styles.content}>
              <div className={styles.secondaryHeadlineParent}>
                <h1 className={styles.secondaryHeadline}>
                  <p className={styles.imagineHavingAccess}>
                    Imagine having access to a vast library of books that can
                    help you unlock your full potential. 
                  </p>
                </h1>
                <div className={styles.paragraph}>
                  <p className={styles.withSynergyCommunity}>
                    With Synergy Community, you can tap into a collection of
                    amazing ebooks and audiobooks that cover personal
                    development, financial literacy, and inspiration. Whether
                    you're looking to improve your productivity, learn new
                    skills, or simply find motivation, our book library has got
                    you covered.
                  </p>
                  <p className={styles.butThatsNot}>
                    But that's not all. Our book clubs offer a space to discuss
                    what you've read with like-minded individuals. Imagine
                    sitting in a cozy coffee shop with a group of friends who
                    share your interests, discussing the latest self-help book
                    or sharing insights from a financial literacy guide. Our
                    book clubs are the perfect way to stay accountable, learn
                    from others, and gain new perspectives.
                  </p>
                  <p className={styles.andIfYoure}>
                    And if you're someone who loves to track your progress, our
                    interactive book app is a game-changer. Set reading goals,
                    earn badges and rewards, and join discussion forums with
                    fellow readers. It's like having your own personal book club
                    in your pocket!
                  </p>
                  <p className={styles.inANutshell}>
                    In a nutshell, in our interactive book app, you will have
                    the opportunity to:
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <ul className={styles.joinDifferentCohortsToRead}>
                    <li className={styles.joinDifferentCohorts}>
                      Join different cohorts to read a book of interest.
                    </li>
                    <li className={styles.trackYourProgress}>
                      Track your progress and stay motivated.
                    </li>
                    <li className={styles.earnBadgesAnd}>
                      Earn badges and trophies for completing reading plans.
                    </li>
                    <li>
                      Take quizzes to test your knowledge and reinforce
                      learning.
                    </li>
                  </ul>
                </div>
              </div>
              <button className={styles.buttonsGroup}>
                <div className={styles.button}>
                  <div className={styles.textContainer}>
                    <div className={styles.signUp}>Sign up</div>
                  </div>
                </div>
              </button>
            </div>
            <img
              className={styles.fullShotWomanReadingTabletIcon}
              loading="lazy"
              alt=""
              src="/fullshotwomanreadingtablet-1@2x.png"
            />
          </div>
        </section>
      </main>
      <div className={styles.fuelYourMindChild} />
      <Footer
        propPadding="49px 20px 50px"
        propAlignSelf="stretch"
        propMarginLeft="unset"
        propWidth="unset"
      />
    </div>
  );
};

export default FuelYourMind;
