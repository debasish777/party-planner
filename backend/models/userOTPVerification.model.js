import mongoose from "mongoose";

const UserOTPVerificationSchema = new mongoose.Schema({
    userId: String,
    otp: String,
    createdAt: Date,
    expiredAt: Date
});

const UserOTPVerification = new mongoose.model("UserOTPVerification", UserOTPVerificationSchema);

export default UserOTPVerification;