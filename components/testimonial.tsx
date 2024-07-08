import type { NextPage } from "next";
import styles from "./testimonial.module.css";

export type TestimonialType = {
  className?: string;
};

const Testimonial: NextPage<TestimonialType> = ({ className = "" }) => {
  return (
    <section className={[styles.testimonial, className].join(" ")}>
      <b className={styles.caption}>Caption</b>
      <div className={styles.mainHeadline}>Find similar stories</div>
      <h1 className={styles.secondaryHeadline}>
        Hear From Our  Community Members
      </h1>
      <div className={styles.buttonsGroup}>
        <div className={styles.button}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--plus4.svg"
          />
          <div className={styles.textContainer}>
            <b className={styles.buttonText}>Start For Free</b>
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
            <div className={styles.buttonText1}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL3}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
        </div>
        <div className={styles.button3}>
          <img
            className={styles.iconJamIconsOutlineL4}
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className={styles.textContainer2}>
            <div className={styles.buttonText2}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL5}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
          <div className={styles.badge}>
            <div className={styles.text}>9</div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialDetails}>
          <img
            className={styles.whatsappImage20240628At2}
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240628-at-20517-am-1-1@2x.png"
          />
          <div className={styles.contentBox}>
            <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
            <div className={styles.content}>
              <div className={styles.icon}>
                <img
                  className={styles.iconJamIconsOutlineL6}
                  alt=""
                  src="/icon--jamicons--outline--logos--alarmclock.svg"
                />
              </div>
              <div className={styles.titleCategory}>
                <b className={styles.category}>Soladayo A.</b>
                <div className={styles.titleContainer}>
                  <div className={styles.title}>
                    This community has been a game-changer! It helps me read a
                    book every month with personalized recommendations and
                    tracking features. A must-have for book lovers!
                  </div>
                  <div className={styles.badge1}>
                    <img
                      className={styles.iconJamIconsOutlineL7}
                      alt=""
                      src="/icon--jamicons--outline--logos--circle.svg"
                    />
                    <div className={styles.textContainer3}>
                      <div className={styles.buttonText3}>+2,5%</div>
                    </div>
                    <img
                      className={styles.iconIconoirStatUp}
                      alt=""
                      src="/icon--iconoir--statup-2.svg"
                    />
                  </div>
                  <img
                    className={styles.iconJamIconsOutlineL8}
                    alt=""
                    src="/icon--jamicons--outline--logos--pencil.svg"
                  />
                </div>
              </div>
              <img
                className={styles.pictureIcon1}
                alt=""
                src="/picture@2x.png"
              />
              <div className={styles.paragraph}>
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </div>
              <div className={styles.userCard}>
                <img
                  className={styles.userThumbIcon}
                  alt=""
                  src="/user-thumb-12@2x.png"
                />
                <div className={styles.details}>
                  <div className={styles.category1}>Jane Doe</div>
                  <div className={styles.category2}>Senior Designer</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsGroup1}>
              <div className={styles.button1}>
                <img
                  className={styles.iconJamIconsOutlineL9}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className={styles.textContainer4}>
                  <div className={styles.buttonText4}>Read Full Story</div>
                </div>
                <input
                  className={styles.iconJamIconsOutlineL10}
                  type="checkbox"
                />
                <div className={styles.badge2}>
                  <div className={styles.text1}>9</div>
                </div>
              </div>
              <div className={styles.button4}>
                <img
                  className={styles.iconJamIconsOutlineL11}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className={styles.textContainer5}>
                  <div className={styles.buttonText5}>Event Details</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL12}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
              </div>
            </div>
            <div className={styles.badge3}>
              <img
                className={styles.iconJamIconsOutlineL13}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer6}>
                <div className={styles.buttonText6}>Featured</div>
              </div>
              <img
                className={styles.iconIconoirCancel}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.userThumbIcon1}
              alt=""
              src="/user-thumb@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderCues}>
          <div className={styles.slide} />
          <div className={styles.slide1} />
          <div className={styles.slide2} />
          <div className={styles.slide3} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
