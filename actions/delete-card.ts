"use server";

import { deleteCardById } from "@/services/card-service";

const deleteCard = async (id: string) => {
   const result = await deleteCardById(id);
   console.log(result);
   if(!result){
    throw new Error("Card that didn't exist");
   }
}

export default deleteCard;