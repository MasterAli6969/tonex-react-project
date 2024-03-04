import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { selectItemData } from "../data";
import CustomButton from "../ui-ux/button/CustomButton";
import styles from "./exchanger.module.scss";

function Exchanger() {
  const [selectAct1, setSelectAct1] = useState(false);
  const [selectAct2, setSelectAct2] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  useEffect(() => {
    if (
      !selectedItem1 &&
      selectItemData.length > 0 &&
      !selectedItem2 &&
      selectItemData.length > 0
    ) {
      setSelectedItem1(selectItemData[0]);
      setSelectedItem2(selectItemData[0]);
    }
  }, [selectedItem1, selectedItem2]);

  const handleVievSwitch1 = () => {
    setSelectAct1(!selectAct1);
    setRotate1(!rotate1);
  };

  const handleVievSwitch2 = () => {
    setSelectAct2(!selectAct2);
    setRotate2(!rotate2);
  };

  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
  };
  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.div}>
          <div className={styles.sub_div}>
            <p>Отдаете</p>
            <div className={styles.sub_div_data}>
              <div>
                <input type="text" />
              </div>
              <div
                className={styles.selector}
                data-bs-target="selectorCoinOne"
                type="button"
                onClick={handleVievSwitch1}
              >
                <div>
                  {selectedItem1 && (
                    <>
                      <img src={selectedItem1.img} alt={selectedItem1.text} />
                      <p>{selectedItem1.text}</p>
                      <i
                        className={`${
                          rotate1 ? styles._rotate : ""
                        } bi bi-chevron-down`}
                      />
                    </>
                  )}
                </div>
                <ul
                  className={`${styles.selector_items} ${
                    selectAct1 && styles._active
                  }`}
                >
                  {selectItemData.map((item) => (
                    <li onClick={() => handleItemClick1(item)} key={item.id}>
                      <img src={item.img} alt="" />
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.sub_div}>
            <p>Получаете</p>
            <div className={styles.sub_div_data}>
              <div>
                <input type="text" />
              </div>
              <div
                className={styles.selector}
                data-bs-target="selectorCoinOne"
                type="button"
                onClick={handleVievSwitch2}
              >
                <div className={styles.selector_item_default}>
                  {selectedItem2 && (
                    <>
                      <img src={selectedItem2.img} alt={selectedItem2.text} />
                      <p>{selectedItem2.text}</p>
                      <i
                        className={`${
                          rotate2 ? styles._rotate : ""
                        } bi bi-chevron-down`}
                      />
                    </>
                  )}
                </div>
                <ul
                  className={`${styles.selector_items} ${
                    selectAct2 && styles._active
                  }`}
                >
                  {selectItemData.map((item) => (
                    <li
                      onClick={() => handleItemClick2(item)}
                      key={item.id}
                      className={styles.selector_item}
                    >
                      <img src={item.img} alt="" />
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link to="/exchange-destinations">
          <CustomButton text={"Обменять"} />
        </Link>
      </form>
    </>
  );
}

export default Exchanger;
