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
            <img
              className={styles.iconJamIconsOutlineL}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName}>Home</div>
            <div className={styles.badge}>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL2}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter1}>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName1}>Challenges</div>
            <div className={styles.badge1}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel1}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL5}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter2}>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName2}>Solutions</div>
            <div className={styles.badge2}>
              <img
                className={styles.iconJamIconsOutlineL7}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel2}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL8}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter3}>
            <img
              className={styles.iconJamIconsOutlineL9}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName3}>Community</div>
            <div className={styles.badge3}>
              <img
                className={styles.iconJamIconsOutlineL10}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer3}>
                <div className={styles.buttonText3}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel3}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL11}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter4}>
            <img
              className={styles.iconJamIconsOutlineL12}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName4}>Resources</div>
            <div className={styles.badge4}>
              <img
                className={styles.iconJamIconsOutlineL13}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer4}>
                <div className={styles.buttonText4}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel4}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL14}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter5}>
            <img
              className={styles.iconJamIconsOutlineL15}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName5}>Contact</div>
            <div className={styles.badge5}>
              <img
                className={styles.iconJamIconsOutlineL16}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer5}>
                <div className={styles.buttonText5}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel5}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL17}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter6}>
            <img
              className={styles.iconJamIconsOutlineL18}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName6}>Seven</div>
            <div className={styles.badge6}>
              <img
                className={styles.iconJamIconsOutlineL19}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer6}>
                <div className={styles.buttonText6}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel6}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL20}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter7}>
            <img
              className={styles.iconJamIconsOutlineL21}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName7}>Eight</div>
            <div className={styles.badge7}>
              <img
                className={styles.iconJamIconsOutlineL22}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer7}>
                <div className={styles.buttonText7}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel7}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL23}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter8}>
            <img
              className={styles.iconJamIconsOutlineL24}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName8}>Nine</div>
            <div className={styles.badge8}>
              <img
                className={styles.iconJamIconsOutlineL25}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer8}>
                <div className={styles.buttonText8}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel8}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL26}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter9}>
            <img
              className={styles.iconJamIconsOutlineL27}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName9}>Ten</div>
            <div className={styles.badge9}>
              <img
                className={styles.iconJamIconsOutlineL28}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer9}>
                <div className={styles.buttonText9}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel9}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL29}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
