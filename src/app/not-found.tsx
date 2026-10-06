import Link from "next/link";
export const metadata = { title: "Page not found", robots: { index: false, follow: false } };
export default function NotFound() {
  return (<div className="container section"><h1>Page not found</h1>
    <p>The page you are looking for does not exist or has moved.</p>
    <p><Link href="/">Go to the homepage</Link> or <Link href="/services">view our services</Link>.</p></div>);
}
