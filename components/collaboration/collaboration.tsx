// import type { NextPage } from "next";
// import styles from "./collaboration.module.css";

// export type CollaborationType = {
//   className?: string;
// };

// const Collaboration: NextPage<CollaborationType> = ({ className = "" }) => {
//   return (
//     <section
//       className={[styles.collaboration, className].join(" ")}
//       data-scroll-to="collaboration"
//     >
//       <div className={styles.collaborationImage}>
//         <img
//           className={styles.peopleOfficeWorkDay11}
//           loading="lazy"
//           alt=""
//           src="/peopleofficeworkday-1-1@2x.png"
//         />
//         <div className={styles.collaborationContent}>
//           <div className={styles.collaborateWithTeaParent}>
//             <h1 className={styles.collaborateWithTea}>
//               Discover the Solution with Us at Synergy Community by Joining
//               Today!
//             </h1>
//             <div className={styles.paragraph}>
//               At Synergy Community, we understand these struggles and are here
//               to help you overcome them. Become a part of our supportive and
//               growth-focused community to start your journey towards personal
//               development, financial success, and overall wellness.
//             </div>
//           </div>
//           <div className={styles.signup}>
//             <div className={styles.textContainer}>
//               <b className={styles.signUpFor}>Sign up for free</b>
//             </div>
//             <img
//               className={styles.iconIconoirArrowRight}
//               loading="lazy"
//               alt=""
//               src="/icon--iconoir--arrowright.svg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Collaboration;

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import styles from "./collaboration.module.css";

export type CollaborationType = {
  className?: string;
};

const Collaboration: NextPage<CollaborationType> = ({ className = "" }) => {
  const router = useRouter();

  const onSignUpClick = useCallback(() => {
    router.push("/signup");
  }, [router]);

  return (
    <section
      className={[styles.collaboration, className].join(" ")}
      data-scroll-to="collaboration"
    >
      <div className={styles.collaborationImage}>
        <img
          className={styles.peopleOfficeWorkDay11}
          loading="lazy"
          alt=""
          src="/peopleofficeworkday-1-1@2x.png"
        />

        <div className={styles.collaborationContent}>
          <div className={styles.collaborateWithTeaParent}>
            <h1 className={styles.collaborateWithTea}>
              Discover the Solution with Us at Synergy Community by Joining
              Today!
            </h1>
            <div className={styles.paragraph}>
              At Synergy Community, we understand these struggles and are here
              to help you overcome them. Become a part of our supportive and
              growth-focused community to start your journey towards personal
              development, financial success, and overall wellness.
            </div>
          </div>
          <div className={styles.signup} onClick={onSignUpClick}>
            <div className={styles.textContainer}>
              <b className={styles.signUpFor}>Sign up for free</b>
            </div>
            <img
              className={styles.iconIconoirArrowRight}
              loading="lazy"
              alt=""
              src="/icon--iconoir--arrowright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
