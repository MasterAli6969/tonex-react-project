import CustomInput from "../../../common/ui-ux/input/CustomInput";
import { transactionsData } from "../data";
import styles from "./transactions.module.scss";
function Transactions() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.sub_div_input}>
          <form>
            <div>
              <i className="bi bi-search" />
            </div>
            <CustomInput
              placeholder={"Введите ID вашей транзакции"}
              type={"text"}
            />
          </form>
          <hr />
        </div>
        <div className={styles.sub_div_transac}>
          <div className={styles.div_title}>
            <h4>Последние транзакции</h4>
            <a href="/profile">Посмотреть все</a>
          </div>
          <ul className={styles.div_info_list}>
            {transactionsData.length !== 0 &&
              transactionsData.map((item) => {
                return (
                  <li key={item.id}>
                    <div>
                      <h4>{item.valueCurrency}</h4>
                      <div>
                        <i className={item.icon} />
                      </div>
                    </div>
                    <h6>{item.valueDereco}</h6>
                    <div>
                      <p>Статус: {item.status}</p>
                      <div>
                        <p>{item.date}</p>
                        <p>ID {item.idTran}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Transactions;
