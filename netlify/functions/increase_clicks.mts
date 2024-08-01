import type { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
if (!uri) {
  console.error("MONGODB_URI is not defined");
  throw new Error("MONGODB_URI is not defined");
}

const client = new MongoClient(process.env.MONGODB_URI!);

async function increaseClicks(documentId: string | null, value: string | null) {
  try {
    await client.connect();

    const db = client.db("portfolio_analytics");
    const col = db.collection("clicks");

    let result = {};
    if (documentId === "siteClicks") {
      result = await col.updateOne(
        { _id: documentId },
        { $inc: { clicks: 1 } }
      );
    } else if (documentId === "routes" || documentId === "projects") {
      result = await col.updateOne(
        { _id: documentId },
        { $inc: { [`clicks.${value}`]: 1 } }
      );
    }

    if (!result) {
      console.log("No document found with the specified ID.");
    } else {
      console.log("Document updated successfully.");
    }
  } catch (err) {
    console.error("ERROR_____", err.stack);
  } finally {
    await client.close();
  }
}

export const handler: Handler = async (event, context) => {
  console.log("______!!function triggered!!");

  const documentId = event.body ? JSON.parse(event.body).id : null;
  const value = event.body ? JSON.parse(event.body).value : null;
  await increaseClicks(documentId, value);
  return {
    body: JSON.stringify({
      message: "clicks successfully increased",
      event,
      context,
    }),
    statusCode: 200,
  };
};
