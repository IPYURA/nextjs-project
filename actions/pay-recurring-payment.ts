"use server";

import { RecurringPaymentObject } from "@/models/recurringPayment";
import { findCardWithUserByCustomerKey } from "@/services/card-service";
import { createRecurringPayment } from "@/services/recurring-payment-service";
import { updateUserById } from "@/services/user-service";
import calcNextPaymentDate from "@/utils/calc-next-payment-date";
import { revalidatePath } from "next/cache";
import { v4 as uuid } from "uuid";

const payRecurringPayment = async (
  stringPrice: string,
  customerKey: string
) => {
  const price = parseInt(stringPrice);

  const card = await findCardWithUserByCustomerKey(customerKey, {
    billingKey: 1,
    customerKey: 1,
  });

  if (!card) {
    throw new Error("등록된 결제수단이 없습니다.");
  } else if (!price || !(price === 9900 || price === 99000)) {
    throw new Error("월 정기 후원 금액이 유효한 값이 아닙니다.");
  }

  const data = await fetch(
    `https://api.tosspayments.com/v1/billing/${card.billingKey}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${process.env
          .TOSS_PAYMENTS_ENCODE_SECRET_KEY!}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerKey: customerKey,
        amount: price,
        orderId: uuid(),
        orderName: "Eop Insight 구독",
        customerEmail: card.customerKey.auth?.username || "",
        customerName: card.customerKey.profile?.email || "",
        taxFreeAmount: 0,
      }),
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("결제 실패하였습니다.");
    }
  });


  const newRecurringPayment: RecurringPaymentObject = {
    card: customerKey,
    amount: price,
    firstPaymentDate: data.approvedAt,
    nextPaymentDate: calcNextPaymentDate(new Date(data.approvedAt)),
  };

  console.log(newRecurringPayment);

  const createResult = await createRecurringPayment(newRecurringPayment);

  if (!createResult) {
    throw new Error("결제정보 저장에 실패하였습니다.");
  }
  
  const updateResult = await updateUserById(customerKey, {
    "profile.userType": "premium",
  });

  if (!updateResult) {
    throw new Error("회원정보 수정에 실패하였습니다.");
  }

  revalidatePath("/profile");
};

export default payRecurringPayment;
