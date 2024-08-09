"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/libs/actions";
import styles from "./registerForm.module.css";
import Link from "next/link";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Register"}
    </button>
  );
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(handleRegister, null);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
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
      <Submit />
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
}
