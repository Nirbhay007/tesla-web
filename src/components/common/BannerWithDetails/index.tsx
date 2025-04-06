import React from "react";
import { BannerWithDetailsProps } from "../../../@types/bannerDetails";
import styles from "./index.module.css";

interface CSSPropertiesWithVars extends React.CSSProperties {
  "--content-color"?: String;
}

const BannerWithDetails: React.FC<BannerWithDetailsProps> = ({
  imageUrl,
  isImageInPlaceOfTitle,
  title,
  description,
  color,
  buttonValues,
}) => {
  const style: CSSPropertiesWithVars = {
    backgroundImage: `url(${imageUrl})`,
    "--content-color": color,
  };

  return (
    <div style={style} className={styles.container}>
      <div className={styles.content}>
        {isImageInPlaceOfTitle && (
          <img
            src={isImageInPlaceOfTitle}
            alt="title image"
            width={450}
            height={130}
          />
        )}
        {!isImageInPlaceOfTitle && (
          <>
            <h1 className={styles.title}>{title}</h1>~`
            <h3 className={styles.description}>{description}</h3>
          </>
        )}
      </div>

      <div className={styles.buttonGroup}>
        {buttonValues?.map((buttonData, key) => {
          const dynamicClassName = `btn-${key + 1}`;
          return (
            <button
              key={key}
              className={`${styles.button} ${styles[dynamicClassName]}`}
            >
              {buttonData?.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BannerWithDetails;
