"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import QuestionModel, { Question } from "@/models/question";
import dbConnect from "../libs/db-connect";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhone,
  isValidSsm7,
} from "@/utils/user-info-check";

export async function contactUs(formData: FormData) {
  console.log(formData);

  if (!formData.get("all-check")) {
    throw new Error("Check is Off!!");
  }

  const question = {
    type: formData.get("type"),
    name: formData.get("name"),
    phoneNumber: formData.get("phone"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await dbConnect();
  try {
    const questions = QuestionModel;

    const result = await questions.create(question);
  } catch (error) {
    throw new Error("Sign Up Form is not correct!!");
  }
  // revalidatePath("/");
  // redirect("/");
}
