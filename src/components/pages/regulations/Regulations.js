import React from "react";
import { regulationsData } from "./data";
import styles from "./regulations.module.scss";
function Regulations() {
  return (
    <>
      <div className="col-12">
        <div className={styles.div}>
          <div className={styles.div_title}>
            <h1>Регламент создания и обработки заявок </h1>
          </div>
          {regulationsData.length !== 0 &&
            regulationsData.map((item) => {
              return (
                <div key={item.id} className={styles.sub_div}>
                  <div className={styles.sub_div_title}>
                    <h1>{item.number}</h1>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.sub_div_list}>
                    {item.description && <p>{item.description}</p>}
                    <ol>
                      {item.itemsOl &&
                        item.itemsOl.map((subItem) => {
                          return (
                            <li key={subItem.id}>
                              <p>{subItem.text}</p>
                            </li>
                          );
                        })}
                    </ol>
                    <ul>
                      {item.itemsUl &&
                        item.itemsUl.map((subItem) => {
                          return (
                            <li key={subItem.id}>
                              {subItem.title && <h1>{subItem.title}</h1>}
                              <p>{subItem.text}</p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Regulations;
