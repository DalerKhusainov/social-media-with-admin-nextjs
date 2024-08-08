import { Post } from "@/models/models";
import { connectToDb } from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
}
