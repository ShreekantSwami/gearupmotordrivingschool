import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ref = searchParams.get("ref");

  if (!ref) {
    return new NextResponse("Missing photo reference", { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return new NextResponse("Missing API key", { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${ref}&key=${apiKey}`;

  try {
    const response = await fetch(url, { redirect: "manual" });

    if (response.status === 301 || response.status === 302) {
      const location = response.headers.get("location");
      if (location) {
        return NextResponse.redirect(location);
      }
    }

    return new NextResponse("Image redirect location not found", {
      status: 500,
    });
  } catch (error) {
    console.error("Error fetching photo:", error);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
