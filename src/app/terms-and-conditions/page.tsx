import { Crumbs } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("Terms & Conditions", "Terms of use for the Visiting Medics website and home healthcare services.", "/terms-and-conditions");
export default function Page() {
  return (
    <div className="container prose" style={{ paddingBottom: "3rem" }}>
      <Crumbs items={[{ name: "Terms & Conditions", href: "/terms-and-conditions" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>Terms &amp; Conditions</h1>
      <p>Last updated: October 2026.</p>
      <h2>About this website</h2><p>The content on this website is general information about our services. It is not medical advice for any individual.</p>
      <h2>Our services</h2><p>Visiting Medics arranges doctor visits, nursing care, blood sample collection through a partner laboratory and home medical procedures in Mumbai. Services are provided on medical advice and are subject to availability and the patient&apos;s condition. We may advise hospital care where appropriate.</p>
      <h2>Emergencies</h2><p>Home healthcare does not replace emergency care. In a medical emergency, contact emergency services or go to the nearest emergency department.</p>
      <h2>Bookings, fees and cancellations</h2><p>Charges depend on the service, location and visit details. Please confirm fees and any cancellation or rescheduling terms with us before the visit.</p>
      <h2>Your responsibilities</h2><p>Please give accurate information about the patient&apos;s health and medicines, and keep prescriptions and reports ready.</p>
      <h2>Limitation of liability</h2><p>To the extent permitted by law, Visiting Medics is not liable for losses arising from reliance on website content or from circumstances outside our reasonable control. Nothing here limits any right you have under applicable law.</p>
      <h2>Governing law</h2><p>These terms are governed by the laws of India, and the courts at Mumbai, Maharashtra have jurisdiction.</p>
    </div>
  );
}
