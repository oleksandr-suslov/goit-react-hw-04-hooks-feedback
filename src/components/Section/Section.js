import styles from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
