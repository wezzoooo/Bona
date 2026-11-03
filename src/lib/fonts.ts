import { Manrope, Cairo } from "next/font/google";

/**
 * Manrope — الخط الإنجليزي الأساسي (DESIGN.md)
 * الأوزان المطلوبة حسب الـ typography scale:
 * 400 (body) / 600 (headline) / 700 (display + label-caps)
 */
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Cairo — الخط العربي المرافق (DESIGN.md: "pairs with Cairo")
 * نفس الأوزان عشان الهرمية البصرية تفضل متسقة بين اللغتين
 */
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});