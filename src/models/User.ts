import mongoose, { Schema, Document } from "mongoose";

// Schema for Message
export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
});

// Schema for User
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "Email is required!"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address",
        ],
    },
    password: { type: String, required: [true, "Password is required!"] },
    verifyCode: { type: String, required: [true, "Verify Code is required"] },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code expiry is required"],
    },
    isVerified: { type: Boolean, default: false },
    isAcceptingMessage: { type: Boolean, default: true },
    messages: [MessageSchema],
});


const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));

export default UserModel;