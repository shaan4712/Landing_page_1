import { FunctionComponent } from "react";
import styles from "./SectionNavbar1.module.css";

export type SectionNavbar1Type = {
  className?: string;
};

const SectionNavbar1: FunctionComponent<SectionNavbar1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionnavbar1, className].join(" ")}>
      <div className={styles.logolandie}>
        <a className={styles.landie}>Landing</a>
      </div>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.linkLabels}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.linkLabels1}>
            <a className={styles.about}>About</a>
          </div>
          <div className={styles.linkLabels2}>
            <a className={styles.products}>Products</a>
          </div>
          <div className={styles.linkLabels3}>
            <a className={styles.contact}>Contact</a>
          </div>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <a className={styles.buttonLabel}>Purchase UI Kit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNavbar1;
