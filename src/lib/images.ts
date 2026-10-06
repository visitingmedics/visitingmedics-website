import fs from "node:fs";
import path from "node:path";
const exts = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);
// Finds public/images/<name>.<ext> (case-insensitive). With small=true it returns the generated thumbnail when available.
export function photo(name: string, small = false): string | null {
  try {
    const dir = path.join(process.cwd(), "public", "images");
    const file = fs.readdirSync(dir).find((f) => {
      const e = path.extname(f).toLowerCase();
      return exts.has(e) && path.basename(f, path.extname(f)).trim().toLowerCase() === name.toLowerCase();
    });
    if (!file) return null;
    if (small) {
      const sm = path.basename(file, path.extname(file)) + ".jpg";
      if (fs.existsSync(path.join(dir, "sm", sm))) return `/images/sm/${encodeURIComponent(sm)}`;
    }
    return `/images/${encodeURIComponent(file)}`;
  } catch {
    return null;
  }
}
