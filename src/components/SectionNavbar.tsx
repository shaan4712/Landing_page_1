import { FunctionComponent } from "react";
import styles from "./SectionNavbar.module.css";

export type SectionNavbarType = {
  className?: string;
};

const SectionNavbar: FunctionComponent<SectionNavbarType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionnavbar2, className].join(" ")}>
      <div className={styles.logolandie}>
        <a className={styles.landie}>Landing</a>
      </div>
      <div className={styles.sectionnavbar2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.about}>About</a>
            <a className={styles.contact}>Contact</a>
          </div>
          <div className={styles.elementbuttonsmallfilledCoParent}>
            <div className={styles.elementbuttonsmallfilledCo}>
              <div className={styles.bg} />
              <a className={styles.buttonLabel}>Purchase UI Kit</a>
            </div>
            <div className={styles.elementbuttonsmallfilled}>
              <div className={styles.bg1} />
              <a className={styles.buttonLabel1}>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNavbar;
