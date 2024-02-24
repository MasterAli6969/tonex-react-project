import styles from "./custom_button.module.scss";
function CustomButton({ text, type }) {
  return (
    <>
      <div className={styles.div}>
        <button type={type}>{text}</button>
      </div>
    </>
  );
}
export default CustomButton;
