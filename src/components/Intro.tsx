import { FunctionComponent } from "react";
import styles from "./Intro.module.css";

export type IntroType = {
  className?: string;
};

const Intro: FunctionComponent<IntroType> = ({ className = "" }) => {
  return (
    <section className={[styles.intro, className].join(" ")}>
      <img
        className={styles.designer1Icon}
        loading="lazy"
        alt=""
        src="/designer-1@2x.png"
      />
      <div className={styles.intro1}>
        <div className={styles.rectangle} />
        <img
          className={styles.undrawHappyNewsHxmtIcon}
          loading="lazy"
          alt=""
          src="/undraw-happy-news-hxmt@2x.png"
        />
        <div className={styles.introTitleWrapper}>
          <div className={styles.introTitle}>
            <h1 className={styles.title}>{`Light, Fast & Powerful`}</h1>
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
        </div>
      </div>
    </section>
  );
};

export default Intro;
