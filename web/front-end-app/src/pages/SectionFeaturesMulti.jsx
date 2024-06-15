import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import Samsung from "../components/Samsung";
import styles from "./SectionFeaturesMulti.module.css";

const SectionFeaturesMulti = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page-2");
  }, [navigate]);

  return (
    <div className={styles.sectionfeaturesmulti82}>
      <div className={styles.main}>
        <div className={styles.content}>
          <a className={styles.home} onClick={onHomeTextClick}>
            Home
          </a>
        </div>
        <FrameComponent />
      </div>
      <div className={styles.devicessamsungvertWrapper}>
        <div className={styles.devicessamsungvert}>
          <Samsung />
        </div>
      </div>
    </div>
  );
};

export default SectionFeaturesMulti;
