import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Intro.module.css";

const Intro = ({
  className = "",
  undrawHappyNewsHxmt,
  introFlex,
  propPadding,
  propGap,
  introAlignSelf,
  propHeight,
  propMinWidth,
  frameDivPadding,
  frameDivMinHeight,
}) => {
  const introStyle = useMemo(() => {
    return {
      flex: introFlex,
      padding: propPadding,
      gap: propGap,
      alignSelf: introAlignSelf,
    };
  }, [introFlex, propPadding, propGap, introAlignSelf]);

  const undrawHappyNewsHxmtIconStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
    };
  }, [propHeight, propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
      minHeight: frameDivMinHeight,
    };
  }, [frameDivPadding, frameDivMinHeight]);

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
      <div className={styles.introInner} style={frameDivStyle}>
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
  introFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  introAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  frameDivPadding: PropTypes.any,
  frameDivMinHeight: PropTypes.any,
};

export default Intro;
