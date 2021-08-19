import styles from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={styles.statList}>
      <li>
        <span>Good:</span>
        <span className={styles.data}>{good}</span>
      </li>

      <li>
        <span>Neutral:</span>
        <span className={styles.data}>{neutral}</span>
      </li>

      <li>
        <span>Bad:</span>
        <span className={styles.data}>{bad}</span>
      </li>

      <li>
        <span>Total:</span>
        <span className={styles.data}>{total}</span>
      </li>

      <li>
        <span>Positiv feedback:</span>
        <span className={styles.data}>{positivePercentage} %</span>
      </li>
    </ul>
  );
}
