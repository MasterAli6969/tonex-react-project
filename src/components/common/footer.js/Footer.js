import React from "react";
import styles from "./footer.module.scss";
function Footer() {
  return (
    <>
      <div className="col-12">
        <div className={styles.div}>
          <div className={styles.div_logo}>
            <h1>CryptoneX</h1>
          </div>
          <div className={styles.div_footer_link}>
            <ul>
              <li>
                <h6>Полезная информация</h6>
              </li>
              <li>
                <p>Помощь</p>
              </li>
              <li>
                <p>Написать в техподдержку</p>
              </li>
              <li>
                <p>От чего зависит скорость транзакций</p>
              </li>
              <li>
                <p>Политика KYC/AML</p>
              </li>
              <li>
                <p>Кошельки</p>
              </li>
            </ul>
          </div>
          <div className={styles.div_footer_link}>
            <ul>
              <li>
                <h6>Полезная информация</h6>
              </li>
              <li>
                <p>Помощь</p>
              </li>
              <li>
                <p>Написать в техподдержку</p>
              </li>
              <li>
                <p>От чего зависит скорость транзакций</p>
              </li>
              <li>
                <p>Политика KYC/AML</p>
              </li>
              <li>
                <p>Кошельки</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
