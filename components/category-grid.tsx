import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./category-grid.module.css";

export type CategoryGridType = {
  className?: string;
  title?: string;
  iconJamIconsOutlineLogos?: string;
  iconIconoirStatUp?: string;
  iconJamIconsOutlineLogos1?: string;
  paragraph?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const CategoryGrid: NextPage<CategoryGridType> = ({
  className = "",
  title,
  iconJamIconsOutlineLogos,
  iconIconoirStatUp,
  iconJamIconsOutlineLogos1,
  paragraph,
  propTop,
  propLeft,
}) => {
  const categoryGridStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={[styles.categoryGrid, className].join(" ")}
      style={categoryGridStyle}
    >
      <div className={styles.titleCategory}>
        <div className={styles.category}>Category</div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.badge}>
            <img
              className={styles.iconJamIconsOutlineL}
              alt=""
              src={iconJamIconsOutlineLogos}
            />
            <div className={styles.textContainer}>
              <div className={styles.buttonText}>+2,5%</div>
            </div>
            <img
              className={styles.iconIconoirStatUp}
              alt=""
              src={iconIconoirStatUp}
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL1}
            alt=""
            src={iconJamIconsOutlineLogos1}
          />
        </div>
      </div>
      <div className={styles.paragraph}>{paragraph}</div>
    </div>
  );
};

export default CategoryGrid;
