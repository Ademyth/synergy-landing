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
        onHomeTextClick={onHomeTextClick}
        onChallengesTextClick={onChallengesTextClick}
        onSolutionTextClick={onSolutionTextClick}
        onCommunityTextClick={onCommunityTextClick}
      />
    </header>
  );
};

export default ChallengeItem1;
