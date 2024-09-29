import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "";

if (!uri) {
  throw new Error("no MongoDB uri specified.");
}

mongoose.connection.on("connected", () => console.log("connected to db."));
mongoose.connection.on("open", () => console.log("open connecton."));
mongoose.connection.on("disconnected", () =>
  console.log("disconnected from db.")
);
mongoose.connection.on("reconnected", () => console.log("reconnected to db."));
mongoose.connection.on("disconnecting", () =>
  console.log("disconnecting from db.")
);
mongoose.connection.on("close", () => console.log("closed connection to db."));

export async function connectToDatabase() {
  await mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 5000,
    })
    .catch((err) => console.error(err.reason));
}
