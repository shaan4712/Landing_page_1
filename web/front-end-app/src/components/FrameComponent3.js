import Intro from "./Intro";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.introWrapper, className].join(" ")}>
      <Intro undrawHappyNewsHxmt="/undraw-happy-news-hxmt@2x.png" />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
