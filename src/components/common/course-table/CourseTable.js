import React from "react";
import { tableCourceData } from "../data";
import styles from "./course_table.module.scss";
function CourseTable() {
  return (
    <>
      <div className="col-md-9 col-sm-12 p-0">
        <div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.thead_title}>
                <th>
                  <div>Вы получаете</div>
                </th>
                <th>
                  <div>Курс</div>
                </th>
                <th>
                  <div>Изменение (24 ч.)</div>
                </th>
                <th>
                  <div>Резерв</div>
                </th>
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {tableCourceData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>
                        <div>
                          <p>{item.youGet}</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>{item.Course.text1}</p>
                          <img alt="" src={item.Course.svgArrow} />
                          <p>{item.Course.text2}</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <img alt="" src={item.modification.icon} />
                          <p>{item.modification.text}</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>{item.reserve}</p>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div className="tablets__view__all">
            <a href="/">Посмотреть все монеты</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseTable;
