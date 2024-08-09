import styles from "./loginPage.module.css";
import { handleGithubLogin } from "@/libs/actions";
import LoginForm from "@/components/loginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button>Login with GitHub</button>
        </form>
      </div>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
}
