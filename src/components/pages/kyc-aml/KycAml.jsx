import { kycAmlData } from "./data";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
import styles from "./kyc_aml.module.scss";
function KycAml() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className={styles.div}>
        <div className="row">
          <div className="col-12">
            <div className={styles.div_title}>
              <h1>KYC/AML</h1>
              <h4>Уважаемые пользователи!</h4>
              <div className={styles.div_description}>
                <p>
                  Входящие от Клиента транзакции проходят через проверку AML
                  адреса отправки и KYC. В целях противодействия легализации
                  доходов, полученных преступным путем и осуществления
                  финансирования терроризма, Сервис Cryptonex проводит
                  AML-проверки поступающих от клиентов транзакций. Для этих
                  целей Сервис использует всю доступную информацию, полученную
                  законным путем, в том числе сторонние средства анализа без
                  передачи данных клиента третьим лицам.
                </p>
                <p>
                  Если транзакция будет идентифицирована как высокорискованная,
                  Сервис может приостановить обменную операцию до проведения
                  проверки в соответствии со стандартами FATF.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.sub_div}>
              <h4>
                Сервис Cryptonex оставляет <br /> за собой право:
              </h4>
              <ul>
                {kycAmlData.length !== 0 &&
                  kycAmlData.map((item) => {
                    return (
                      <li
                        className={
                          item.id === 5 || item.id === 6
                            ? styles.li_custom_width
                            : ""
                        }
                        key={item.id}
                      >
                        <h4>{item.number}</h4>
                        <p>{item.text}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KycAml;
