import React from "react";
import Exchanger from "../../common/exchanger/Exchanger";
import ExchangeRequest from "./exchange-request/ExchangeRequest";
import styles from "./exchange_destinations.module.scss";
function ExchangeDestinations() {
  return (
    <>
      <div class="row">
        <div className="col-12">
          <div className={styles.div}>
            <div className={styles.div_title}>
              <h1>Направления обмена</h1>
            </div>
            <div className={styles.div_description}>
              <h4>Текущий курс</h4>
              <p>
                Внимание, курс может измениться через:<span>15 секунд</span>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <Exchanger />
            </div>
            <div className={styles.div_description2}>
              <p>
                Курс фиксируется в случае пополнения сервисом в течение <br />
                времени, отведенного на оплату заявки
              </p>
            </div>
            <div className="col-md-7 col-sm-12">
              <ExchangeRequest />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangeDestinations;
