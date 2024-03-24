import dbConnect from "@/libs/db-connect";
import CardModel, { Card, CardOject } from "@/models/card";
import { Types } from "mongoose";

export async function findCardByCustomerKey(
  customerKey: string,
  options?: object
) {
  await dbConnect();

  try {
    const cards = CardModel;

    const card = !options
      ? await cards.findOne({ customerKey: customerKey }).lean().exec()
      : await cards
          .findOne({ customerKey: customerKey }, options)
          .lean()
          .exec();

    if (!card || Object.keys(card).length == 0) {
      console.log("해당 카드 없음");

      return null;
    }
    return JSON.parse(JSON.stringify(card));
  } catch {
    throw new Error("findUserById Error!!");
  }
}

export async function findCardWithUserByCustomerKey(
  customerKey: string,
  options?: object
) {
  await dbConnect();

  try {
    const cards = CardModel;

    const card = !options
      ? await cards
          .findOne({ customerKey: customerKey })
          .populate("customerKey")
          .lean()
          .exec()
      : await cards
          .findOne({ customerKey: customerKey }, options)
          .populate("customerKey", { "auth.username": 1, "profile.email": 1 })
          .lean()
          .exec();

    if (!card || Object.keys(card).length == 0) {
      console.log("해당 카드 없음");

      return null;
    }
    return JSON.parse(JSON.stringify(card));
  } catch {
    throw new Error("findUserById Error!!");
  }
}

export async function createCard(rawData: CardOject) {
  await dbConnect();

  const data: Card = {
    ...rawData,
    customerKey: new Types.ObjectId(rawData.customerKey),
  };

  try {
    const cards = CardModel;

    const result = await cards.create(data);

    return result;
  } catch {
    console.log("오류 발생");

    return null;
  }
}

export async function deleteCardById(id: string) {
  await dbConnect();

  try {
    const cards = CardModel;

    const result = await cards.findByIdAndDelete(id).lean().exec();

    return JSON.parse(JSON.stringify(result));
  } catch {
    console.log("오류 발생");

    return null;
  }
}
