import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(5, { message: "Username must be at least 5 characters" })
    .max(20, { message: "Username must be at most 20 characters" })
    .regex(/^[a-zA-Z0-9_-]+$/, {
        message:
            "Username can only contain alphanumeric characters, underscores, or hyphens",
    });

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
});
