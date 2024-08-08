import styles from "./blog.module.css";
import PostCard from "@/components/postCard/page";
// import { getPosts } from "@/libs/data";

async function getNewPosts() {
  try {
    const res = await fetch("http://localhost:3000/api/blog");
    if (!res.ok) throw new Error("Failed to fetch the posts");
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function BlogPage() {
  // const posts = await getPosts();
  const posts = await getNewPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
