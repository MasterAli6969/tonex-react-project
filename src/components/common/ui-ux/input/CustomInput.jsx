import styles from "./custom_input.module.scss";
function CustomInput({ placeholder, value, type }) {
  return (
    <input
      className={styles.custom_input}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}
export default CustomInput;
