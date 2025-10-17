import mongoose from "mongoose";

const connectDB = async () => {
  try {

    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/books`)
    console.log(`/n DATABASE CONNECTED SUCCESSFULLY :) Info ${connectionInstance.connection.host}`)

    // ek bar connect hone ke baad bhi connection tut sakta hai

    mongoose.connection.on("error", (err) => {
      console.log("Error While Connecting to DB", err);
    });

  } catch (error) {
    console.error(error);
    console.log(error);
    process.exit(1); //stop the server
  }
};

export default connectDB;