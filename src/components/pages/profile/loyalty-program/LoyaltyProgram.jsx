import profileProcent from "../../../../assets/img/profileProcent.svg";
import { loyaltyProgramDataList } from "../data";
import styles from "./loyalty_program.module.scss";
function LoyaltyProgram() {
  return (
    <>
      <div className={styles.div}>
        <h1>ПРОГРАММА ЛОЯЛЬНОСТИ</h1>
        <div className={styles.sub_div}>
          <div className={styles.sub_div_loyalty}>
            <div className={styles.loyalty_laval}>
              <img src={profileProcent} />
              <h6>Уровень 1</h6>
            </div>
            <div className={styles.loyalty_info}>
              <div>
                <p>Скидка</p>
                <h6>0,3%</h6>
              </div>
              <div>
                <p>Объем транзакций</p>
                <h6>3045 руб.</h6>
              </div>
            </div>
            <div className={styles.loyalty_filling}>
              <div />
            </div>
            <div className={styles.loyalty_filling_value}>
              <p>0 руб.</p>
              <p>5000 руб.</p>
            </div>
          </div>
          <div className={styles.sub_div_lists}>
            {loyaltyProgramDataList.length !== 0 &&
              loyaltyProgramDataList.map((item) => {
                return (
                  <ul key={item.id}>
                    {item.list.map((subItem, index) => {
                      return <li key={index}>{subItem}</li>;
                    })}
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default LoyaltyProgram;
