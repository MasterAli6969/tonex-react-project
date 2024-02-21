import React from "react";
import { infoTabsData } from "../data";
import styles from "./info_tabs.module.scss";
function InfoTabs() {
  return (
    <>
      <div className={styles.div}>
        {infoTabsData.length !== 0 &&
          infoTabsData.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className={`${styles.sub_div} ${
                    item.id < 4
                      ? styles._line_background_blue
                      : styles._line_background_wheat
                  }`}
                >
                  <div className={`${styles.sub_div_item}`}>
                    <i class={item.icon} />
                    <p>{item.text}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
export default InfoTabs;
