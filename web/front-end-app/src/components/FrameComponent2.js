import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onElementButtonLargeFilledContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBGClick = useCallback(() => {
    navigate("/sectionfeaturesmulti63");
  }, [navigate]);

  return (
    <div className={[styles.heroContent, className].join(" ")}>
      <div className={styles.heroContentInner}>
        <div className={styles.frameParent}>
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
          <div className={styles.heroButtons}>
            <div
              className={styles.elementbuttonlargefilled}
              onClick={onElementButtonLargeFilledContainerClick}
            >
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase UI Kit</div>
            </div>
            <div className={styles.elementbuttonlargefilledCo}>
              <div className={styles.bg1} onClick={onBGClick} />
              <a className={styles.buttonLabel1}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.designer1Icon}
        loading="lazy"
        alt=""
        src="/designer-1@2x.png"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
