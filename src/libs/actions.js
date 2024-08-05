"use server";

import { Post } from "@/models/models";
import { connectToDb } from "@/utils/connectToMongoDB";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addPost(formData) {
  //   "use server";
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  // Destructuring values above
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
}

export async function deletePost(formData) {
  //   "use server";

  const id = formData.get("postId");
  if (!id) return;

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("The post was deleted from DB");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
}
