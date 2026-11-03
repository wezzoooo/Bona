// src/components/contact/ContactForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { local } from "@/lib/utils";
import { interestOptions } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { submitInquiry } from "@/lib/inquiry";
import CTAButton from "@/components/common/CTAButton";
import CustomSelect from "@/components/common/CustomSelect";

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    businessEmail: z.string().email(),
    phone: z.string().optional(),
    companyName: z.string().min(1),
    areaOfInterest: z.string().optional(),
    productOfInterest: z.string().optional(),
    message: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
    firstName: "",
    lastName: "",
    businessEmail: "",
    phone: "",
    companyName: "",
    areaOfInterest: "",
    productOfInterest: "",
    message: "",
};

export default function ContactForm({
    initialProductName,
}: {
    initialProductName?: string;
}) {
    const locale = useLocale();
    const t = useTranslations("ContactForm");
    const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
    const [isSubmittingWhatsapp, setIsSubmittingWhatsapp] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        formState: { errors },
    } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues });

    useEffect(() => {
        if (initialProductName) {
            setValue("productOfInterest", initialProductName);
        }
    }, [initialProductName, setValue]);

    const interestLabel = (value?: string) => {
        const option = interestOptions.find((o) => o.value === value);
        return option ? local(option.label, locale) : "-";
    };

    const buildMessageLines = (data: FormValues) => [
        `${t("firstName")}: ${data.firstName} ${data.lastName}`,
        `${t("companyName")}: ${data.companyName}`,
        `${t("businessEmail")}: ${data.businessEmail}`,
        `${t("phoneNumber")}: ${data.phone || "-"}`,
        `${t("areaOfInterest")}: ${interestLabel(data.areaOfInterest)}`,
        `${t("productOfInterest")}: ${data.productOfInterest || "-"}`,
        `${t("message")}: ${data.message}`,
    ];

    const onSubmitEmail = async (data: FormValues) => {
        setIsSubmittingEmail(true);
        try {
            const result = await submitInquiry({
                fullName: `${data.firstName} ${data.lastName}`,
                companyName: data.companyName,
                businessEmail: data.businessEmail,
                phone: data.phone,
                productName: data.productOfInterest,
                additionalRequirements: buildMessageLines(data).join("\n"),
            });
            if (result.success) {
                toast.success(t("toastSuccess"));
                reset();
            } else {
                toast.error(t("toastError"));
            }
        } catch {
            toast.error(t("toastError"));
        } finally {
            setIsSubmittingEmail(false);
        }
    };

    const onSubmitWhatsapp = async (data: FormValues) => {
        setIsSubmittingWhatsapp(true);
        try {
            const text = encodeURIComponent(buildMessageLines(data).join("\n"));
            const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
            window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
        } finally {
            setIsSubmittingWhatsapp(false);
        }
    };

    const inputClass =
        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring";

    return (
        <div className="rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-headline-sm font-semibold text-primary">{t("heading")}</h2>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label={t("firstName")} required error={errors.firstName?.message}>
                    <input className={inputClass} {...register("firstName")} />
                </Field>
                <Field label={t("lastName")} required error={errors.lastName?.message}>
                    <input className={inputClass} {...register("lastName")} />
                </Field>
                <Field label={t("businessEmail")} required error={errors.businessEmail?.message}>
                    <input type="email" className={inputClass} {...register("businessEmail")} />
                </Field>
                <Field label={t("phoneNumber")}>
                    <input className={inputClass} {...register("phone")} />
                </Field>
                <Field label={t("companyName")} required error={errors.companyName?.message}>
                    <input className={inputClass} {...register("companyName")} />
                </Field>

                <Field label={t("areaOfInterest")}>
                    <Controller
                        control={control}
                        name="areaOfInterest"
                        render={({ field }) => (
                            <CustomSelect
                                options={interestOptions.map((opt) => ({
                                    value: opt.value,
                                    label: local(opt.label, locale),
                                }))}
                                value={field.value}
                                onChange={field.onChange}
                                placeholder={t("areaOfInterestPlaceholder")}
                            />
                        )}
                    />
                </Field>

                <div className="sm:col-span-2">
                    <Field label={t("productOfInterest")}>
                        <input
                            className={inputClass}
                            placeholder={t("productOfInterestPlaceholder")}
                            {...register("productOfInterest")}
                        />
                    </Field>
                </div>

                <div className="sm:col-span-2">
                    <Field label={t("message")} required error={errors.message?.message}>
                        <textarea rows={5} className={inputClass} {...register("message")} />
                    </Field>
                </div>

                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                    <CTAButton
                        type="button"
                        variant="primary"
                        className="flex-1"
                        onClick={handleSubmit(onSubmitEmail)}
                    >
                        {isSubmittingEmail ? t("submitting") : t("submitEmail")}
                    </CTAButton>
                    <CTAButton
                        type="button"
                        variant="accent"
                        className="flex-1"
                        onClick={handleSubmit(onSubmitWhatsapp)}
                    >
                        {isSubmittingWhatsapp ? t("submitting") : t("submitWhatsapp")}
                    </CTAButton>
                </div>
            </form>
        </div>
    );
}

function Field({
    label,
    required,
    error,
    children,
}: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block text-sm">
            <span className="mb-1 block font-medium text-foreground">
                {label}
                {required && <span className="text-destructive"> *</span>}
            </span>
            {children}
            {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
        </label>
    );
}