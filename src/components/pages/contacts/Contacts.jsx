import { contactsData } from "./data";
import CustomInput from "../../common/ui-ux/input/CustomInput";
import CustomButton from "../../common/ui-ux/button/CustomButton";
import styles from "./contacts.module.scss";
function Contacts() {
  return (
    <>
      <div className={styles.div}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className={styles.sub_div1}>
              <div className={styles.div_title}>
                <h1>КОНТАКТЫ</h1>
              </div>
              <ul className={styles.info_list}>
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
              <form className={styles.contacts_form}>
                <h4>Остались вопросы или нужна консультация?</h4>
                <p>
                  Оставьте заявку и наш менеджер свяжется с вами в ближайшее
                  время!
                </p>
                <CustomInput placeholder={"Ваше имя"} type={"text"} />
                <CustomInput placeholder={"Номер телефона"} type={"tel"} />
                <CustomInput placeholder={"Email"} type={"email"} />
                <CustomInput placeholder={"Сообщение"} type={"text"} />
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
