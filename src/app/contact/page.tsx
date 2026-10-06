import { site, telLink, waLink } from "@/config/site";
import { Crumbs, Emergency } from "@/components/bits";
import ContactForm from "@/components/ContactForm";
import { meta } from "@/lib/seo";
export const metadata = meta("Book a Home Visit in Mumbai: Contact Us", "Call, WhatsApp or send an enquiry to request a doctor home visit or home healthcare in Mumbai.", "/contact");
export default function Contact() {
  return (<>
    <div className="container"><Crumbs items={[{ name: "Contact", href: "/contact" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>Request a Home Visit</h1>
      <p className="lead">Send the details below and we will get back to you to confirm the visit.</p></div>
    <section className="section"><div className="container two">
      <ContactForm />
      <div><h2>Contact details</h2>
        <ul><li><a href={telLink}>Call: {site.phone}</a></li><li><a href={waLink()}>WhatsApp</a></li>{site.email && <li><a href={`mailto:${site.email}`}>{site.email}</a></li>}<li>Service area: Mumbai</li></ul>
        <p>Call or WhatsApp us to confirm visit timing for your area.</p><Emergency /></div>
    </div></section></>);
}
