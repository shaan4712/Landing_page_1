import { useCallback } from "react";
import Intro from "./Intro";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onElementButtonMediumFilledContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.introCopyParent, className].join(" ")}>
      <Intro
        undrawHappyNewsHxmt="/undraw-social-influencer-sgsv.svg"
        introFlex="unset"
        propPadding="var(--padding-72xl-8) var(--padding-146xl) var(--padding-71xl-2)"
        propGap="125px"
        introAlignSelf="stretch"
        propHeight="387px"
        propMinWidth="351px"
        frameDivPadding="0px 0px var(--padding-58xl)"
        frameDivMinHeight="307px"
      />
      <div className={styles.ctaWrapper}>
        <div className={styles.cta}>
          <div className={styles.ctaBackground} />
          <img
            className={styles.undrawMention6k5dIcon}
            loading="lazy"
            alt=""
            src="/undraw-mention-6k5d@2x.png"
          />
          <div className={styles.ctaInner}>
            <div className={styles.frameParent}>
              <div className={styles.titleParent}>
                <h1 className={styles.title}>{`Light, Fast & Powerful`}</h1>
                <p className={styles.body}>
                  <span
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</span>
                  <span className={styles.musDonecQuam}>
                    mus. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nulla consequat massa quis enim.
                  </span>
                </p>
              </div>
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
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
