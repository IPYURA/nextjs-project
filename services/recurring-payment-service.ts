import dbConnect from "@/libs/db-connect";
import RecurringPaymentModel, { RecurringPayment, RecurringPaymentObject } from "@/models/recurringPayment";
import { Types } from "mongoose";

export async function createRecurringPayment(rawData: RecurringPaymentObject) {
    await dbConnect();
  
    const data: RecurringPayment = {
      ...rawData,
      card: new Types.ObjectId(rawData.card),
    };
  
    try {
      const recurringPayment = RecurringPaymentModel;
  
      const result = await recurringPayment.create(data);
  
      return result;
    } catch {
      console.log("오류 발생");
  
      return null;
    }
  }