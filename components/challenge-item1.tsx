import type { NextPage } from "next";
import { useCallback } from "react";
import ChallengeItem from "./challenge-item";
import styles from "./challenge-item1.module.css";

export type ChallengeItem1Type = {
  className?: string;
};

const ChallengeItem1: NextPage<ChallengeItem1Type> = ({ className = "" }) => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='hero']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChallengesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSolutionTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='collaboration']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCommunityTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='highAngleYoungPeopleChurchImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={[styles.challengeItem, className].join(" ")}>
      <div className={styles.challengeItemChild} />
      <ChallengeItem
        iconJamIconsOutlineLogos="pending_234:974"
        iconJamIconsOutlineLogos1="pending_234:977"
        iconJamIconsOutlineLogos2="pending_234:980"
        iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--arrowright.svg"
        iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus1.svg"
        iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright1.svg"
        onHomeTextClick={onHomeTextClick}
        onChallengesTextClick={onChallengesTextClick}
        onSolutionTextClick={onSolutionTextClick}
        onCommunityTextClick={onCommunityTextClick}
      />
    </header>
  );
};

export default ChallengeItem1;
