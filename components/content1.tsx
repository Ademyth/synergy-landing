import type { NextPage } from "next";
import styles from "./content1.module.css";

export type Content1Type = {
  className?: string;
};

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.secondaryHeadlineParent}>
          <h1 className={styles.secondaryHeadline}>
            Achieve Financial Stability
          </h1>
          <div className={styles.paragraphContainerParent}>
            <div className={styles.paragraphContainer}>
              <div className={styles.paragraph}>
                <p className={styles.synergyCommunityOffers}>
                  Synergy Community offers a comprehensive financial education
                  program that covers everything from budgeting to investing.
                  Our courses are designed to be easy to understand, even if
                  you're not a financial expert. We not only learn from
                  financial experts but also through play, by engaging in the
                  Cashflow game by Robert Kiyosaki to further reinforce our
                  learning in this financial journey.
                </p>
                <p className={styles.youWantTo}>
                  You want to take charge of your financial future by earning in
                  dollars? Learn the secrets of budgeting, investing, and
                  financial planning? Then, you are in the right place.
                </p>
                <p className={styles.hereInSynergy}>
                  Here in Synergy Community, you will boost your income with our
                  financial education and gain access to comprehensive financial
                  education resources where you can:
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <ul className={styles.learnTheBasicsOfFinancial}>
                  <li className={styles.learnTheBasics}>
                    Learn the basics of financial management.
                  </li>
                  <li className={styles.exploreInvestmentOpportuniti}>
                    Explore investment opportunities and strategies.
                  </li>
                  <li>
                    Attend workshops and webinars led by financial experts.
                  </li>
                </ul>
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
          className={styles.studentGraduationCapMoneyDIcon}
          loading="lazy"
          alt=""
          src="/studentgraduationcapmoneydiplomascroll-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Content1;
