import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
    // يشتغل على كل مسار عدا ملفات الـ API والملفات الثابتة
    matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};