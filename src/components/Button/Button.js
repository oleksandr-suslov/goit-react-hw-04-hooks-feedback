import styles from "./Button.module.css";

export default function Button({ name, clickOnBtn }) {
  return (
    <button className={styles.btn} type="button" onClick={clickOnBtn}>
      {name}
    </button>
  );
}
