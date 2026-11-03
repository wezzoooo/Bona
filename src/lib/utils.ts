import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Localized } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** بيرجع النص الصح من حقل { en, ar } حسب اللغة الحالية */
export function local(field: Localized, locale: string): string {
  return locale === "ar" ? field.ar : field.en;
}