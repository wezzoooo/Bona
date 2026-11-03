import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0B2118",
                }}
            >
                <div style={{ fontSize: 96, fontWeight: 700, color: "#F7F8F3" }}>Bona</div>
                <div style={{ fontSize: 32, color: "#D9A441", marginTop: 16 }}>
                    Fresh From Egypt. Delivered Worldwide.
                </div>
            </div>
        ),
        { ...size }
    );
}