import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:KenKaneki52V.@cluster0.22un2gw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}