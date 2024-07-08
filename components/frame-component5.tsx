import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ChallengeItem from "./challenge-item";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  const router = useRouter();

  const onSynergyBookClubClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <ChallengeItem
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--playcircle1.svg"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright4.svg"
        iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--plus4.svg"
        iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--arrowright.svg"
        iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--plus1.svg"
        iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--arrowright1.svg"
        buttonsGroupWidth="unset"
        buttonsGroupAlignSelf="unset"
        buttonsGroupFlex="1"
        onSynergyBookClubClick={onSynergyBookClubClick}
        onHomeTextClick={onSynergyBookClubClick}
        onChallengesTextClick={onSynergyBookClubClick}
        onSolutionTextClick={onSynergyBookClubClick}
        onCommunityTextClick={onSynergyBookClubClick}
      />
    </div>
  );
};

export default FrameComponent5;
