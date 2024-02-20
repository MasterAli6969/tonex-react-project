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
            <p>Вы отдадите BTC BitCoin</p>
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
            <p>Вы получите USDT </p>
            <div className={styles.div_input_data_item}>
              <div className={styles.coin_div}>
                <img src={usdt2} alt="" />
                <p>USDT</p>
              </div>
              <input type="text" />
            </div>
            <div className={styles.min_max}>
              <i class="bi bi-info-circle" />
              <p>Min = 0,002 ; Max = 1,006</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default ExchangeRequest;
