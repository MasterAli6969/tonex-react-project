import authCard from "../../../assets/img/authCard.svg";
import styles from "./registration.module.scss";
function Login() {
  return (
    <>
      <div className={styles.div}>
        <form className={styles.form}>
          <img src={authCard} />
          <p>
            Вход / <span>регистрация</span>
          </p>
          <div className={styles.form_input}>
            <div>
              <i className="bi bi-envelope"></i>
            </div>
            <input placeholder="EMAIL" type="email" />
          </div>
          <div className={styles.form_input}>
            <div>
              <i className="bi bi-unlock"></i>
            </div>
            <input placeholder="ПАРОЛЬ" type="password" />
          </div>
          <div className={styles.buttons}>
            <button type="submit">войти</button>
            <div>
              <a href="/login">Забыли пароль?</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
