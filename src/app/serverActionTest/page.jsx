import { addPost, deletePost } from "@/libs/actions";

export default async function serverActionTestPage() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Enter title" name="title" />
        <input type="text" placeholder="Enter description" name="desc" />
        <input type="hidden" value={"third slug"} name="slug" />
        <input type="hidden" value={"66afdd896192a08e4ddee626"} name="userId" />
        <button type="submit">Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="Enter postId" name="postId" />
        <button type="submit">Delete Post</button>
      </form>
    </div>
  );
}
