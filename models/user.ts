import mongoose from "mongoose";
import { Types } from "mongoose";

export interface User {
  auth: {
    userId: string;
    password?: string;
    username?: string;
    provider: string;
  };
  profile?: {
    name?: string;
    email?: string;
    gender?: string;
    birthdate?: Date;
    phone?: number;
    userType?: string;
    lastVisited?: Date;
  };
  subscription?: {
    card?: Types.ObjectId;
    recurringPayment?: Types.ObjectId;
    expirationDate?: Date;
  };
}

export interface IUser extends mongoose.Document, User {}

const userSchema = new mongoose.Schema<IUser>(
  {
    auth: {
      userId: { type: String, required: true, unique: true },
      password: { type: String },
      username: { type: String },
      provider: {
        type: String,
        enum: ["naver", "google", "kakao", "credentials"],
        required: true,
      },
    },
    profile: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      gender: {
        type: String,
        enum: ["male", "female", "other"],
      },
      birthdate: {
        type: Date,
      },
      phone: {
        type: Number,
      },
      userType: {
        type: String,
        enum: ["normal", "premium"],
        required: true,
        default: "normal",
      },
      lastVisited: {
        type: Date,
      },
    },
    subscription: {
      card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
      },
      recurringPayment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RecurringPayment",
      },
      expirationDate: {
        type: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

console.log("User : ", mongoose.models.User);

const UserModel =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;

// const UserModel = mongoose.model<IUser>("User", userSchema)

// export default UserModel;
