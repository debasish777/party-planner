import generateTokenAndSetCookie from "../../utils/generateTokenAndSetCookie.js";
import User from "../models/user.model.js";
import verifyEmail from "./emailVerification.controller.js";
import sendOTPVerificationEmail from "./sendOTPEmail.controller.js";

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, confirmPassword } = req.body;
        // res.send(req.body);
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" })
        }

        const user_username = await User.findOne({ username });
        if (user_username) {
            return res.status(400).json({ error: "Username already present" });
        }

        const user_email = await User.findOne({ email });
        if (user_email) {
            return res.status(400).json({ error: "Email already present" });
        }
        verifyEmail(email, res);

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);

            await newUser
                .save()
                .then((result)=>{
                    //HANDLE VERIFICATION
                    sendOTPVerificationEmail(result,res);
                });
            

            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            });

        }
        else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in Signup.", error.message);
        res.status(500).json({ error: "error" });
    }
};

export const login = (req, res) => {
    res.send("login Page");
}