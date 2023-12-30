import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const TaskModel=mongoose.model("Task",taskSchema);

const DB_URL = process.env.MONGODB_URL;

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to DB");
    }
}

export default connectToDB;

export {TaskModel};