# Visiting Medics website

Next.js (App Router) + TypeScript. Multi-page, mobile-first, local-SEO-ready.

## Install and run
```
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Where to edit
| What | Where |
|---|---|
| Phone, WhatsApp, email, socials, indexing | `.env.local` (or Netlify/Vercel env vars), defaults in `src/config/site.ts` |
| Service areas | `areaGroups` in `src/config/site.ts` |
| Service pages and FAQs | `src/data/services.ts` (each entry is one page and URL) |
| Navigation, SEO helper | `src/lib/seo.ts` |
| Colours, spacing, typography | CSS variables at top of `src/app/globals.css` |
| Legal text | `src/app/privacy-policy`, `src/app/terms-and-conditions` |

## Logo and images
The original logo is `public/logo.png` (scaled copy of the supplied file, unaltered artwork); `src/app/icon.png` is its icon mark, used as the favicon. Add a 1200x630 `public/og-image.png` for social sharing. **Photos:** put image files in `public/images/` (JPG, PNG or WebP, about 1600px wide, under 300 KB). They appear automatically, and nothing breaks if one is missing. File names: `hero`, `blood-test-at-home-mumbai`, `doctor-home-visit-mumbai`, `home-healthcare-mumbai`, `home-nursing-mumbai`, `elderly-care-at-home-mumbai`, `wound-dressing-at-home-mumbai`, `iv-injection-at-home-mumbai`, `bedridden-patient-care-mumbai`, `home-medical-procedures-mumbai`, `catheter-care-at-home-mumbai`, `ryles-tube-care-at-home-mumbai`. Check that the alt text (`heroAlt` in `src/config/site.ts`, others built from the service name) matches each photo.

## SEO
See `SEO-KEYWORDS.md` for the keyword-to-page map and the off-site steps (Search Console, Google Business Profile).

## Before launch (placeholders)
Search the project for `[ADD`, `[CONFIRM`, `[DRAFT` and `XXXX`. The site is **noindex** until `NEXT_PUBLIC_INDEXABLE=true`, so keep it false until contact details, qualifications, and legal text are real and reviewed.

## Deploy on GitHub Pages (recommended)
1. Upload all files to a GitHub repository (branch `main`). If the `.github` folder does not upload, create the file `.github/workflows/deploy.yml` in GitHub (Add file, Create new file) and paste the contents of `deploy-workflow.yml`.
2. Repository Settings, Pages, Build and deployment, Source: **GitHub Actions**.
3. Settings, Pages, Custom domain: `visitingmedics.com`, then tick Enforce HTTPS.
4. Each push to `main` rebuilds and publishes the site (Actions tab shows progress).
Also works on Vercel or Netlify (Netlify publish directory: `out`).

## SEO notes
Each page has a unique title, description, canonical, breadcrumbs and JSON-LD (WebSite, MedicalBusiness, Service, FAQPage, BreadcrumbList). The enquiry form opens WhatsApp with the details prefilled; connect a form backend later if you want email delivery. Add the blog under `src/app/knowledge-centre` when there is real content.
