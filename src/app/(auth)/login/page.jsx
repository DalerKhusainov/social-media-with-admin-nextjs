import styles from "./loginPage.module.css";
import { handleGithubLogin, login } from "@/libs/actions";

export default async function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button>Login with GitHub</button>
        </form>
      </div>
      <div className={styles.wrapper}>
        <form className={styles.form} action={login}>
          <input type="text" placeholder="Enter your name" name="username" />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <button>Login with Credentials</button>
        </form>
      </div>
    </div>
  );
}
