import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ChallengeItem from "../components/challenge-item";
import Content1 from "../components/content1";
import Footer from "../components/footer";
import styles from "./finance.module.css";

const Finance: NextPage = () => {
  const router = useRouter();

  const onSynergyBookClubClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.finance}>
      <main className={styles.financeInner}>
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
          <Content1 />
        </section>
      </main>
      <div className={styles.financeChild} />
      <Footer
        propPadding="49px 20px 50px"
        propAlignSelf="stretch"
        propMarginLeft="unset"
        propWidth="unset"
      />
    </div>
  );
};

export default Finance;