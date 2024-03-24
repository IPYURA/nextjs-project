import dbConnect from "@/libs/db-connect";
import UserModel from "@/models/user";

export default async function findUserByEmail(email: string) {
  await dbConnect();
  const users = UserModel;
  const existingUser = await users.find({ "auth.uesrId": email }).exec();
  console.log(existingUser);

  if (Object.keys(existingUser).length != 0) {
    return null;
  }

  return existingUser;
}
