import { Suspense } from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/page";
// import { getPost } from "@/libs/data";

export async function generateMetadata({ params }) {
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getPostWithApi(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

async function getPostWithApi(slug) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch a post");
    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch a post");
  }
}

async function deletePostWithApi(slug) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete a post");
  }
}

export default async function SinglePostPage({ params }) {
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getPostWithApi(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}
