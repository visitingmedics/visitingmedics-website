"use client";
import { useState } from "react";
import { areas, waLink } from "@/config/site";
import { services } from "@/data/services";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = `Home visit request\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nArea: ${d.get("area")}\nService: ${d.get("service")}\nDetails: ${d.get("details") || "-"}`;
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>Phone number<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" /></label>
      <label>Area in Mumbai<select name="area" required defaultValue="">
        <option value="" disabled>Select area</option>
        {areas.map((a) => <option key={a}>{a}</option>)}<option>Other area</option></select></label>
      <label>Service needed<select name="service" required defaultValue="">
        <option value="" disabled>Select service</option>
        {services.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Not sure</option></select></label>
      <label>Details (optional)<textarea name="details" rows={3} /></label>
      <button className="btn btn-primary" type="submit">Request a Home Visit</button>
      {sent && <p role="status">Your request opened in WhatsApp. Please press send to share it with us.</p>}
    </form>
  );
}
