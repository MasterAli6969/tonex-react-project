import CustomInput from "../../../common/ui-ux/input/CustomInput";
import CustomButton from "../../../common/ui-ux/button/CustomButton";
import profileFoto from "../../../../assets/img/profileFoto.png";
import profileProcent from "../../../../assets/img/profileProcent.svg";
import styles from "./profile_item.module.scss";
function ProfileItem() {
  return (
    <>
      <div className={styles.div}>
        <h4>Профиль</h4>
        <div className={styles.sub_div}>
          <div className={styles.profile_data}>
            <img src={profileFoto} />
            <div>
              <p>USER-1000</p>
              <div>
                <i className="bi bi-check-lg"></i>
                <p>Верификация</p>
              </div>
            </div>
          </div>

          <div className={styles.loyalty}>
            <div>
              <img src={profileProcent} alt="" />
              <p>Лояльность</p>
            </div>
            <div>
              <span>0,3%</span>
              <p>Ваша персональная скидка на обмен</p>
            </div>
          </div>
        </div>
        <div className={styles.sub_div_form}>
          <h4>Личные данные</h4>
          <form className={styles.form}>
            <label>Полное имя</label>
            <CustomInput placeholder={"Иванов Иван Иванович"} type={"text"} />
            <label htmlFor="inputMail">Адрес электронной почты </label>
            <CustomInput placeholder={"wallet@gmail.com"} type={"email"} />
            <label htmlFor="inputTel">Номер телефона</label>
            <CustomInput placeholder={"+7 (999) 999-99-99"} type={"text"} />
            <CustomButton text={"Обновить данные"} />
          </form>
        </div>
        <div className={styles.sub_div_form}>
          <h4>Cменить пароль</h4>
          <form className={styles.form}>
            <CustomInput placeholder={"Новый пароль"} type={"password"} />
            <CustomInput placeholder={"Старый пароль"} type={"password"} />
            <CustomInput placeholder={"Повторить пароль"} type={"password"} />
            <CustomButton text={"Изменить пароль"} />
          </form>
        </div>
      </div>
    </>
  );
}
export default ProfileItem;
