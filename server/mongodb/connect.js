import mongoose from "mongoose";

export const connectDB = async () => {

    mongoose.set('strictQuery', true)

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
       console.log("Error connecting MongoDB") 
    }

}