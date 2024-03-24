"use server";

import { CardClient } from "@/models/card";
import { findCardByCustomerKey } from "@/services/card-service";
import { findUserByUserId } from "@/services/user-service";

export const getBillingInfo = async (userId: string): Promise<CardClient> => {
  const user = await findUserByUserId(userId, { _id: 1 });
  const card = await findCardByCustomerKey(user._id);

  return { id: card?._id, customerKey: user?._id, cardNumber: card?.info.number };
};
