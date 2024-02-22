import { useState } from "react";
import { Link } from "react-router-dom";
import { selectItemData } from "../data";
import styles from "./exchanger.module.scss";
function Exchanger() {
  const [selectAct1, setSelectAct1] = useState(false);
  const [selectAct2, setSelectAct2] = useState(false);
  const handleVievSwitch1 = () => {
    setSelectAct1(!selectAct1);
  };
  const handleVievSwitch2 = () => {
    setSelectAct2(!selectAct2);
  };
  return (
    <>
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
                onClick={handleVievSwitch1}
              >
                <div className={styles.selector_item_default}>
                  <p>Coin</p>
                </div>
                <ul
                  className={`${styles.selector_items} ${
                    selectAct1 && styles._active
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
                onClick={handleVievSwitch2}
              >
                <div className={styles.selector_item_default}>
                  <p>Coin</p>
                </div>
                <ul
                  className={`${styles.selector_items} ${
                    selectAct2 && styles._active
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
        <Link to="/exchange-destinations">
          <button className={styles.form_button}>Обменять</button>
        </Link>
      </form>
    </>
  );
}

export default Exchanger;
