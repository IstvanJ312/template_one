// import { desc, eq } from "drizzle-orm";
// import { db } from "./db/client";

// export const listItems = async (userKey: string) => {
//   const rows = await db
//     .select()
//     .from(myItems)
//     .where(eq(myItems.userKey, userKey))
//     .orderBy(desc(myItems.updatedAt));
//   //if I get any issues fetching the data, I should check this line, and change updatedAt to updated_at

//   return rows;
// };
