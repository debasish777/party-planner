import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import UserOTPVerification from '../models/userOTPVerification.model.js';

const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
        type:"login",
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready for Message");
        console.log(success);
    }
});

const sendOTPVerificationEmail = async ({ _id, email }, res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

        const mailDetails = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "Verify your Email",
            html: `<p>Enter <b>${otp}</b> to verify your email address and complete the signup process</p><p>This otp will <b>expire in 1 hour</b>.</p>`
        };

        //HASH OTP
        const saltRound = 10;
        const hashedOTP = await bcrypt.hash(otp, saltRound);

        const newOTPVerification = new UserOTPVerification({
            userId: _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiredAt: Date.now() + 3600000
        });
        await newOTPVerification.save();
        await transporter.sendMail(mailDetails);

        res.json({
            status: "PENDING",
            message: "Verification OTP Email Sent",
            data: {
                userId: _id,
                email
            }
        });

    } catch (error) {
        res.json({
            status: "FAILED",
            message: error.message
        });
    }
};

export default sendOTPVerificationEmail;