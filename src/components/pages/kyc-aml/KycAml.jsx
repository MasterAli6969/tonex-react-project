import { kycAmlData } from "./data";
import styles from "./kyc_aml.module.scss";
function KycAml() {
  return (
    <>
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
              <ul className={styles.sub_list}>
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
                        <h1>{item.number}</h1>
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
