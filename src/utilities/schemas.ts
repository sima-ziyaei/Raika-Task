import { z } from "zod";

export const signinSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: ".نام کاربری حداقل شامل ۳ حرف می باشد" }),
  password: z
    .string()
    .trim()
    .min(6, { message: ".رمز عبور حداقل شامل ۶ کاراکتر می باشد" })
    .regex(
      new RegExp(".*[A-Z].*"),
      ".رمز عبور باید شامل حداقل ۱ حرف انگلیسی بزرگ و کوچک باشد"
    )
    .regex(
      new RegExp(".*[a-z].*"),
      ".رمز عبور باید شامل حداقل ۱ حرف انگلیسی بزرگ و کوچک باشد"
    ),
});

export const signupSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, { message: ".نام کاربری حداقل شامل ۳ حرف می باشد" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "پر کردن این فیلد الزامی است." })
      .email({
        message: "فرمت ایمیل وارد شده صحیح نیست.",
      }),
    password: z
      .string()
      .trim()
      .min(6, { message: ".رمز عبور حداقل شامل ۶ کاراکتر می باشد" })
      .regex(
        new RegExp(".*[A-Z].*"),
        ".رمز عبور باید شامل حداقل ۱ حرف انگلیسی بزرگ و کوچک باشد"
      )
      .regex(
        new RegExp(".*[a-z].*"),
        ".رمز عبور باید شامل حداقل ۱ حرف انگلیسی بزرگ و کوچک باشد"
      ),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: "پر کردن تکرار رمز عبور الزامی است." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "تکرار رمز عبور با رمز عبور مطابقت ندارد",
  });