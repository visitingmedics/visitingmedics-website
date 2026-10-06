import { Crumbs } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("Privacy Policy", "How Visiting Medics collects, uses and protects your personal and health-related information.", "/privacy-policy");
export default function Page() {
  return (
    <div className="container prose" style={{ paddingBottom: "3rem" }}>
      <Crumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>Privacy Policy</h1>
      <p>Last updated: October 2026.</p>
      <h2>Who we are</h2><p>Visiting Medics provides healthcare at home in Mumbai, Maharashtra. This policy explains how we handle information you share with us through this website, phone or WhatsApp.</p>
      <h2>Information we collect</h2><p>Details you give us when you enquire or book, such as your name, phone number, area and the care needed, and health information you choose to share so we can arrange suitable care. This website does not ask you to create an account.</p>
      <h2>How we use it</h2><p>To respond to your enquiry, arrange and provide visits, and follow up on your care. We do not sell personal information.</p>
      <h2>Sharing</h2><p>We share information only with the professionals involved in your care, for example a partner laboratory for tests you request, or where the law requires it.</p>
      <h2>Storage and security</h2><p>We take reasonable steps to keep information safe and keep it only as long as needed for care, record-keeping or legal reasons.</p>
      <h2>WhatsApp and phone</h2><p>Messages sent by WhatsApp are handled by WhatsApp under its own policy. Please avoid sending sensitive documents unless needed for your care.</p>
      <h2>Your choices</h2><p>You can ask us to correct or delete the information we hold about you, subject to legal and medical record requirements. Contact us by phone or WhatsApp.</p>
    </div>
  );
}
