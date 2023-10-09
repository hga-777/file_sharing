import mongoose from "mongoose";

const DBconnection = async () => {
  const MONGO_URI = `mongodb://hritik:mongodb@ac-hgnkxfd-shard-00-00.flpb2p6.mongodb.net:27017,ac-hgnkxfd-shard-00-01.flpb2p6.mongodb.net:27017,ac-hgnkxfd-shard-00-02.flpb2p6.mongodb.net:27017/?ssl=true&replicaSet=atlas-mwhbdm-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("database connected sucessfully!");
  } catch (error) {
    console.error(`Error while connecting to the database `, error.message);
  }
};

export default DBconnection;
