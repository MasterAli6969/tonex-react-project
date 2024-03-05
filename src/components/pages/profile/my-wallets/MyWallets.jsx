import profileProcentWhite from "../../../../assets/img/profileProcentWhite.png";
import styles from "./my_wallets.module.scss";
function MyWallets() {
  return (
    <>
      <div className={styles.div}>
        <h4>Мои кошельки</h4>
        <div className={styles.sub_div}>
          <div className={styles.add_wallet}>
            <p>+ Добавить новый счет</p>
          </div>
          <div className={styles.my_wallets}>
            <div>
              <img src={profileProcentWhite} alt="" />
              <p>Qiwi кошелек</p>
            </div>
            <p>45679435673</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWallets;
