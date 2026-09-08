const API_ORIGIN = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api"
).replace(/\/api\/?$/, "");

export function resolveImageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path; // already a full URL (Cloudinary) — use as-is
  }
  return `${API_ORIGIN}${path}`; // relative path (old local uploads) — prepend origin
}
