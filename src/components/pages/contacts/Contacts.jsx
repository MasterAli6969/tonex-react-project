import { contactsData } from "./data";
import CustomInput from "../../common/ui-ux/input/CustomInput";
import CustomButton from "../../common/ui-ux/button/CustomButton";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
import styles from "./contacts.module.scss";
function Contacts() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className={styles.div}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className={styles.sub_div1}>
              <div className={styles.div_title}>
                <h1>КОНТАКТЫ</h1>
              </div>
              <ul>
                {contactsData.length !== 0 &&
                  contactsData.map((item) => {
                    return (
                      <li key={item.id}>
                        <p>{item.value}</p>
                        <h4>{item.text}</h4>
                        {item.id === 4 && <h4>{item.text1}</h4>}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={styles.sub_div2}>
              <form>
                <h4>Остались вопросы или нужна консультация?</h4>
                <p>
                  Оставьте заявку и наш менеджер свяжется с вами в ближайшее
                  время!
                </p>
                <CustomInput placeholder={"Ваше имя"} type={"text"} />
                <CustomInput placeholder={"Номер телефона"} type={"tel"} />
                <CustomInput placeholder={"Email"} type={"email"} />
                <textarea placeholder="Сообщение" rows="4" cols="50" />
                <div className="form-check my-4 d-flex align-items-center">
                  <input
                    className="form-check-input mt-2"
                    style={{ marginRight: "0.3rem" }}
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label mt-2"
                    htmlFor="flexCheckDefault"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Даю согласие на обработку персональных данных
                  </label>
                </div>
                <CustomButton text={"Оставить заявку"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
