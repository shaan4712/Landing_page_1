import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import UndrawMobileLoginIkmvEle from "../components/UndrawMobileLoginIkmvEle";
import Intro from "../components/Intro";
import CallToAction from "../components/CallToAction";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage2}>
      <div className={styles.mask} />
      <Navigation1 />
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.titleParent}>
            <h1
              className={styles.title}
            >{`Introduce Your Product Quickly & Effectively`}</h1>
            <p className={styles.body}>
              <span
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</span>
              <span className={styles.musDonecQuam}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </span>
            </p>
          </div>
          <div className={styles.largeButtons}>
            <div className={styles.elementbuttonlargefilled}>
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase UI Kit</div>
            </div>
            <div className={styles.elementbuttonlargefilledCo}>
              <div className={styles.bg1} />
              <a className={styles.buttonLabel1}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <UndrawMobileLoginIkmvEle />
      <Intro />
      <section className={styles.introCopy}>
        <div className={styles.rectangle} />
        <img
          className={styles.undrawSocialInfluencerSgsvIcon}
          loading="lazy"
          alt=""
          src="/undraw-social-influencer-sgsv.svg"
        />
        <div className={styles.infoTitleWrapper}>
          <div className={styles.infoTitle}>
            <h1 className={styles.title1}>{`Light, Fast & Powerful`}</h1>
            <p className={styles.body1}>
              <span
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</span>
              <span className={styles.musDonecQuam1}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </span>
            </p>
          </div>
        </div>
      </section>
      <CallToAction />
      <Pricing />
      <Footer />
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
    </div>
  );
};

export default LandingPage;
