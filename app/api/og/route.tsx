import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : null;

const fontData = await fetch(
    new URL('../../../assets/fonts/Phatt.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

const image = await fetch(new URL('../../../assets/images/og_bg.png', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
 
    return new ImageResponse(
      (
        <div
          style={{
            background:
              `url(data:image/png;base64,${Buffer.from(image).toString("base64")})`,
            backgroundSize: "1200px 630px",
            height: "100%",
            width: "100%",
            display: "flex",
            padding: 64,
            fontSize: 64,
            fontFamily: "Phatt",
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#ebdbb2",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            flexDirection: "column",
            justifyContent: "center",
            gap: 12,
          }}
        >
            <span>
              Jaime Trovoada
            </span>
          {
            title ? 
            <span style={{
              fontSize: 48,
            }}>
            {title}
            </span>
            : null
          }
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: "noto",
        fonts: [
          {
            name: "Phatt",
            data: fontData,
            style: "normal",
          }
        ]
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
