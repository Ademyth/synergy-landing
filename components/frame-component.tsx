import type { NextPage } from "next";
import CategoryGrid from "./category-grid";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.mainHeadlineParent, className].join(" ")}
      data-scroll-to="frameSection"
    >
      <div className={styles.mainHeadline}>Headline One</div>
      <h1 className={styles.secondaryHeadline}>
        Are you facing these challenges?
      </h1>
      <div className={styles.button2}>
        <img
          className={styles.iconJamIconsOutlineL}
          alt=""
          src="/icon--jamicons--outline--logos--plus1.svg"
        />
        <div className={styles.textContainer}>
          <div className={styles.buttonText}>Button Text</div>
        </div>
        <img
          className={styles.iconJamIconsOutlineL1}
          alt=""
          src="/icon--jamicons--outline--logos--arrowright1.svg"
        />
      </div>
      <div className={styles.button3}>
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
        <div className={styles.badge}>
          <div className={styles.text}>9</div>
        </div>
      </div>
      <div className={styles.categoryGrid}>
        <img
          className={styles.directingArrowUpConceptIllIcon}
          loading="lazy"
          alt=""
          // src="/directingarrowupconceptillustration-1@2x.png"
          src="/financialcrisisbusinessfailureflatconceptwithfallingpersonimagescoinsbanknotesarrowsdownvectorillustration-1@2x.png"
        />
      </div>
      <div className={styles.categoryGrid1}>
        <div className={styles.titleCategory}>
          <div className={styles.category}>Category</div>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              Feeling Stuck in Your Personal Growth?
            </div>
            <div className={styles.badge1}>
              <img className={styles.iconJamIconsOutlineL4} alt="" />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>+2,5%</div>
              </div>
              <img className={styles.iconIconoirStatUp} alt="" />
            </div>
            <img
              className={styles.iconJamIconsOutlineL5}
              alt=""
              src="/icon--jamicons--outline--logos--pencil.svg"
            />
          </div>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.lifeIsBusy}>
            Life is busy, and finding time for personal development can be
            tough. You know you need to grow, learn, and improve, but where do
            you start?
          </p>
        </div>
      </div>
      <div className={styles.categoryGrid2}>
        <img
          className={styles.illustrationMeditation1Icon}
          loading="lazy"
          alt=""
          // src="/illustrationmeditation-1@2x.png"
          src="/financialcrisisbusinessfailureflatconceptwithfallingpersonimagescoinsbanknotesarrowsdownvectorillustration-1@2x.png"
        />
      </div>
      <CategoryGrid
        title="In Need of Wellness and Balance?"
        iconJamIconsOutlineLogos="pending_I234:629;27:6393"
        iconIconoirStatUp="pending_I234:629;27:6396"
        paragraph="Balancing your mental, emotional, and physical health is crucial but challenging. it’s easy to feel lost in the daily grind without a structured wellness journey."
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
      />
      <div className={styles.categoryGrid3}>
        <img
          className={styles.networkConceptIllustration1Icon}
          loading="lazy"
          alt=""
          // src="/networkconceptillustration-1@2x.png"
          src="/financialcrisisbusinessfailureflatconceptwithfallingpersonimagescoinsbanknotesarrowsdownvectorillustration-1@2x.png"
        />
      </div>
      <CategoryGrid
        title="Lacking a Supportive Network?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--circle.svg"
        iconIconoirStatUp="/icon--iconoir--statup-2.svg"
        paragraph="Networking and making meaningful connections can be daunting. It's hard to find a group of like-minded individuals who share your goals and aspirations. But don’t worry! Associating with our community will help you build meaningful connections."
        propTop="633.5px"
        propLeft="102px"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
      />
      <div className={styles.categoryGrid4}>
        <img
          className={styles.financialCrisisBusinessFailIcon}
          loading="lazy"
          alt=""
          src="/financialcrisisbusinessfailureflatconceptwithfallingpersonimagescoinsbanknotesarrowsdownvectorillustration-1@2x.png"
        />
      </div>
      <CategoryGrid
        title="Struggling to Improve Your Financial Situation?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--circle.svg"
        iconIconoirStatUp="/icon--iconoir--statup-2.svg"
        paragraph="Financial education often feels like a maze. Whether it's managing your income, learning to invest, or understanding the basics of finance, it can be overwhelming without the right guidance."
        propTop="633.5px"
        propLeft="524px"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
      />
      <img
        className={styles.emptyIcon}
        loading="lazy"
        alt=""
        src="/frame-1321317010@2x.png"
      />
    </section>
  );
};

export default FrameComponent;