import { z } from "zod"

export const SingUpFirstStepSchema = z
  .object({
    name: z.string().nonempty("الاسم مطلوب"),
    phonenumber: z.string().regex(/^(966)\d{7}$/, "رقم غير صحيح"),
    email: z.string().email("يرجى كتابة ايميل صحيح"),
    password: z.string().min(8, "كلمة مرور قصيرة"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة المرور غير متطابقة",
    path: ["confirmPassword"],
  })
