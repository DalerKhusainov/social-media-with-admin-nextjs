import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "@/models/models";
import { connectToDb } from "@/utils/connectToMongoDB";

export async function getPosts() {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the posts");
  }
}

export async function getPost(slug) {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch a post");
  }
}

export async function getUsers() {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the users");
  }
}

export async function getUser(id) {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch a user");
  }
}
