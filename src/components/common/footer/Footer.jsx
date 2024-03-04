import CryptoneXNavLogoWhite from "../../../assets/img/CryptoneXNavLogoWhite.png";
import styles from "./footer.module.scss";
function Footer() {
  return (
    <>
      <div className="col-12">
        <div className={styles.div}>
          <div className={styles.sub_div}>
            <div>
              <img src={CryptoneXNavLogoWhite} />
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
          <div className={styles.line} />
          <div className={styles.sub_div}>
            <div>
              <p>Copyrights © 2022 All Rights Reserved by cryptonex.top</p>
            </div>
            <div className={styles.media_links}>
              <div>
                <i className="bi bi-envelope-fill"></i>
                <p>info@cryptonex.top</p>
              </div>
              <div>
                <i className="bi bi-telegram" />
                <p>telegram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
