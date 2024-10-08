import mongoose from "mongoose";

export const MongoDB = async () => {
    await mongoose.connect('mongodb+srv://mongo:mongo@mern-stack.iluygf0.mongodb.net/blog-app');
    console.log("DB connected Successfully...");
}
