import fs from "node:fs";
import path from "node:path";
// Makes small copies of the photos (public/images/sm) so cards load fast. Safe to skip if sharp is missing.
const dir = path.join(process.cwd(), "public", "images");
const out = path.join(dir, "sm");
try {
  const { default: sharp } = await import("sharp");
  fs.mkdirSync(out, { recursive: true });
  for (const f of fs.readdirSync(dir)) {
    const ext = path.extname(f).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;
    await sharp(path.join(dir, f)).resize({ width: 720, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(out, path.basename(f, ext) + ".jpg"));
  }
  console.log("thumbnails ready");
} catch (e) {
  console.log("thumbnails skipped:", e.message);
}
