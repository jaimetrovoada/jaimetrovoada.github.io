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
      : "Jaime Trovoada";

    const phatt = await fetch(
      new URL("../../../assets/Phatt.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const image = await fetch(new URL("/images/og_bg.png")).then((res) =>
      res.arrayBuffer()
    );

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#282828",
            backgroundImage: `url("data:image/png;base64,${Buffer.from(
              image
            ).toString("base64")}")`,
            backgroundSize: "1200px 630px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#ebdbb2",
              padding: "0 20px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: "noto",
        fonts: [
          {
            name: "Phatt",
            data: phatt,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
