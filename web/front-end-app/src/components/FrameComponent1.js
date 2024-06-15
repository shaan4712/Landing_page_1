import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onElementButtonMediumFilledContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.pricingContent, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.priceInfo}>
        <h1 className={styles.title}>A Price To Suit Everyone</h1>
        <p
          className={styles.body}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
      </div>
      <div className={styles.priceValue}>
        <div className={styles.priceParent}>
          <div className={styles.price}>$40</div>
          <p className={styles.title1}>UI Design Kit</p>
        </div>
      </div>
      <div className={styles.pricingButton}>
        <div className={styles.pricingButtonContent}>
          <div className={styles.body1}>See, One price. Simple.</div>
          <div className={styles.pricingMediumFilledButton}>
            <div
              className={styles.elementbuttonmediumfilled}
              onClick={onElementButtonMediumFilledContainerClick}
            >
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
