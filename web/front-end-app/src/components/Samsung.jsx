import PropTypes from "prop-types";
import styles from "./Samsung.module.css";

const Samsung = ({ className = "" }) => {
  return (
    <div className={[styles.samsung, className].join(" ")}>
      <img className={styles.bodyIcon} alt="" src="/body@2x.png" />
      <img className={styles.screenIcon} alt="" src="/screen@2x.png" />
      <img
        className={styles.reflectionsIcon}
        alt=""
        src="/reflections@2x.png"
      />
      <div className={styles.camera}>
        <div className={styles.cameraLens} />
        <div className={styles.group}>
          <img
            className={styles.groupChild}
            loading="lazy"
            alt=""
            src="/group-7@2x.png"
          />
          <img className={styles.groupItem} alt="" src="/group-7-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

Samsung.propTypes = {
  className: PropTypes.string,
};

export default Samsung;
