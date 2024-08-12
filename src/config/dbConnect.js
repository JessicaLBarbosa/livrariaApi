import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export async function dbConnect() {
  mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose.connection;
}
