"use client";

// import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
// import { useRouter } from "next/navigation";
import { login } from "@/libs/actions";
import styles from "./loginForm.module.css";
import Link from "next/link";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Login"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, null);
  // const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Enter your name" name="username" />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Submit />
      {state?.error}
      <Link href="/register">
        Do not Have an account? <b>Register</b>
      </Link>
    </form>
  );
}
