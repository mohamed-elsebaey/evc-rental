"use server";

import { userDataAuthentication } from "@/db/db";

import { addUserSessions } from "@/lib/lib";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export async function signInFormAction(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  const errors: { email?: string; password?: string } = {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "* Invalid Email";
  } else if (password.length < 8) {
    errors.password = "* Invalid password"; // Clearer message
  }


  if (Object.keys(errors).length > 0) {
    return { errors };
  }


  const dbUserDataCallBack = await userDataAuthentication(email, password);

  if (dbUserDataCallBack.errors) {
    return dbUserDataCallBack;
  }

  addUserSessions(dbUserDataCallBack);

  revalidatePath("/")
  redirect("/");
}