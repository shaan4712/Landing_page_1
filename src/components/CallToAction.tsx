import { FunctionComponent } from "react";
import styles from "./CallToAction.module.css";

export type CallToActionType = {
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <div className={styles.cta}>
        <div className={styles.ctaBackground} />
        <img
          className={styles.undrawMention6k5dIcon}
          loading="lazy"
          alt=""
          src="/undraw-mention-6k5d@2x.png"
        />
        <div className={styles.ctaContentWrapper}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaMessage}>
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
            <div className={styles.elementbuttonmediumfilled}>
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
