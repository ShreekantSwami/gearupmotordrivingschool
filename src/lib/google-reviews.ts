export interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePhoto {
  height: number;
  width: number;
  photo_reference: string;
  html_attributions: string[];
}

export interface GooglePlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  photos?: GooglePhoto[];
}

export async function getGoogleReviews(): Promise<GooglePlaceDetails | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error(
      "Missing Google Places API credentials in environment variables.",
    );
    return null;
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,photos&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch reviews: ${res.statusText}`);
    }

    const data = await res.json();

    if (data.status !== "OK") {
      console.error(
        "Google Places API error:",
        data.status,
        data.error_message,
      );
      return null;
    }

    return data.result as GooglePlaceDetails;
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return null;
  }
}
