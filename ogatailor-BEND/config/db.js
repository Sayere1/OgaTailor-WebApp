import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bugMAN00:Y2939PPZZTQ@cluster0.mlz4v.mongodb.net/WebAlx').then(()=>console.log("DB Connected"));
}