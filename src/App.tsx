import styles from "./app.module.css";
import BannerWithDetails from "./components/common/BannerWithDetails";
import { bannerData } from "./utils/bannerData.ts";

function App() {
  return (
    <main className={styles.mainContainer}>
      {bannerData?.map((data, index) => (
        <BannerWithDetails key={index} {...data} />
      ))}
    </main>
  );
}

export default App;
