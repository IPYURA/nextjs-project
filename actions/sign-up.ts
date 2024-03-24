"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import UserModel from "@/models/user";
import dbConnect from "../libs/db-connect";
import { hashPassword } from "../libs/bycrpt";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhone,
  isValidSsm7,
} from "@/utils/user-info-check";

export async function signUp(formData: FormData) {
  console.log(formData);

  // const rawBirthDate = formData.get("birthdate");

  // if (typeof rawBirthDate !== "string") {
  //   return;
  // }

  // const stringBirthDate = new Date(rawBirthDate);

  // if (isNaN(stringBirthDate.getTime())) {
  //   return;
  // }

  const rawIUser = {
    auth: {
      userId: formData.get("email"),
      password: formData.get("password"),
      provider: "credentials",
    },
    profile: {
      userType: "normal",
    },
  };

  if (
    typeof rawIUser.auth.userId !== "string" ||
    !isValidEmail(rawIUser.auth.userId) ||
    typeof rawIUser.auth.password !== "string" ||
    rawIUser.auth.password !== formData.get("confirmPassword") ||
    !isValidPassword(rawIUser.auth.password)
    // typeof rawIUser.profile.name !== "string" ||
    // isValidName(rawIUser.profile.name) ||
    // typeof rawIUser.profile.ssm7 !== "string" ||
    // isValidSsm7(rawIUser.profile.ssm7) ||
    // typeof rawIUser.profile.phone !== "string" ||
    // isValidPhone(rawIUser.profile.phone)
  ) {
    throw new Error("Sign Up Form is not correct!!");
  }

  await dbConnect();
  try {
    const users = UserModel;
    const existingUser = await users
      .find({ "auth.userId": rawIUser.auth.userId })
      .exec();

    if (Object.keys(existingUser).length != 0) {
      console.log("email 중복 오류");

      throw new Error("Email Double Check Fail!!");
    }

    rawIUser.auth.password = await hashPassword(rawIUser.auth.password);

    const user = await users.create(rawIUser);
  } catch (error) {
    throw new Error("Sign Up Form is not correct!!");
  }
  // console.log("sussuess!!!");
  revalidatePath("/");
  redirect("/");
}
