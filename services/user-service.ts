import { verifyPassword } from "@/libs/bycrpt";
import dbConnect from "@/libs/db-connect";
import UserModel, { User } from "@/models/user";

export async function authenticate(id: string, password: string) {
  console.log(id, password);
  await dbConnect();

  try {
    const users = UserModel;
    const rawExistingUser = await users.findOne({ "auth.userId": id }).lean().exec();

    if (!rawExistingUser || Object.keys(rawExistingUser).length == 0) {
      console.log("해당 email 없음");

      return null;
    }

    const existingUser = JSON.parse(JSON.stringify(rawExistingUser));
    console.log(existingUser);

    const isValid = await verifyPassword(password, existingUser.auth.password);

    if (!isValid) {
      console.log("비밀번호 틀림");
      return null;
    }

    const user = {
      id: existingUser.auth.userId,
      name: existingUser.profile.name,
      email: existingUser.profile.email,
    };

    return user;
  } catch {
    console.log("오류 발생");

    return null;
  }
}

export async function findUserByUserId(userId: string, options?: object) {
  await dbConnect();

  try {
    const users = UserModel;

    const user = !options
      ? await users.findOne({ "auth.userId": userId }).lean().exec()
      : await users.findOne({ "auth.userId": userId }, options).lean().exec();

    if (!user || Object.keys(user).length == 0) {
      console.log("해당 유저 없음");

      return null;
    }

    return JSON.parse(JSON.stringify(user));
  } catch {
    throw new Error("findUserById Error!!");
  }
}

export async function createUser(rawData: User) {
  const { userId, provider } = rawData.auth;

  if (provider === "credentials") {
    // const user: User = {
    //   auth: {
    //     userId: userId,
    //     username: username,
    //   },
    //   profile: {
    //     userType: "Normal",
    //   },
    // };
  } else if (
    provider === "kakao" ||
    provider === "google" ||
    provider === "naver"
  ) {
    const user: User = {
      auth: {
        userId: userId,
        username: rawData.auth.username,
        provider: provider,
      },
      profile: {
        userType: "normal",
        lastVisited: new Date(),
      },
    };
    await dbConnect();

    try {
      const users = UserModel;

      const result = await users.create(user);

      return result;
    } catch {
      console.log("오류 발생");

      return null;
    }
  } else {
    throw new Error("signUp Error!!!");
  }
}

export async function updateUserById(id: string, update: object,options?: object) {
  await dbConnect();

  try {
    const users = UserModel;

    const user = !options
      ? await users.findByIdAndUpdate(id, update).lean().exec()
      : await users.findByIdAndUpdate(id, update, options).lean().exec();

    if (!user || Object.keys(user).length == 0) {
      console.log("해당 유저 없음");

      return null;
    }

    return JSON.parse(JSON.stringify(user));
  } catch {
    throw new Error("updateUserById Error!!");
  }
}
