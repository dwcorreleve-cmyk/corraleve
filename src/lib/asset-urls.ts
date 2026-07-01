// Asset URL mapping for production deployment
// Lovable's /__l5e/ URLs don't work on Netlify, so we map to public R2 URLs

const R2_BUCKET_PUBLIC_URL = process.env.VITE_R2_PUBLIC_URL || "https://pub-3e45edfb2b7445a09bcf42b6c17c4c7d.r2.dev";
const PROJECT_ID = "268a0956-fe47-419a-a2b5-2f195abe3bb7";

export function transformAssetUrl(assetJson: { url: string; r2_key: string }): string {
  // If already a public URL, return as-is
  if (assetJson.url.startsWith("http")) {
    return assetJson.url;
  }

  // If it's a Lovable dev URL, convert to R2
  if (assetJson.url.startsWith("/__l5e/")) {
    return `${R2_BUCKET_PUBLIC_URL}/${assetJson.r2_key}`;
  }

  return assetJson.url;
}

export function getAssetUrl(assetJson: { url: string; r2_key: string }): string {
  return transformAssetUrl(assetJson);
}
