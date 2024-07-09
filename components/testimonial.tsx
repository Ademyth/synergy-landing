// import type { NextPage } from "next";
// import styles from "./testimonial.module.css";

// export type TestimonialType = {
//   className?: string;
// };

// const Testimonial: NextPage<TestimonialType> = ({ className = "" }) => {
//   return (
//     <section className={[styles.testimonial, className].join(" ")}>
//       <b className={styles.caption}>Caption</b>
//       <div className={styles.mainHeadline}>Find similar stories</div>
//       <h1 className={styles.secondaryHeadline}>
//         Hear From Our Community Members
//       </h1>
//       <div className={styles.testimonialContent}>
//         <div className={styles.testimonialDetails}>
//           <img
//             className={styles.whatsappImage20240628At2}
//             loading="lazy"
//             alt=""
//             src="/whatsapp-image-20240628-at-20517-am-1-1@2x.png"
//           />
//           <div className={styles.contentBox}>
//             <div className={styles.content}>
//               <div className={styles.icon}>
//               </div>
//               <div className={styles.titleCategory}>
//                 <b className={styles.category}>Soladayo A.</b>
//                 <div className={styles.titleContainer}>
//                   <div className={styles.title}>
//                     This community has been a game-changer! It helps me read a
//                     book every month with personalized recommendations and
//                     tracking features. A must-have for book lovers!
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.slider}>
//         <div className={styles.sliderCues}>
//           <div className={styles.slide} />
//           <div className={styles.slide1} />
//           <div className={styles.slide2} />
//           <div className={styles.slide3} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

// import type { NextPage } from "next";
// import styles from "./testimonial.module.css";
// import Slider from "react-slick";

// export type TestimonialType = {
//   className?: string;
// };

// const Testimonial: NextPage<TestimonialType> = ({ className = "" }) => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   const testimonialContent = (
//     <div className={styles.testimonialDetails}>
//       <img
//         className={styles.whatsappImage20240628At2}
//         loading="lazy"
//         alt=""
//         src="/whatsapp-image-20240628-at-20517-am-1-1@2x.png"
//       />
//       <div className={styles.contentBox}>
//         <div className={styles.content}>
//           <div className={styles.icon} />
//           <div className={styles.titleCategory}>
//             <b className={styles.category}>Soladayo A.</b>
//             <div className={styles.titleContainer}>
//               <div className={styles.title}>
//                 This community has been a game-changer! It helps me read a
//                 book every month with personalized recommendations and
//                 tracking features. A must-have for book lovers!
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className={[styles.testimonial, className].join(" ")}>
//       <b className={styles.caption}>Caption</b>
//       <div className={styles.mainHeadline}>Find similar stories</div>
//       <h1 className={styles.secondaryHeadline}>
//         Hear From Our Community Members
//       </h1>
//       <Slider {...sliderSettings} className={styles.testimonialContent}>
//         {testimonialContent}
//         {testimonialContent}
//         {testimonialContent}
//       </Slider>
//     </section>
//   );
// };

// export default Testimonial;

import type { NextPage } from "next";
import styles from "./testimonial.module.css";
import Slider from "react-slick";

export type TestimonialType = {
  className?: string;
};

const Testimonial: NextPage<TestimonialType> = ({ className = "" }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const testimonials = [
    {
      imageUrl: "/whatsapp-image-20240628-at-20517-am-1-1@2x.png",
      author: "Soladayo A.",
      content:
        "This community has been a game-changer! It helps me read a book every month with personalized recommendations and tracking features. A must-have for book lovers!",
    },
    {
      imageUrl: "/image2.png",
      author: "Bamisaye A.",
      content:
        "Being part of a community that shares your passion for reading and self-development can be incredibly motivating and rewarding. And incorporating technology, such as book reading apps, can enhance the experience in many ways.",
    },
    {
      imageUrl: "/image1.png",
      author: "Oreofeoluwa O.",
      content:
        "The community's resources are top-notch. From personal development to financial education, I feel more equipped to handle life's challenges.",
    },
  ];

  return (
    <section className={[styles.testimonial, className].join(" ")}>
      <b className={styles.caption}>Caption</b>
      <div className={styles.mainHeadline}>Find similar stories</div>
      <h1 className={styles.secondaryHeadline}>
        Hear From Our Community Members
      </h1>
      <Slider {...sliderSettings} className={styles.testimonialContent}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialDetails}>
            <img
              className={styles.whatsappImage20240628At2 }
              loading="lazy"
              alt=""
              src={testimonial.imageUrl}
            />
            <div className={styles.contentBox}>
              <div className={styles.content}>
                <div className={styles.icon} />
                <div className={styles.titleCategory}>
                  <b className={styles.category}>{testimonial.author}</b>
                  <div className={styles.titleContainer}>
                    <div className={styles.title}>
                      {testimonial.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;


