import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
        <div className={styles.footerLandie}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.footerButton}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Purchase now</div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerBackground} />
        <div className={styles.footerNavigation}>
          <div className={styles.footerPageLinks}>
            <a className={styles.home}>Home</a>
            <a className={styles.about}>About</a>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.iconsocialinstagramCopy4Parent}>
              <img
                className={styles.iconsocialinstagramCopy4}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy3}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
              />
              <img
                className={styles.iconsocialinstagramCopy2}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
              />
              <img
                className={styles.iconsocialinstagram}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
