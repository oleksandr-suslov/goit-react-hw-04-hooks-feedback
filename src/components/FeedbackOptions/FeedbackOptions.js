import Button from "../Button/Button";
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.btnList}>
      {options.map((item) => (
        <li key={item}>
          <Button name={item} clickOnBtn={onLeaveFeedback} />
        </li>
      ))}
    </ul>
  );
}
