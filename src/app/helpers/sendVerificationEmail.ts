import { resend } from "@/lib/resend";
import VerificationEmail from "../../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "MysteryMessage <onboarding@resend.dev>",
            to: email,
            subject: "Mystery Message | Verification Code",
            react: VerificationEmail({ username, otp: verifyCode }),
        });

        return {
            success: false,
            message: "Verification Email sent successfully!",
        };
    } catch (emailError) {
        console.log("Error sending verification email.");
        return { success: false, message: "Error sending verification email." };
    }
}
