import PropTypes from "prop-types";
import styles from "./UndrawMobileLoginIkmvEle.module.css";

const UndrawMobileLoginIkmvEle = ({ className = "" }) => {
  return (
    <section className={[styles.undrawMobileLoginIkmvEle, className].join(" ")}>
      <div className={styles.mask} />
      <img
        className={styles.undrawMobileLoginIkmvIcon}
        loading="lazy"
        alt=""
        src="/undraw-mobile-login-ikmv@2x.png"
      />
      <p
        className={styles.body}
      >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
      <div className={styles.title}>Title Goes Here</div>
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft2@2x.png"
      />
      <p
        className={styles.body1}
      >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
      <div className={styles.title1}>Title Goes Here</div>
      <img
        className={styles.elementcardinfoCardsmalliIcon1}
        alt=""
        src="/elementcardinfocardsmalliconpositionleft2@2x.png"
      />
      <p className={styles.body2}>
        <span
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</span>
        <span className={styles.musDonecQuam}>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </span>
      </p>
      <h1 className={styles.title2}>{`Light, Fast & Powerful`}</h1>
    </section>
  );
};

UndrawMobileLoginIkmvEle.propTypes = {
  className: PropTypes.string,
};

export default UndrawMobileLoginIkmvEle;
