import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`Connected to MongoDB !! HOST !!: ${conn.connection.host}`);
  } catch (err) {
    console.log('Error while connecting to Database', err);
  }
};

export default connectDB;