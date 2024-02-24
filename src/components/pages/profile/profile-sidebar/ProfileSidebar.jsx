import { useState, useEffect } from "react";
import { sidebarData } from "../data";
import styles from "./profile_sidebar.module.scss";
function ProfileSidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const handleLiClick = (itemId) => {
    setActiveItem(itemId);
  };
  useEffect(() => {
    if (sidebarData.length > 0 && activeItem === null) {
      setActiveItem(sidebarData[0].id);
    }
  }, [activeItem]);
  return (
    <>
      <div className={styles.div}>
        <ul className={styles.div_list}>
          {sidebarData.length !== 0 &&
            sidebarData.map((item) => {
              return (
                <>
                  <li
                    key={item.id}
                    className={`${styles.list_item} ${
                      item.id === activeItem ? styles._active : ""
                    }`}
                    onClick={() => handleLiClick(item.id)}
                  >
                    {item.text}
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
}
export default ProfileSidebar;
