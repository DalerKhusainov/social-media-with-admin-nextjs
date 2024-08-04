import styles from "./blog.module.css";
import PostCard from "@/components/postCard/page";
import { getPosts } from "@/libs/data";

export default async function BlogPage() {
  const posts = await getPosts();

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
