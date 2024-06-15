import { FunctionComponent } from "react";
import styles from "./Pricing.module.css";

export type PricingType = {
  className?: string;
};

const Pricing: FunctionComponent<PricingType> = ({ className = "" }) => {
  return (
    <section className={[styles.pricing, className].join(" ")}>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingContent}>
          <h1 className={styles.title}>A Price To Suit Everyone</h1>
          <p
            className={styles.body}
          >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
        </div>
        <div className={styles.priceInfoWrapper}>
          <div className={styles.priceInfo}>
            <div className={styles.price}>$40</div>
            <p className={styles.title1}>UI Design Kit</p>
          </div>
        </div>
        <div className={styles.pricingButton}>
          <div className={styles.buttonContainer}>
            <div className={styles.body1}>See, One price. Simple.</div>
            <div className={styles.elementbuttonmediumfilledWrapper}>
              <div className={styles.elementbuttonmediumfilled}>
                <div className={styles.bg} />
                <div className={styles.buttonLabel}>Purchase Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
