import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
}
