import {
  dataListItemAbout,
  dataListItemResponce,
  dataInfoList,
  statusListData,
} from "./data";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
import styles from "./searching_for_transaction.module.scss";
function SearchingForTransaction() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className={styles.div}>
        <div className="col-12">
          <div className={styles.sub_div}>
            <div className={styles.div_title}>
              <h1>Поиск транзакции</h1>
            </div>
            <form>
              <input type="text" placeholder="Введите id Вашей транзакции" />
              <button type="submit">Найти</button>
            </form>
          </div>
        </div>
        <div className={styles.sub_div1}>
          <div className={styles.sub_div1_1}>
            <div>
              <ul>
                {statusListData.length !== 0 &&
                  statusListData.map((item) => {
                    return (
                      <li key={item.id}>
                        <i className={item.icon} />
                        <p>
                          <span>{item.text1}</span>
                          {item.text2}
                        </p>
                      </li>
                    );
                  })}
              </ul>
              <div>
                <ul>
                  {dataListItemAbout.length !== 0 &&
                    dataListItemAbout.map((item, index) => {
                      return (
                        <li key={index}>
                          <p className={styles.data_name}>{item}</p>
                        </li>
                      );
                    })}
                </ul>
                <ul>
                  {dataListItemResponce.length !== 0 &&
                    dataListItemResponce.map((item, index) => {
                      return (
                        <li key={index}>
                          <p>{item}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <button>Перейти к оплате</button>
          </div>
          <div className={styles.sub_div1_2}>
            <div>
              <h4>Обратите внимание!</h4>
              <ul>
                {dataInfoList.length !== 0 &&
                  dataInfoList.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchingForTransaction;
