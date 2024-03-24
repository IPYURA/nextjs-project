import mongoose from "mongoose";
import { Types } from "mongoose";

export interface RecurringPaymentObject {
  card: string;
  amount: number;
  firstPaymentDate: Date;
  nextPaymentDate: Date;
}

export interface RecurringPayment {
  card: Types.ObjectId;
  amount: number;
  firstPaymentDate: Date;
  nextPaymentDate: Date;
}

export interface IRecurringPayment
  extends mongoose.Document,
    RecurringPayment {}

const recurringPaymentSchema = new mongoose.Schema<IRecurringPayment>(
  {
    card: { type: mongoose.Schema.Types.ObjectId, ref: "Card", required: true, unique: true },
    amount: { type: Number, required: true },
    firstPaymentDate: { type: Date, required: true },
    nextPaymentDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

console.log("RecurringPayment : ", mongoose.models.RecurringPayment);

const RecurringPaymentModel =
  mongoose.models.RecurringPayment ||
  mongoose.model<IRecurringPayment>("RecurringPayment", recurringPaymentSchema);

export default RecurringPaymentModel;
