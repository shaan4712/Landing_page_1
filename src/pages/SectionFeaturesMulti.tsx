import { FunctionComponent } from "react";
import ElementCardInfoCardMedium from "../components/ElementCardInfoCardMedium";
import Samsung from "../components/Samsung";
import styles from "./SectionFeaturesMulti.module.css";

const SectionFeaturesMulti: FunctionComponent = () => {
  return (
    <div className={styles.sectionfeaturesmulti82}>
      <div className={styles.sectionfeaturesmulti82Inner}>
        <div className={styles.textBlocksectionlargetitleParent}>
          <div className={styles.textBlocksectionlargetitle}>
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
          <div className={styles.infoCard}>
            <ElementCardInfoCardMedium />
            <ElementCardInfoCardMedium />
          </div>
        </div>
      </div>
      <div className={styles.devicessamsungvert}>
        <Samsung />
      </div>
    </div>
  );
};

export default SectionFeaturesMulti;
