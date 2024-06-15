import { FunctionComponent } from "react";
import styles from "./SectionFeaturesMulti1.module.css";

export type SectionFeaturesMulti1Type = {
  className?: string;
};

const SectionFeaturesMulti1: FunctionComponent<SectionFeaturesMulti1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionfeaturesmulti63, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className={styles.infoCards}>
        <div className={styles.infoCardTitle}>
          <div className={styles.textBlocksectionlargetitle}>
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
          <div className={styles.cardIconList}>
            <div className={styles.elementcardinfoCardmediumParent}>
              <div className={styles.elementcardinfoCardmedium}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.titleParent}>
                  <div className={styles.title1}>Title Goes Here</div>
                  <p
                    className={styles.body1}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
              <div className={styles.elementcardinfoCardmedium1}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon1}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.titleGroup}>
                  <div className={styles.title2}>Title Goes Here</div>
                  <p
                    className={styles.body2}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
            </div>
            <div className={styles.elementcardinfoCardmediumGroup}>
              <div className={styles.elementcardinfoCardmedium2}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon2}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.titleContainer}>
                  <div className={styles.title3}>Title Goes Here</div>
                  <p
                    className={styles.body3}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
              <div className={styles.elementcardinfoCardmedium3}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon3}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.title4}>Title Goes Here</div>
                  <p
                    className={styles.body4}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeaturesMulti1;
