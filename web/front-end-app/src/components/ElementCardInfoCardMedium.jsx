import PropTypes from "prop-types";
import styles from "./ElementCardInfoCardMedium.module.css";

const ElementCardInfoCardMedium = ({ className = "" }) => {
  return (
    <div className={[styles.elementcardinfoCardmedium, className].join(" ")}>
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className={styles.cardContent}>
        <div className={styles.title}>Title Goes Here</div>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </p>
      </div>
    </div>
  );
};

ElementCardInfoCardMedium.propTypes = {
  className: PropTypes.string,
};

export default ElementCardInfoCardMedium;
