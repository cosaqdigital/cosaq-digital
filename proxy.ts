import { NextResponse, type NextRequest } from "next/server";
import { isLocale, localeCookie, pagePath, type Locale } from "@/lib/i18n/routes";

function browserLocale(header: string | null): Locale {
  let preferred: Locale = "pt";
  let highestQuality = 0;

  for (const range of (header ?? "").split(",")) {
    const [tag, parameter] = range.split(";");
    const language = tag.trim().toLowerCase().split("-")[0];
    if (!isLocale(language)) continue;

    const weight = parameter?.match(/^\s*q\s*=\s*(0(?:\.\d{0,3})?|1(?:\.0{0,3})?)\s*$/i)?.[1];
    const quality = parameter === undefined ? 1 : Number(weight);
    if (quality > highestQuality) {
      preferred = language;
      highestQuality = quality;
    }
  }

  return preferred;
}

export function proxy(request: NextRequest) {
  const selection = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(selection) ? selection : browserLocale(request.headers.get("Accept-Language"));
  const destination = request.nextUrl.clone();
  destination.pathname = pagePath(locale);

  const response = NextResponse.redirect(destination, 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: "/",
};
