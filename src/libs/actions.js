"use server";

import { Post, User } from "@/models/models";
import { connectToDb } from "@/utils/connectToMongoDB";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, auth, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export async function handleGithubLogin() {
  "use server";
  await signIn("github");
}

export async function handleGithubLogout() {
  "use server";
  await signOut();
}

export async function handleRegister(previousState, formData) {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong!" };
  }
}

export async function login(previousState, formData) {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.error("Crendential error is " + err.message);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }

    return { error: "Something went wrong!" };
  }
}
