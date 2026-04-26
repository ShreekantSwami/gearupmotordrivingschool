const FALLBACK_SITE_URL = "https://gearup.example.com";

export function getSiteUrl(): URL {
  const rawValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawValue) {
    return new URL(FALLBACK_SITE_URL);
  }

  try {
    return new URL(rawValue);
  } catch {
    if (rawValue.startsWith("/")) {
      return new URL(FALLBACK_SITE_URL);
    }

    try {
      return new URL(`https://${rawValue}`);
    } catch {
      return new URL(FALLBACK_SITE_URL);
    }
  }
}
