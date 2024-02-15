import React, { useState } from "react";
import { selectItemData } from "../data";
import styles from "./exchanger.module.scss";
function Exchanger() {
  const [selectAct, setSelectAct] = useState(false);
  const handleVievSwlwct = () => {
    setSelectAct(!selectAct);
  };
  return (
    <>
      <div className="col-md-6 col-sm-12">
        <form className={styles.form}>
          <div className={styles.div}>
            <div className={styles.sub_div}>
              <p className={styles.sub_div_title}>Отдаете</p>
              <div className={styles.sub_div_data}>
                <div>
                  <input className={styles.sub_div_data_input} type="text" />
                </div>
                <div
                  className={styles.selector}
                  data-bs-target="selectorCoinOne"
                  type="button"
                  onClick={handleVievSwlwct}
                >
                  <div className={styles.selector_item_default}>
                    <p>Coin</p>
                  </div>
                  <ul
                    className={`${styles.selector_items} ${
                      selectAct && styles._active
                    }`}
                  >
                    {selectItemData.map((item) => {
                      return (
                        <>
                          <li key={item.id} className={styles.selector_item}>
                            <img src={item.img} alt="" />
                            <p>{item.text}</p>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.sub_div}>
              <p className={styles.sub_div_title}>Получаете</p>
              <div className={styles.sub_div_data}>
                <div>
                  <input className={styles.sub_div_data_input} type="text" />
                </div>
                <div
                  className={styles.selector}
                  data-bs-target="selectorCoinOne"
                  type="button"
                  onClick={handleVievSwlwct}
                >
                  <div className={styles.selector_item_default}>
                    <p>Coin</p>
                  </div>
                  <ul
                    className={`${styles.selector_items} ${
                      selectAct && styles._active
                    }`}
                  >
                    {selectItemData.map((item) => {
                      return (
                        <>
                          <li key={item.id} className={styles.selector_item}>
                            <img src={item.img} alt="" />
                            <p>{item.text}</p>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button class={styles.form_button}>Обменять</button>
        </form>
      </div>
    </>
  );
}

export default Exchanger;
