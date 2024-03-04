import styles from "./custom_button.module.scss";
function CustomButton({ text, type }) {
  return (
    <>
      <div className={styles.div}>
        <button type={type}>
          <p>{text}</p>
        </button>
      </div>
    </>
  );
}
export default CustomButton;
