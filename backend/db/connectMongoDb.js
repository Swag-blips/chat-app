import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongodb ${connect.connection}`);
  } catch (error) {
    console.log("Error connecting to mongoDB", error.message);
  }
};

export default connectMongoDb;
