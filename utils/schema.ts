import * as z from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  userName: z.string().min(2),
  dob: z.date(),
});


