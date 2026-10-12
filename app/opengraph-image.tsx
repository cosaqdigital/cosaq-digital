import { ImageResponse } from "next/og";
export const alt = "COSAQ Digital — Sites, plataformas, automações e blogs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 75,
          background: "#090e15",
          color: "#f4f7fb",
        }}
      >
        <div style={{ fontSize: 35, display: "flex" }}>COSAQ Digital</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          <span>Seu negócio.</span>
          <span style={{ color: "#67b6ff" }}>Sua próxima solução digital.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a9b4c3" }}>
          Sites · Plataformas · Automações · Blogs
        </div>
      </div>
    ),
    size,
  );
}
