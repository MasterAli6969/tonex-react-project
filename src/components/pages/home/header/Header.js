import React from "react";
import styles from "./header.module.scss";
function Header() {
  return (
    <>
      <div className="col-md-6 col-sm-12">
        <div className={styles.header}>
          <h1 className={styles.header__title}>
            Самый быстрый сервис обмена цифровых валют
          </h1>
          <p className={styles.header__description}>
            Покупай, продавай обменивай и храни криптовалюты на «горячих
            кошельках»
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
