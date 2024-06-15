import Nav from "../components/Nav";
import FrameComponent2 from "../components/FrameComponent2";
import UndrawMobileLoginIkmvEle from "../components/UndrawMobileLoginIkmvEle";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage2}>
      <img className={styles.pathIcon} alt="" src="/path.svg" />
      <section className={styles.hero}>
        <div className={styles.mask} />
        <Nav />
        <FrameComponent2 />
      </section>
      <section className={styles.content}>
        <UndrawMobileLoginIkmvEle />
        <FrameComponent3 />
        <FrameComponent4 />
      </section>
      <section className={styles.pricing}>
        <FrameComponent1 />
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
