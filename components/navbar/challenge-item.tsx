import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import styles from "./challenge-item.module.css";

export type ChallengeItemType = {
  className?: string;
  iconJamIconsOutlineLogos?: string;
  iconJamIconsOutlineLogos1?: string;
  iconJamIconsOutlineLogos2?: string;
  iconJamIconsOutlineLogos3?: string;
  iconJamIconsOutlineLogos4?: string;
  iconJamIconsOutlineLogos5?: string;

  /** Style props */
  buttonsGroupWidth?: CSSProperties["width"];
  buttonsGroupAlignSelf?: CSSProperties["alignSelf"];
  buttonsGroupFlex?: CSSProperties["flex"];

  /** Action props */
  onSynergyBookClubClick?: () => void;
  onHomeTextClick?: () => void;
  onChallengesTextClick?: () => void;
  onSolutionTextClick?: () => void;
  onCommunityTextClick?: () => void;
};

const ChallengeItem: NextPage<ChallengeItemType> = ({
  className = "",
  buttonsGroupWidth,
  buttonsGroupAlignSelf,
  buttonsGroupFlex,
  onSynergyBookClubClick,
  onHomeTextClick,
  onChallengesTextClick,
  onSolutionTextClick,
  onCommunityTextClick,
}) => {
  const challengeItemStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonsGroupWidth,
      alignSelf: buttonsGroupAlignSelf,
      flex: buttonsGroupFlex,
    };
  }, [buttonsGroupWidth, buttonsGroupAlignSelf, buttonsGroupFlex]);

  const onHomeTextClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='hero']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChallengesTextClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSolutionTextClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='collaboration']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCommunityTextClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='highAngleYoungPeopleChurchImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={[styles.challengeItem, className].join(" ")}
      style={challengeItemStyle}
    >
      <div className={styles.challengeItem1}>
        <img
          className={styles.synergyBookClub2}
          loading="lazy"
          alt=""
          src="/synergy-book-club-2@2x.png"
          onClick={onSynergyBookClubClick}
        />
        <nav className={styles.homeChallenge}>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.challenges} onClick={onChallengesTextClick}>
            Challenges
          </div>
          <div className={styles.solution} onClick={onSolutionTextClick}>
            Solution
          </div>
          <div className={styles.community} onClick={onCommunityTextClick}>
            Community
          </div>
        </nav>
      </div>
      <div className={styles.auth}>
        <button className={styles.button}>
          <div className={styles.textContainer}>
            <div className={styles.login}>Login</div>
          </div>
        </button>
        <div className={styles.buttonsGroup}>
          <div className={styles.button1}>
            <div className={styles.textContainer1}>
              <a className={styles.getStarted}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeItem;
