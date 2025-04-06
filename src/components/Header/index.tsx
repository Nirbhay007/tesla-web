import styles from "./index.module.css";
import logo from "../../assets/images/logo.svg";
import profile from "../../assets/images/profile.svg";
import help from "../../assets/images/help.svg";
import globe from "../../assets/images/globe.svg";

const Header = () => {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="logo" width={120} height={35} />
      <div className={styles.navMid}>
        <span className={styles.midBtn}>Vehicles</span>
        <span className={styles.midBtn}>Energy</span>
        <span className={styles.midBtn}>Charging</span>
        <span className={styles.midBtn}>Discover</span>
        <span className={styles.midBtn}>Shop</span>
      </div>
      <div className={styles.navRight}>
        <img src={help} alt="help" width={25} height={25} />
        <img src={globe} alt="globe image" width={25} height={25} />
        <img src={profile} alt="profile image" width={25} height={25} />
      </div>
    </div>
  );
};

export default Header;
