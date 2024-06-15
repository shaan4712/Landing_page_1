import { FunctionComponent } from "react";
import styles from "./UndrawMobileLoginIkmvEle.module.css";

export type UndrawMobileLoginIkmvEleType = {
  className?: string;
};

const UndrawMobileLoginIkmvEle: FunctionComponent<
  UndrawMobileLoginIkmvEleType
> = ({ className = "" }) => {
  return (
    <section className={[styles.undrawMobileLoginIkmvEle, className].join(" ")}>
      <div className={styles.mask} />
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.cardInfo}>
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
          <div className={styles.infoCards}>
            <div className={styles.infoCardPair}>
              <img
                className={styles.elementcardinfoCardsmalliIcon}
                loading="lazy"
                alt=""
                src="/elementcardinfocardsmalliconpositionleft2@2x.png"
              />
              <div className={styles.smallCardInfo}>
                <div className={styles.title1}>Title Goes Here</div>
                <p
                  className={styles.body1}
                >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
              </div>
            </div>
            <div className={styles.infoCardPair1}>
              <img
                className={styles.elementcardinfoCardsmalliIcon1}
                alt=""
                src="/elementcardinfocardsmalliconpositionleft2@2x.png"
              />
              <div className={styles.titleParent}>
                <div className={styles.title2}>Title Goes Here</div>
                <p
                  className={styles.body2}
                >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.undrawMobileLoginIkmvIcon}
        loading="lazy"
        alt=""
        src="/undraw-mobile-login-ikmv@2x.png"
      />
    </section>
  );
};

export default UndrawMobileLoginIkmvEle;
