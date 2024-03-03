import { useState, useEffect } from "react";
import { tableSidebarData } from "../data";
import styles from "./table_sidebar.module.scss";

function TableSidebar() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleLiClick = (itemId) => {
    setActiveItemId(itemId);
  };
  useEffect(() => {
    if (tableSidebarData.length > 0 && activeItemId === null) {
      setActiveItemId(tableSidebarData[0].id);
    }
  }, [activeItemId]);
  return (
    <div className="col-md-3 col-sm-12 p-0">
      <div className={styles.div}>
        <div className={styles.div_title}>
          <p>Токен</p>
        </div>
        <ul>
          {tableSidebarData.length !== 0 && (
            <>
              {tableSidebarData.map((item) => (
                <li
                  key={item.id}
                  className={`${styles.li_item} ${
                    item.id === activeItemId ? styles._li_item_active : ""
                  }`}
                  onClick={() => handleLiClick(item.id)}
                >
                  <div>
                    <img alt="" src={item.img} />
                    <p>{item.name}</p>
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TableSidebar;
