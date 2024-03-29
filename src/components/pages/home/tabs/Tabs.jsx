import { tabsData } from "../data";
import styles from "./tabs.module.scss";
function Tabs() {
  return (
    <>
      <div className="col-12">
        <div className={styles.div}>
          {tabsData.map((item) => {
            return (
              <>
                <div key={item.id} className={styles.sub_div}>
                  <div>
                    <p>
                      {item.text1} <br />
                      {item.text2}
                    </p>
                  </div>
                  <img src={item.img} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Tabs;
