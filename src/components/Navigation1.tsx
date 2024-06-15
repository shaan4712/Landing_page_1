import { FunctionComponent } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.navigation, className].join(" ")}>
      <header className={styles.nav}>
        <nav className={styles.primaryLinks}>
          <nav className={styles.pageLinks}>
            <a className={styles.home}>Home</a>
            <a className={styles.about}>About</a>
            <a className={styles.contact}>Contact</a>
          </nav>
        </nav>
        <div className={styles.rectangle} />
        <div className={styles.landieLink}>
          <a className={styles.landie}>Landing</a>
        </div>
        <div className={styles.smallButton}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <a className={styles.buttonLabel}>Buy Now</a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navigation1;
