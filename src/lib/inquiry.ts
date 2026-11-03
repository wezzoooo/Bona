// src/lib/inquiry.ts
"use server";

export interface InquiryPayload {
  productName?: string;
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone?: string;
  additionalRequirements?: string;
}

export async function submitInquiry(
  payload: InquiryPayload
): Promise<{ success: boolean }> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Inquiry from Bona Website${payload.productName ? ` — ${payload.productName}` : ""}`,
        from_name: payload.fullName,
        "Full Name": payload.fullName,
        "Company Name": payload.companyName,
        "Business Email": payload.businessEmail,
        "Phone": payload.phone || "-",
        "Product of Interest": payload.productName || "-",
        "Message / Requirements": payload.additionalRequirements || "-",
      }),
    });

    const result = await response.json();
    return { success: result.success === true };
  } catch (error) {
    console.error("Inquiry submission failed:", error);
    return { success: false };
  }
}