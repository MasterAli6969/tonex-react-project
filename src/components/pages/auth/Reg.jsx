import authCard from "../../../assets/img/authCard.svg";
import styles from "./registration.module.scss";
function Reg() {
  return (
    <>
      <div className={styles.div}>
        <form className={styles.form}>
          <img src={authCard} />
          <p>
            <span>Вход</span> / регистрация
          </p>
          <div className={styles.form_input}>
            <div>
              <i className="bi bi-person" />
            </div>
            <input placeholder="ПОЛНОЕ ИМЯ" type="email" />
          </div>
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
          <div className={styles.form_input}>
            <div>
              <i className="bi bi-unlock"></i>
            </div>
            <input placeholder="ПАРОЛЬ ЕЩЕ РАЗ" type="password" />
          </div>
          <div className={styles.buttons}>
            <button type="submit">Зарегистрироваться</button>
            <div className={styles.checkbox}>
              <input type="checkbox" />
              <p>
                Нажимая кнопку «Зарегистрироваться», я даю свое согласие <br />{" "}
                на сбор и обработку моих персональных данных в соответствии{" "}
                <br /> с Политикой и принимаю условия Пользовательского
                соглашения
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Reg;
