import { regulationsData } from "./data";
import NavBar from "../../common/nav-bar/NavBar";
import CryptoneXNavLogo from "../../../assets/img/CryptoneXNavLogo.png";
import styles from "./regulations.module.scss";
function Regulations() {
  return (
    <>
      <NavBar logo={CryptoneXNavLogo} />
      <div className={styles.div}>
        <div className="row">
          <div className="col-12">
            <div className={styles.div_title}>
              <h1>
                Регламент создания <br /> и обработки заявок{" "}
              </h1>
            </div>
            {regulationsData.length !== 0 &&
              regulationsData.map((item) => {
                return (
                  <div key={item.id} className={styles.sub_div}>
                    <div>
                      <h1>{item.number}</h1>
                      <h4>{item.name}</h4>
                    </div>
                    <div className={styles.sub_div_list}>
                      {item.description && <p>{item.description}</p>}
                      <ol>
                        {item.itemsOl &&
                          item.itemsOl.map((subItem) => {
                            return (
                              <li key={subItem.id}>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: subItem.text,
                                  }}
                                ></p>
                              </li>
                            );
                          })}
                      </ol>
                      <ul>
                        {item.itemsUl &&
                          item.itemsUl.map((subItem) => {
                            return (
                              <li key={subItem.id}>
                                {subItem.title && (
                                  <h4
                                    dangerouslySetInnerHTML={{
                                      __html: subItem.title,
                                    }}
                                  ></h4>
                                )}
                                <p>{subItem.text}</p>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            <div className={styles.post_scriptum}>
              <h4>
                Спасибо, что выбрали наш обменный пунтк! <br /> Администрация
                обменного пункта <a href="#">Crypto Online Exchange</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Regulations;
