import {
  statusListData,
  dataListItemAbout,
  dataListItemResponce,
  dataInfoList,
} from "../exchange-destinations/data";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
import styles from "./searching_for_transaction.module.scss";
function SearchingForTransaction() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className={styles.div}>
        <div className="row">
          <div className="col-12">
            <div className={styles.sub_div1}>
              <div className={styles.div_title}>
                <h1>Поиск транзакции</h1>
              </div>
              <form className={styles.form}>
                <input type="text" placeholder="Введите id Вашей транзакции" />
                <button type="submit">Найти</button>
              </form>
            </div>
          </div>

          <div className="col-md-7 col-sm-12">
            <div className={styles.sub_div2}>
              <div className={styles.sub_div2_item}>
                <ul className={styles.status_list}>
                  {statusListData.length !== 0 &&
                    statusListData.map((item) => {
                      return (
                        <li key={item.id}>
                          <i className={item.icon} />
                          <p>
                            <strong>{item.text1}</strong>
                            {item.text2}
                          </p>
                        </li>
                      );
                    })}
                </ul>
                <div className={styles.data_list}>
                  <ul className={styles.data_list_item}>
                    {dataListItemAbout.length !== 0 &&
                      dataListItemAbout.map((item, index) => {
                        return (
                          <li key={index}>
                            <h4>
                              <strong>{item}</strong>
                            </h4>
                          </li>
                        );
                      })}
                  </ul>
                  <ul className={styles.data_list_item}>
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
              <button className={styles.button}>Перейти к оплате</button>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className={styles.sub_div3}>
              <div className={styles.sub_div3_item}>
                <h4>Обратите внимание!</h4>
                <ul className={styles.info_list}>
                  {dataInfoList.length !== 0 &&
                    dataInfoList.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchingForTransaction;
