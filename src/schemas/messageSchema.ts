import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, { message: "Message must contain at least 10 characters." })
        .max(300, {
            message: "Message can't contain more than 300 characters.",
        }),
});
