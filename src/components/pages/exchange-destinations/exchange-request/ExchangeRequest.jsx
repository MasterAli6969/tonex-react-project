import React from "react";
import bitcoin1 from "../../../../assets/img/bitcoin1.png";
import usdt2 from "../../../../assets/img/usdt2.png";
import styles from "./exchange_request.module.scss";
function ExchangeRequest() {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.div_title}>
          <h4>Заполните заявку на обмен </h4>
        </div>
        <div className={styles.sub_div_1}>
          <div className={styles.div_input_data}>
            <h4>Вы отдадите BTC BitCoin</h4>
            <div className={styles.div_input_data_item}>
              <div className={styles.coin_div}>
                <img src={bitcoin1} alt="" />
                <p>BTC</p>
              </div>
              <input type="text" />
            </div>
            <div className={styles.min_max}>
              <i class="bi bi-info-circle" />
              <p>Min = 0,002 ; Max = 1,006</p>
            </div>
          </div>
          <div className={styles.change_arrow}>
            <i class="bi bi-arrow-left-right" />
          </div>
          <div className={styles.div_input_data}>
            <h4>Вы получите USDT </h4>
            <div className={styles.div_input_data_item}>
              <div className={styles.coin_div}>
                <img src={usdt2} alt="" />
                <p>USDT</p>
              </div>
              <input type="text" />
            </div>
            <div className={styles.min_max}>
              <i class="bi bi-info-circle" />
              <p>Резерв 25000,07865</p>
            </div>
          </div>
        </div>
        <div className={styles.sub_div_2}>
          <h4>Номер кошелька</h4>
          <input type="text" />
        </div>
        <div className={styles.sub_div_3}>
          <div className={styles.mail}>
            <h4>Email</h4>
            <input type="text" placeholder="Введите email" />
            <div className={styles.mail_description}>
              <i class="bi bi-info-circle" />
              <p>
                Email должен отправлять и принимать письма, <br />
                иначе общение по заявке будет невозможно
              </p>
            </div>
          </div>
          <div className={styles.commiss}>
            <h4>Комиссия в сети</h4>
            <select>
              <option value="apple">Выберите комиссию </option>
              <option value="banana">Высокая / 120 Satoshi / 10 мин. </option>
              <option value="orange">Средняя / 80 Satoshi / 30 мин. </option>
              <option value="orange">Низкая / 40 Satoshi / 60 мин. </option>
            </select>
          </div>
        </div>
        <div className={styles.sub_div_4}>
          <div className={styles.div_title}>
            <p>
              Для более быстрого и удобного обмена, можете <br />
              воспользоваться кошельками в личном кабинете
            </p>
          </div>
          <div>
            <button className={styles.button}>Создать кошелек</button>
            <button className={styles.button}>Войти в личный кабинет</button>
          </div>
        </div>
        <button className={styles.form_button}>Обменять</button>
        <div className="form-check my-4 d-flex align-items-center">
          <input
            className="form-check-input mt-2"
            style={{ marginRight: "0.3rem" }}
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label mt-2"
            for="flexCheckDefault"
            style={{ fontSize: "0.75rem" }}
          >
            Принимаю пользовательское соглашение и KYC/AML/KYT
          </label>
        </div>
      </form>
    </>
  );
}
export default ExchangeRequest;
