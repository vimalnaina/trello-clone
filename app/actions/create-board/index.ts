"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create.",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);

// import { db } from "@/lib/db";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { z } from "zod";

// export type State = {
//   errors?: {
//     title?: string[];
//   },
//   message?: string | null;
// };

// const CreateBoard = z.object({
//   title: z.string().min(3, {
//     message: "Minimum length of 3 letters is required",
//   }),
// });

// export async function create(prevState: State, formData: FormData) {
//   const validateFields = CreateBoard.safeParse({
//     title: formData.get("title"),
//   });

//   if (!validateFields.success) {
//     return {
//       errors: validateFields.error.flatten().fieldErrors,
//       message: "Missing fields",
//     };
//   }

//   const { title } = validateFields.data;

//   try {
//     await db.board.create({
//       data: {
//         title,
//       },
//     });
//   } catch (error) {
//     return {
//       message: "Database error",
//     };
//   }

//   revalidatePath("/organization/org_2h5Cn2FLHeat2WEqv6hOaHz3rDg");
//   redirect("/organization/org_2h5Cn2FLHeat2WEqv6hOaHz3rDg");
// }
