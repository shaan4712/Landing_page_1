import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ElementCardInfoCardMedium from "./ElementCardInfoCardMedium";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/landing-page-2");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/sectionfeaturesmulti63");
  }, [navigate]);

  const onElementButtonSmallFilledContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='textBlockSectionLargeTitleContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.aboutContentParent, className].join(" ")}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutPoints}>
          <a className={styles.about} onClick={onAboutTextClick}>
            About
          </a>
        </div>
        <div className={styles.aboutPoints1}>
          <a className={styles.products} onClick={onProductsTextClick}>
            Products
          </a>
        </div>
        <div className={styles.aboutPoints2}>
          <a className={styles.contact} onClick={onAboutTextClick}>
            Contact
          </a>
        </div>
        <div
          className={styles.elementbuttonsmallfilled}
          onClick={onElementButtonSmallFilledContainerClick}
        >
          <div className={styles.bg} />
          <a className={styles.buttonLabel}>Purchase UI Kit</a>
        </div>
      </div>
      <div className={styles.description}>
        <div
          className={styles.textBlocksectionlargetitle}
          data-scroll-to="textBlockSectionLargeTitleContainer"
        >
          <h1
            className={styles.title}
          >{`Design & Build Your Own Landing Pages`}</h1>
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
      <div className={styles.cards}>
        <div className={styles.cardList}>
          <ElementCardInfoCardMedium />
          <ElementCardInfoCardMedium />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
