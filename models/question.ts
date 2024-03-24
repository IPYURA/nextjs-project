import mongoose from "mongoose";

// export interface CardClient {
//   id: string;
//   customerKey: string;
//   cardNumber: string;
// }

// export interface CardOject {
//   billingKey: string;
//   customerKey: string;
//   info: {
//     issuerCode?: string;
//     acquirerCode?: string;
//     number: string;
//     cardType?: string;
//     ownerType?: string;
//   };
// }

export interface Question {
  type: string;
  name: string;
  phoneNumber: string;
  email: string;
  organization?: string;
  title: string;
  content: string;
}

export interface IQuestion extends mongoose.Document, Question {}

const questionSchema = new mongoose.Schema<IQuestion>(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    organization: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

console.log("Question : ", mongoose.models.Question);

const QuestionModel =
  mongoose.models.Question || mongoose.model<IQuestion>("Question", questionSchema);

export default QuestionModel;
