import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Nav.module.css";

const Nav = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
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

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onElementButtonSmallFilledContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.nav, className].join(" ")}>
      <nav className={styles.homeLinksWrapper}>
        <div className={styles.homeLinks}>
          <a className={styles.home} onClick={onHomeTextClick}>
            Home
          </a>
          <a className={styles.about} onClick={onAboutTextClick}>
            About
          </a>
          <a className={styles.contact} onClick={onContactTextClick}>
            Contact
          </a>
        </div>
      </nav>
      <div className={styles.rectangle} data-scroll-to="rectangle" />
      <div className={styles.landieLogo}>
        <a className={styles.landie}>Landing</a>
      </div>
      <div className={styles.smallFilledButton}>
        <div
          className={styles.elementbuttonsmallfilled}
          onClick={onElementButtonSmallFilledContainerClick}
        >
          <div className={styles.bg} />
          <a className={styles.buttonLabel}>Buy Now</a>
        </div>
      </div>
    </header>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
