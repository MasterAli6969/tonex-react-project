import CourseTable from "../../../common/course-table/CourseTable";
import TableSidebar from "../../../common/table-sidebar/TableSidebar";
import styles from "./tablets.module.scss";
function Tablets() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.sub_div}>
          <h1>Курсы обмена</h1>
          <p>
            Внимание, курс может измениться через: <span>15 секунд</span>
          </p>
        </div>
      </div>
      <div className={styles.div_title}>
        <h4>Продажа криптовалюты</h4>
      </div>
      <TableSidebar />
      <CourseTable />
      <div className={styles.div_title}>
        <h4>Покупка Криптовалюты</h4>
      </div>
      <TableSidebar />
      <CourseTable />
    </>
  );
}
export default Tablets;
