import React from "react";
import tabsCoinTree from "../../../../assets/img/tabsCoinTree.png";
import tabsManeyCoin from "../../../../assets/img/tabsManeyCoin.png";
import styles from "./why_we.module.scss";
function WhyWe() {
  return (
    <>
      <div className="col-12 p-0">
        <div className={styles.div}>
          <div className={styles.div_title}>
            <h1>Почему мы?</h1>
          </div>
          <div className={styles.sub_global_div}>
            <div className={styles.sub_div_right}>
              <h4 className={styles.title}>
                Прозрачная <br />
                комиссия в сети
              </h4>
              <p className={styles.description}>
                Мы не скрываем комиссию, которую ставим при отправке. Вы можете
                ее увеличить, при желании
              </p>
              <img alt="" src={tabsCoinTree} />
            </div>
            <div className={styles.sub_div_left}>
              <div className={styles.sub_div_left_top}>
                <div className={styles.sub_div_left_top_item}>
                  <h4 className={styles.title}>Обмен 24/7</h4>
                  <p className={styles.description}>
                    Полностью автоматический сервис. Меняйте хоть в обед, хоть
                    глубокой ночью
                  </p>
                </div>
                <div className={styles.sub_div_left_top_item}>
                  <h4 className={styles.title}>Моментальные обмены</h4>
                  <p className={styles.description}>
                    Собственный скрипт, позволяющий производить обмены
                    практически моментально
                  </p>
                </div>
              </div>
              <div className={styles.sub_div_left_bottom}>
                <h4 className={styles.title}>22958+ успешных обменов</h4>
                <p className={styles.description}>
                  Нам доверяют все больше пользователей. Убедитесь <br />в этом
                  сами: посмотрите отзывы на www.bestchange.ru
                </p>
                <img alt="" src={tabsManeyCoin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyWe;
