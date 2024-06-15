import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Intro.module.css";

const Intro = ({
  className = "",
  undrawHappyNewsHxmt,
  propPadding,
  propGap,
  propMarginBottom,
  propHeight,
  propMinWidth,
  propPadding1,
  propMinHeight,
}) => {
  const introStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      marginBottom: propMarginBottom,
    };
  }, [propPadding, propGap, propMarginBottom]);

  const undrawHappyNewsHxmtIconStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
    };
  }, [propHeight, propMinWidth]);

  const introContentStyle = useMemo(() => {
    return {
      padding: propPadding1,
      minHeight: propMinHeight,
    };
  }, [propPadding1, propMinHeight]);

  return (
    <section className={[styles.intro, className].join(" ")} style={introStyle}>
      <div className={styles.rectangle} />
      <img
        className={styles.undrawHappyNewsHxmtIcon}
        loading="lazy"
        alt=""
        src={undrawHappyNewsHxmt}
        style={undrawHappyNewsHxmtIconStyle}
      />
      <div className={styles.introContent} style={introContentStyle}>
        <div className={styles.titleParent}>
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
    </section>
  );
};

Intro.propTypes = {
  className: PropTypes.string,
  undrawHappyNewsHxmt: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propMarginBottom: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default Intro;
