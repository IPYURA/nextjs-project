import mongoose from "mongoose";
import { Types } from "mongoose";

export interface CardClient {
  id: string;
  customerKey: string;
  cardNumber: string;
}

export interface CardOject {
  billingKey: string;
  customerKey: string;
  info: {
    issuerCode?: string;
    acquirerCode?: string;
    number: string;
    cardType?: string;
    ownerType?: string;
  };
}

export interface Card {
  billingKey: string;
  customerKey: Types.ObjectId;
  info: {
    issuerCode?: string;
    acquirerCode?: string;
    number: string;
    cardType?: string;
    ownerType?: string;
  };
}

export interface ICard extends mongoose.Document, Card {}

const cardSchema = new mongoose.Schema<ICard>(
  {
    billingKey: { type: String, required: true, unique: true },
    customerKey: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    info: {
      issuerCode: { type: String },
      acquirerCode: { type: String },
      number: { type: String },
      cardType: { type: String },
      ownerType: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

console.log("Card : ", mongoose.models.Card);

const CardModel =
  mongoose.models.Card || mongoose.model<ICard>("Card", cardSchema);

export default CardModel;
