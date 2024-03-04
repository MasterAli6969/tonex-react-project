import styles from "./header.module.scss";
function Header() {
  return (
    <>
      <div className="col-md-6 col-sm-12">
        <div className={styles.header}>
          <h1>Самый быстрый сервис обмена цифровых валют</h1>
          <p>
            Покупай, продавай обменивай и храни <br /> криптовалюты на «горячих
            кошельках»
          </p>
        </div>
      </div>
    </>
  );
}
export default Header;
