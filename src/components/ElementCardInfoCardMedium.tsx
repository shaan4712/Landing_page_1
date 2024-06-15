import { FunctionComponent } from "react";
import styles from "./ElementCardInfoCardMedium.module.css";

export type ElementCardInfoCardMediumType = {
  className?: string;
};

const ElementCardInfoCardMedium: FunctionComponent<
  ElementCardInfoCardMediumType
> = ({ className = "" }) => {
  return (
    <div className={[styles.elementcardinfoCardmedium, className].join(" ")}>
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className={styles.titleParent}>
        <div className={styles.title}>Title Goes Here</div>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </p>
      </div>
    </div>
  );
};

export default ElementCardInfoCardMedium;
