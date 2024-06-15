import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SectionFeaturesMulti1.module.css";

const SectionFeaturesMulti1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page-2");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='textBlockSectionLargeTitleContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.sectionfeaturesmulti63, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className={styles.infoCardTitleWrapper}>
        <div className={styles.infoCardTitle}>
          <div className={styles.infoCardTitleInner}>
            <div className={styles.menuItemsParent}>
              <div className={styles.menuItems}>
                <a className={styles.home} onClick={onHomeTextClick}>
                  Home
                </a>
              </div>
              <div className={styles.menuItems1}>
                <a className={styles.about} onClick={onHomeTextClick}>
                  About
                </a>
              </div>
              <div className={styles.menuItems2}>
                <a className={styles.products} onClick={onProductsTextClick}>
                  Products
                </a>
              </div>
              <div className={styles.menuItems3}>
                <a className={styles.contact} onClick={onHomeTextClick}>
                  Contact
                </a>
              </div>
              <div
                className={styles.elementbuttonsmallfilled}
                onClick={onProductsTextClick}
              >
                <div className={styles.bg} />
                <a className={styles.buttonLabel}>Purchase UI Kit</a>
              </div>
            </div>
          </div>
          <div
            className={styles.textBlocksectionlargetitle}
            data-scroll-to="textBlockSectionLargeTitleContainer"
          >
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
          <div className={styles.cards}>
            <div className={styles.elementcardinfoCardmediumParent}>
              <div className={styles.elementcardinfoCardmedium}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.cardContentPairOne}>
                  <div className={styles.title1}>Title Goes Here</div>
                  <p
                    className={styles.body1}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
              <div className={styles.elementcardinfoCardmedium1}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon1}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.cardContentPairTwo}>
                  <div className={styles.title2}>Title Goes Here</div>
                  <p
                    className={styles.body2}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
            </div>
            <div className={styles.elementcardinfoCardmediumGroup}>
              <div className={styles.elementcardinfoCardmedium2}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon2}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.titleParent}>
                  <div className={styles.title3}>Title Goes Here</div>
                  <p
                    className={styles.body3}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
              <div className={styles.elementcardinfoCardmedium3}>
                <img
                  className={styles.elementcardinfoCardsmalliIcon3}
                  loading="lazy"
                  alt=""
                  src="/elementcardinfocardsmalliconpositionleft1@2x.png"
                />
                <div className={styles.titleGroup}>
                  <div className={styles.title4}>Title Goes Here</div>
                  <p
                    className={styles.body4}
                  >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionFeaturesMulti1.propTypes = {
  className: PropTypes.string,
};

export default SectionFeaturesMulti1;
