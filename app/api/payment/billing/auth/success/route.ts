import { getServerAuthSession } from "@/libs/auth";
import { createCard } from "@/services/card-service";
import { findUserByUserId } from "@/services/user-service";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const customerKey = searchParams.get("customerKey");
  const authKey = searchParams.get("authKey");
  const authSession = await getServerAuthSession();

  if (authSession?.user.id && customerKey && authKey) {
    const user = await findUserByUserId(authSession.user.id, { _id: 1 });
    if (customerKey === user._id.toString()) {
      // console.log(process.env.TOSS_PAYMENTS_ENCODE_SECRET_KEY!);
      const data = await fetch(
        "https://api.tosspayments.com/v1/billing/authorizations/issue",
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${process.env
              .TOSS_PAYMENTS_ENCODE_SECRET_KEY!}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authKey: authKey,
            customerKey: customerKey,
          }),
        }
      ).then((response) => response.json());

      console.log(data);

      const result = await createCard({
        billingKey: data.billingKey,
        customerKey: customerKey,
        info: {
          issuerCode: data.card.issuerCode,
          acquirerCode: data.card.acquirerCode,
          number: data.card.number,
          cardType: data.card.cardType,
          ownerType: data.card.ownerType,
        },
      });
    }
    else {
      throw new Error("Api Billing Error!");
    }
  }
  else {
    throw new Error("Api Billing Error!");
  }
  
  revalidatePath("/payment/billing");
  redirect("/payment/billing");
}
