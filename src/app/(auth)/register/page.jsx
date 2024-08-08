import { handleRegister } from "@/libs/actions";
import styles from "./registerPage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleRegister}>
          <input type="text" placeholder="Enter your name" name="username" />
          <input type="email" placeholder="Enter your email" name="email" />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <input
            type="password"
            placeholder="Enter your password again"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
