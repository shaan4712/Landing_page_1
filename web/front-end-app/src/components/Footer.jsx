import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onElementButtonSmallFilledContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mask']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onIconSocialInstagramCopyClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onIconSocialInstagramCopyClick1 = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  const onIconSocialInstagramCopyClick2 = useCallback(() => {
    window.open("https://x.com");
  }, []);

  const onIconSocialInstagramCopyClick3 = useCallback(() => {
    window.open("https://www.youtube.com/");
  }, []);

  const onIconSocialInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div
        className={styles.footerBackground}
        data-scroll-to="footerBackground"
      />
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
        <div className={styles.footerLogo}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.footerSmallFilledButton}>
          <div
            className={styles.elementbuttonsmallfilled}
            onClick={onElementButtonSmallFilledContainerClick}
          >
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Purchase now</div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerBackground1} />
        <div className={styles.footerLinksContent}>
          <div className={styles.footerHomeLinks}>
            <a className={styles.home} onClick={onHomeTextClick}>
              Home
            </a>
            <a className={styles.about} onClick={onAboutTextClick}>
              About
            </a>
            <div className={styles.contact} onClick={onHomeTextClick}>
              Contact
            </div>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.iconsocialinstagramCopy4Parent}>
              <img
                className={styles.iconsocialinstagramCopy4}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
                onClick={onIconSocialInstagramCopyClick}
              />
              <img
                className={styles.iconsocialinstagramCopy3}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
                onClick={onIconSocialInstagramCopyClick1}
              />
              <img
                className={styles.iconsocialinstagramCopy2}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
                onClick={onIconSocialInstagramCopyClick2}
              />
              <img
                className={styles.iconsocialinstagramCopy}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
                onClick={onIconSocialInstagramCopyClick3}
              />
              <img
                className={styles.iconsocialinstagram}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
                onClick={onIconSocialInstagramClick}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
