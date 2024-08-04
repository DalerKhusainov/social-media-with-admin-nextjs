const { default: mongoose } = require("mongoose");

const connection = {};

export async function connectToDb() {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
