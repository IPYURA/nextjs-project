import dbConnect from "@/libs/db-connect";
import { NextApiRequest, NextApiResponse } from "next";

// ----------------------------------------------------------------------

// async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method } = req;
//   const body = await req.json();
//   console.log("hadler!");
//   const data = await dbConnect();
//   const users = UserModel;
//   console.log("DB연결!")
//   switch (method) {
//     case "GET":
//       try {
//         const pets = await users.find(
//           {}
//         ); /* find all the data in our database */
//         res.status(200).json({ success: true, data: pets });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "POST":
//         console.log("POST요청!");

//         const { userInfo } = req.body;
//         console.log(userInfo);
//       try {
//         const user = await users.create(
//             userInfo
//         ); /* create a new model in the database */
//         res.status(201).json({ success: true, user: user });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }

// export { handler as GET, handler as POST};

// export async function POST(request: NextApiRequest) {
//   console.log(request.body);
//   const body = await request.json();
//   console.log("hadler!");
//   const data = await dbConnect();
//   const users = UserModel;
//   console.log("DB연결!");
// }
