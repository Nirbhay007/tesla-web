import { FooterInfo } from "../../@types/footerInfo";
import styles from "./index.module.css";

const Footer: React.FC<FooterInfo> = ({ infoData, linksData }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        {infoData &&
          infoData?.info?.map((item, key) => {
            return (
              <p key={key}>
                <span>{key + 1 + " "}</span>
                {item}
              </p>
            );
          })}
      </div>
      <div className={styles.links}>
        {linksData &&
          linksData?.links?.map((link, key) => {
            return <span>{link}</span>;
          })}
      </div>
    </div>
  );
};

export default Footer;
