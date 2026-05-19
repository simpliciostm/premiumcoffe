import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

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
          justifyContent: "space-between",
          backgroundColor: "#fbf7f1",
          backgroundImage:
            "radial-gradient(circle at 10% 15%, rgba(233,220,201,0.6), transparent 28%), radial-gradient(circle at 85% 88%, rgba(204,179,153,0.42), transparent 28%)",
          padding: 64,
          color: "#2f241d"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: 999,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#ccb399",
            backgroundColor: "rgba(255,255,255,0.75)",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 18,
            paddingRight: 18,
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase"
          }}
        >
          Café Aurora
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 920 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 700 }}>
            Cafés especiais, brunch artesanal e ambiente acolhedor
          </div>
          <div style={{ fontSize: 33, lineHeight: 1.3, color: "#6f6258" }}>
            Template premium para cafeterias locais, pronto para apresentação comercial.
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
