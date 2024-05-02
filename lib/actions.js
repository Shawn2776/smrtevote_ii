"use server";

import User from "@/models/user";
import connectMongoDB from "./mongodb";

export async function createUser(user) {
  try {
    await connectMongoDB();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
