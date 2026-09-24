import { ImageResponse } from "next/og";
import { COMMUNITY_NAME } from "@/lib/constants";

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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 96,
          background:
            "radial-gradient(circle at 78% 22%, rgba(52,180,240,0.35) 0%, rgba(5,6,8,0) 45%), #050608",
          color: "#f6f8fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#34b4f0",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#34b4f0",
            }}
          />
          Private Telegram Community
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08, maxWidth: 880 }}>
          Learn. Discover. Earn Smarter.
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9aa3b4", marginTop: 28 }}>
          Join {COMMUNITY_NAME} on Telegram
        </div>
      </div>
    ),
    { ...size }
  );
}
