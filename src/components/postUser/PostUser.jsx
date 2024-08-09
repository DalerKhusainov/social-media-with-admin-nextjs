import Image from "next/image";
import styles from "./postUser.module.css";
import { getUser } from "@/libs/data";

export default async function PostUser({ userId }) {
  const user = await getUser(userId);

  return (
    <>
      <div className={styles.container}>
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          alt=""
          width={50}
          height={50}
          className={styles.userAvatar}
        />
        <div className={styles.texts}>
          <span className={styles.authorTitle}>Author</span>
          <span className={styles.userName}>{user.username}</span>
        </div>
      </div>
    </>
  );
}
