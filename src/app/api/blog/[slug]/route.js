import { Post } from "@/models/models";
import { connectToDb } from "@/utils/connectToMongoDB";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch a post");
  }
}

export async function DELETE(request, { params }) {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete a post");
  }
}
