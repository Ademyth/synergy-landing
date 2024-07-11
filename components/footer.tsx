import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propWidth?: CSSProperties["width"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  propPadding,
  propAlignSelf,
  propMarginLeft,
  propWidth,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
      marginLeft: propMarginLeft,
      width: propWidth,
    };
  }, [propPadding, propAlignSelf, propMarginLeft, propWidth]);

  return (
    <section
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <img
            className={styles.synergyBookClub2}
            alt=""
            src="/synergy-book-club-2@2x.png"
          />
          <div className={styles.allRightsReserved}>
            @ 2023. All rights reserved.
          </div>
        </div>
        <div className={styles.footerComponentsverticalMen}>
          <div className={styles.footerComponentslinkfooter}>
            
            <div className={styles.linkName}>Home</div>
          </div>
          <div className={styles.footerComponentslinkfooter1}>
            <div className={styles.linkName1}>Challenges</div>
          </div>
          <div className={styles.footerComponentslinkfooter2}>
            <div className={styles.linkName2}>Solutions</div>
          </div>
          <div className={styles.footerComponentslinkfooter3}>
            <div className={styles.linkName3}>Community</div>
          </div>
          <div className={styles.footerComponentslinkfooter4}>
            <div className={styles.linkName4}>Resources</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
