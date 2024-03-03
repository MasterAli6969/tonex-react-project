import profileProcentWhite from "../../../../assets/img/profileProcentWhite.png";
import styles from "./my_wallets.module.scss";
function MyWallets() {
  return (
    <>
      <div className={styles.div}>
        <h1>Мои кошельки</h1>
        <div className={styles.sub_div}>
          <div className={styles.add_wallet}>
            <p>+ Добавить новый счет</p>
          </div>
          <div className={styles.my_wallets}>
            <div>
              <img src={profileProcentWhite} alt="" />
              <h4>Qiwi кошелек</h4>
            </div>
            <h4>45679435673</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWallets;
