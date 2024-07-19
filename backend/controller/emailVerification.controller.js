import { Auth } from "two-step-auth"

const verifyEmail = async (emailID, res) => {
    try {
        const response = await Auth(emailID, 'Party Planning');
        console.log(response);
        console.log(response.OTP);
        console.log(response.success);
    } catch (error) {
        res.status(400).json({error:"Email Validation Failed"});
        console.log("Email Validation Failed");
    }
}

export default verifyEmail;