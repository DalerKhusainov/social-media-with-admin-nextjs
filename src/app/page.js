import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency.</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandsImg} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
        </div>
      </div>
    </main>
  );
}
