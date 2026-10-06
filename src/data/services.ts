export type Faq = { q: string; a: string };
export type Service = {
  slug: string; name: string; blurb: string; title: string; desc: string; h1: string;
  intro: string; what: string; who: string[]; includes: string[]; how: string[];
  safety: string; faqs: Faq[]; related: string[];
};
export const services: Service[] = [
 {
  "slug": "doctor-home-visit-mumbai",
  "name": "Doctor Home Visit",
  "blurb": "A doctor examines and advises you at home.",
  "title": "Doctor Home Visit in Mumbai | Home Doctor",
  "h1": "Doctor Home Visit in Mumbai: General Physician at Home",
  "desc": "Doctor home visit in Mumbai for check-ups, fever, elderly and post-hospital care. General physician at your home in Andheri, Juhu, Bandra and more. Call now.",
  "intro": "When getting to a clinic is difficult, a doctor can come to you. Visiting Medics arranges doctor home visits across Mumbai: a general physician at home for non-emergency problems such as fever, cough, body ache, blood pressure and sugar follow-ups, and recovery after illness or surgery.",
  "what": "A doctor home visit is a consultation held at your residence. The doctor listens to your history, examines you, and explains what is likely going on and what to do next.",
  "who": [
   "Older adults who find travel tiring",
   "People recovering from illness or surgery",
   "Patients with limited mobility",
   "Families who prefer a consultation at home"
  ],
  "includes": [
   "Medical history and examination",
   "Review of your reports and current medicines",
   "Advice and prescription as clinically appropriate",
   "Arranging blood tests at home through a partner laboratory, when advised",
   "Guidance on follow-up, further tests or hospital referral if needed"
  ],
  "how": [
   "Contact us and describe the problem",
   "We confirm your area and a suitable time",
   "The doctor visits, examines and advises"
  ],
  "safety": "If the doctor finds that hospital-level care is needed, they will tell you so and advise on next steps.",
  "faqs": [
   {
    "q": "Can a doctor visit for any illness?",
    "a": "Home visits suit non-emergency conditions. Serious or rapidly worsening symptoms need an emergency department."
   },
   {
    "q": "Which areas can the doctor visit?",
    "a": "We serve many parts of Mumbai. See our service areas or ask us about your locality."
   },
   {
    "q": "How do I book a doctor home visit near me?",
    "a": "Call or WhatsApp us, or use the enquiry form. We confirm your location, the problem and a suitable time."
   },
   {
    "q": "Can I book a doctor home visit for an elderly parent?",
    "a": "Yes. Tell us their age, the problem and current medicines, and we will plan the visit."
   },
   {
    "q": "Are urgent visits available?",
    "a": "Timing depends on availability and your location. Call us and we will tell you honestly what is possible. In an emergency, go to the nearest hospital."
   }
  ],
  "related": [
   "blood-test-at-home-mumbai",
   "home-healthcare-mumbai",
   "elderly-care-at-home-mumbai",
   "home-nursing-mumbai"
  ]
 },
 {
  "slug": "blood-test-at-home-mumbai",
  "name": "Blood Test at Home",
  "blurb": "Blood sample collection at home, tested by a partner laboratory.",
  "title": "Blood Test at Home in Mumbai",
  "h1": "Blood Test at Home in Mumbai: Home Sample Collection",
  "desc": "Blood test at home in Mumbai: sample collection at your doorstep, tested by a partner laboratory. For elderly, bedridden and busy patients. Call to book.",
  "intro": "Need blood tests but cannot travel to a lab? Visiting Medics arranges blood sample collection at your home in Mumbai. The sample is tested by a partner laboratory and the report is shared with you.",
  "what": "Home blood sample collection means a trained professional visits, collects the sample safely and sends it to a partner laboratory. We arrange the collection; the testing is done by the laboratory.",
  "who": [
   "Older adults and bedridden patients",
   "People recovering from illness or surgery",
   "Patients who need repeat tests advised by their doctor",
   "Busy families who prefer tests at home"
  ],
  "includes": [
   "Sample collection at home at a convenient time",
   "Sterile, single-use materials and safe sample handling",
   "Transport of the sample to the partner laboratory",
   "Report shared when ready (format and timing depend on the laboratory)"
  ],
  "how": [
   "Share the tests advised, or ask us which are suitable",
   "We confirm the time and any preparation such as fasting",
   "The sample is collected at home and the report is shared"
  ],
  "safety": "Follow fasting or preparation instructions for your test. Reports should be interpreted by a doctor rather than on their own.",
  "faqs": [
   {
    "q": "Do I need a prescription for a blood test?",
    "a": "Tests are best done as advised by a doctor. Share your prescription, or consult our doctor about which tests are suitable."
   },
   {
    "q": "Who does the testing?",
    "a": "A partner laboratory. Ask us for details when you book."
   },
   {
    "q": "Do I need to fast?",
    "a": "Some tests need fasting. We will tell you what applies when you book."
   }
  ],
  "related": [
   "doctor-home-visit-mumbai",
   "elderly-care-at-home-mumbai",
   "home-healthcare-mumbai"
  ]
 },
 {
  "slug": "home-healthcare-mumbai",
  "name": "Home Healthcare",
  "blurb": "Coordinated medical care at home, including diabetic and supportive care.",
  "title": "Home Healthcare in Mumbai | Care at Home",
  "h1": "Home Healthcare and Medical Care at Home in Mumbai",
  "desc": "Home healthcare in Mumbai: doctor visits, nursing, blood tests, elderly and post-hospital care at home. Medical care at home by Visiting Medics.",
  "intro": "Home healthcare brings medical care to the place you recover best. Visiting Medics offers healthcare at home in Mumbai, from consultation to nursing procedures and ongoing support.",
  "what": "It is a set of medical and nursing services delivered at home, planned around the patient's condition and the doctor's advice.",
  "who": [
   "Patients coming home after hospital stay",
   "People managing long-term conditions",
   "Families caring for an unwell relative"
  ],
  "includes": [
   "Doctor consultation at home",
   "Nursing care and procedures as advised",
   "Blood sample collection at home through a partner laboratory",
   "Diabetic care support, such as monitoring and medicine guidance",
   "Supportive and palliative home care, focused on comfort and dignity"
  ],
  "how": [
   "Tell us the patient's situation",
   "We suggest the services that fit",
   "Care is delivered at home and reviewed as needs change"
  ],
  "safety": "Care plans follow the treating doctor's advice.",
  "faqs": [
   {
    "q": "Is home healthcare the same as hospital care?",
    "a": "No. It supports recovery and ongoing care at home; it does not replace emergency or intensive hospital care."
   },
   {
    "q": "Can home healthcare help after hospital discharge?",
    "a": "Yes. It can support recovery with nursing, dressings, medicines and follow-up, as advised by your doctor."
   }
  ],
  "related": [
   "doctor-home-visit-mumbai",
   "home-nursing-mumbai",
   "bedridden-patient-care-mumbai"
  ]
 },
 {
  "slug": "home-nursing-mumbai",
  "name": "Home Nursing",
  "blurb": "Skilled nursing support at home.",
  "title": "Home Nursing in Mumbai | Home Nurse Services",
  "h1": "Home Nursing in Mumbai",
  "desc": "Home nurse in Mumbai for post-hospital recovery, injections, dressings and monitoring. Home nursing services by Visiting Medics. Call to arrange.",
  "intro": "A home nurse provides hands-on clinical support so recovery can continue safely at home. Visiting Medics arranges home nursing across Mumbai.",
  "what": "Home nursing covers nursing tasks such as medication administration, dressings, monitoring and patient support, following the doctor's instructions.",
  "who": [
   "Patients discharged from hospital",
   "Older adults needing regular nursing tasks",
   "Families who need trained help with care"
  ],
  "includes": [
   "Medication and injection administration",
   "Wound and dressing care",
   "Monitoring of vital signs",
   "Practical guidance for caregivers"
  ],
  "how": [
   "Share the prescription or discharge summary",
   "We match the nursing support needed",
   "The nurse visits as scheduled"
  ],
  "safety": "Nursing tasks are carried out as prescribed. Please keep prescriptions and reports ready for the visit.",
  "faqs": [
   {
    "q": "Do I need a prescription?",
    "a": "For medicines and injections, yes. Please share the prescription or doctor's advice."
   }
  ],
  "related": [
   "wound-dressing-at-home-mumbai",
   "iv-injection-at-home-mumbai",
   "home-medical-procedures-mumbai"
  ]
 },
 {
  "slug": "elderly-care-at-home-mumbai",
  "name": "Elderly Care",
  "blurb": "Medical and nursing support for older adults at home.",
  "title": "Elderly Care at Home in Mumbai",
  "h1": "Elderly Care at Home in Mumbai",
  "desc": "Elderly care at home in Mumbai: doctor visits, nursing and medical support for senior citizens. Visiting Medics serves Andheri, Juhu, Bandra and more.",
  "intro": "Older adults often do best in familiar surroundings. Visiting Medics supports senior family members with medical and nursing care at home in Mumbai.",
  "what": "Elderly care at home combines doctor consultation, nursing support and regular follow-up so health needs are looked after without repeated hospital trips.",
  "who": [
   "Seniors with chronic conditions",
   "Older adults with reduced mobility",
   "Families who live apart from their parents"
  ],
  "includes": [
   "Doctor home consultation",
   "Routine nursing tasks and monitoring",
   "Medicine review with the treating doctor",
   "Support for recovery after illness or surgery"
  ],
  "how": [
   "Tell us about your family member",
   "We plan visits around their needs",
   "Care is reviewed with you regularly"
  ],
  "safety": "Sudden chest pain, breathlessness, confusion or collapse need emergency hospital care.",
  "faqs": [
   {
    "q": "Can visits be regular?",
    "a": "Yes. Tell us what is needed and we will discuss a suitable schedule."
   }
  ],
  "related": [
   "bedridden-patient-care-mumbai",
   "doctor-home-visit-mumbai",
   "home-nursing-mumbai"
  ]
 },
 {
  "slug": "wound-dressing-at-home-mumbai",
  "name": "Wound Dressing",
  "blurb": "Clean, professional dressing changes at home.",
  "title": "Wound Dressing at Home in Mumbai",
  "h1": "Wound Dressing at Home in Mumbai",
  "desc": "Wound dressing at home in Mumbai: post-surgical, diabetic and long-standing wounds dressed with sterile technique. Request a visit from Visiting Medics.",
  "intro": "Regular, clean dressing helps wounds heal. Visiting Medics provides wound dressing at home in Mumbai so you avoid repeated trips.",
  "what": "A dressing visit involves assessing the wound, cleaning it, applying a suitable dressing and advising on care between visits.",
  "who": [
   "Patients after surgery",
   "People with diabetic or pressure wounds",
   "Those with injuries needing repeated dressing"
  ],
  "includes": [
   "Wound assessment",
   "Cleaning and dressing using sterile technique",
   "Advice on keeping the wound clean and dry",
   "Referral advice if the wound looks infected or is not healing"
  ],
  "how": [
   "Tell us about the wound and share any doctor's notes",
   "We schedule the visit",
   "Dressing is done and a follow-up plan is explained"
  ],
  "safety": "Increasing redness, swelling, pus, fever or severe pain need prompt medical attention.",
  "faqs": [
   {
    "q": "How often is dressing needed?",
    "a": "It depends on the wound and the doctor's advice."
   },
   {
    "q": "Can you do dressing after surgery?",
    "a": "Yes, on the surgeon's or doctor's advice. Share any discharge notes."
   }
  ],
  "related": [
   "home-nursing-mumbai",
   "bedridden-patient-care-mumbai",
   "doctor-home-visit-mumbai"
  ]
 },
 {
  "slug": "iv-injection-at-home-mumbai",
  "name": "IV Injection at Home",
  "blurb": "Prescribed IV medicines and fluids given at home.",
  "title": "IV Injection and Drip at Home in Mumbai",
  "h1": "IV Injection, IV Drip and Saline at Home in Mumbai",
  "desc": "IV injection, IV drip and saline at home in Mumbai, given on a doctor's prescription by qualified personnel. Call Visiting Medics to arrange.",
  "intro": "Some prescribed medicines and fluids are given through a vein. Visiting Medics arranges IV injection at home in Mumbai when your doctor has advised it.",
  "what": "An IV visit involves placing a cannula and giving the prescribed medicine or fluid, with monitoring during administration.",
  "who": [
   "Patients prescribed IV medicines",
   "People who cannot easily travel for treatment",
   "Patients continuing treatment after discharge"
  ],
  "includes": [
   "Verification of the prescription",
   "IV cannulation by qualified personnel",
   "IV fluids such as saline, and IV medicines, as prescribed",
   "Administration and monitoring",
   "Safe disposal of used materials"
  ],
  "how": [
   "Share the prescription",
   "We confirm the visit",
   "The IV is given and monitored at home"
  ],
  "safety": "IV treatment should only be given on a doctor's prescription and by trained personnel. Never attempt it yourself.",
  "faqs": [
   {
    "q": "Can you give IV fluids without a prescription?",
    "a": "No. IV treatment needs a doctor's advice."
   },
   {
    "q": "Can IV saline be given at home for dehydration?",
    "a": "Only after a doctor assesses the patient and prescribes it. Severe dehydration needs hospital care."
   }
  ],
  "related": [
   "home-medical-procedures-mumbai",
   "home-nursing-mumbai",
   "doctor-home-visit-mumbai"
  ]
 },
 {
  "slug": "bedridden-patient-care-mumbai",
  "name": "Bedridden Patient Care",
  "blurb": "Clinical and nursing support for patients who cannot leave bed.",
  "title": "Bedridden Patient Care at Home in Mumbai",
  "h1": "Bedridden Patient Care at Home in Mumbai",
  "desc": "Bedridden patient care at home in Mumbai: nursing, wound and pressure-area care, feeding tube and catheter support. Enquire with Visiting Medics.",
  "intro": "Caring for a bedridden family member is demanding. Visiting Medics supports families in Mumbai with clinical care at home.",
  "what": "Care for bedridden patients focuses on preventing complications, maintaining comfort and carrying out medical procedures safely.",
  "who": [
   "Patients after stroke or major illness",
   "Frail older adults",
   "Patients needing long-term nursing"
  ],
  "includes": [
   "Pressure-area and wound care",
   "Catheter and feeding tube care",
   "Medication administration",
   "Guidance for family caregivers"
  ],
  "how": [
   "Describe the patient's condition",
   "We plan the clinical support needed",
   "Visits continue as the doctor advises"
  ],
  "safety": "Breathing difficulty, sudden drowsiness, high fever or bleeding need emergency care.",
  "faqs": [
   {
    "q": "Can you guide family caregivers?",
    "a": "Yes. We can explain general positioning and hygiene, while procedures stay with qualified staff."
   }
  ],
  "related": [
   "home-medical-procedures-mumbai",
   "catheter-care-at-home-mumbai",
   "wound-dressing-at-home-mumbai"
  ]
 },
 {
  "slug": "home-medical-procedures-mumbai",
  "name": "Home Medical Procedures",
  "blurb": "Catheter, Ryle's tube, cannulation and medication administration by qualified personnel.",
  "title": "Home Medical Procedures in Mumbai",
  "h1": "Home Medical Procedures in Mumbai",
  "desc": "Foley catheter, Ryle's tube care, IV cannulation and medication administration at home in Mumbai by qualified personnel. Enquire today.",
  "intro": "Some procedures that once needed a hospital visit can be done safely at home by trained professionals. Visiting Medics offers these in Mumbai on medical advice.",
  "what": "These are clinical procedures performed by appropriately qualified personnel. They are not do-it-yourself tasks.",
  "who": [
   "Patients needing a urinary catheter",
   "Patients who need a feeding tube",
   "Patients on injectable medicines"
  ],
  "includes": [
   "Foley catheterization and catheter care",
   "Ryle's tube insertion, exchange and care",
   "IV cannulation and IV injection",
   "Medication administration"
  ],
  "how": [
   "Share the doctor's advice",
   "We confirm the procedure and visit time",
   "The procedure is done and aftercare is explained"
  ],
  "safety": "Each procedure carries risks and needs a clinical indication. Never attempt these at home without a trained professional.",
  "faqs": [
   {
    "q": "Who performs the procedures?",
    "a": "Appropriately qualified personnel. You are welcome to ask about the professional who will visit before you book."
   }
  ],
  "related": [
   "catheter-care-at-home-mumbai",
   "ryles-tube-care-at-home-mumbai",
   "iv-injection-at-home-mumbai"
  ]
 },
 {
  "slug": "catheter-care-at-home-mumbai",
  "name": "Catheter Care",
  "blurb": "Foley catheter insertion, change and care at home.",
  "title": "Catheter Care at Home in Mumbai",
  "h1": "Foley Catheter Insertion and Care at Home in Mumbai",
  "desc": "Foley catheter insertion, change and catheter care at home in Mumbai by qualified personnel, on medical advice. Call Visiting Medics.",
  "intro": "A urinary catheter should be placed and changed with sterile technique. Visiting Medics arranges Foley catheter insertion, change and care at home in Mumbai, on medical advice.",
  "what": "A Foley catheter is a thin, flexible tube placed in the bladder to drain urine. It is used only when clinically needed and is placed by qualified personnel.",
  "who": [
   "Patients who cannot pass urine",
   "Bedridden patients",
   "Patients recovering after surgery",
   "People with a long-term catheter who need routine change"
  ],
  "includes": [
   "Assessment and confirmation of need",
   "Sterile insertion or change by qualified personnel",
   "Catheter bag and hygiene guidance for the family",
   "Advice on warning signs and when to seek care"
  ],
  "how": [
   "Share the doctor's advice",
   "We confirm the visit",
   "The catheter is placed or changed and aftercare is explained"
  ],
  "safety": "Never insert or remove a catheter yourself. Fever, pain, blood in the urine or no urine draining need prompt medical attention.",
  "faqs": [
   {
    "q": "Can a catheter be inserted at home?",
    "a": "Yes, when clinically appropriate and done by qualified personnel. We assess first."
   },
   {
    "q": "How often is a catheter changed?",
    "a": "It depends on the catheter type and your doctor's advice."
   }
  ],
  "related": [
   "home-medical-procedures-mumbai",
   "bedridden-patient-care-mumbai",
   "home-nursing-mumbai"
  ]
 },
 {
  "slug": "ryles-tube-care-at-home-mumbai",
  "name": "Ryle's Tube Care",
  "blurb": "Ryle's tube insertion, exchange and feeding care at home.",
  "title": "Ryle's Tube Care at Home in Mumbai",
  "h1": "Ryle's Tube Insertion, Exchange and Care at Home in Mumbai",
  "desc": "Ryle's tube (nasogastric tube) insertion, exchange and feeding-tube care at home in Mumbai by qualified personnel. Enquire with Visiting Medics.",
  "intro": "When a person cannot swallow safely, a feeding tube may be advised. Visiting Medics arranges Ryle's tube insertion, exchange and care at home in Mumbai by qualified personnel.",
  "what": "A Ryle's tube, also called a nasogastric or NG tube, is a thin tube passed through the nose into the stomach to give liquid feeds and medicines.",
  "who": [
   "Patients with swallowing difficulty, for example after a stroke",
   "Bedridden or long-term ill patients",
   "Patients advised tube feeding by their doctor"
  ],
  "includes": [
   "Assessment of need on medical advice",
   "Insertion or exchange by qualified personnel",
   "Checking the tube position before use",
   "General guidance for caregivers on feeding hygiene and positioning"
  ],
  "how": [
   "Share the doctor's advice",
   "We confirm the visit",
   "The tube is placed or exchanged and care is explained"
  ],
  "safety": "A wrongly placed tube can be dangerous. Never insert, adjust or re-insert it yourself. Coughing, breathlessness, vomiting or a displaced tube need urgent medical help.",
  "faqs": [
   {
    "q": "How often is a Ryle's tube exchanged?",
    "a": "It depends on the tube type and your doctor's advice."
   },
   {
    "q": "Can family members be trained?",
    "a": "Caregivers can be guided on hygiene and positioning; insertion stays with qualified staff."
   }
  ],
  "related": [
   "home-medical-procedures-mumbai",
   "bedridden-patient-care-mumbai",
   "home-nursing-mumbai"
  ]
 }
];
export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const generalFaqs: Faq[] = [
 {
  "q": "What is Visiting Medics?",
  "a": "Visiting Medics provides healthcare at home in Mumbai, including doctor visits, nursing and home medical procedures."
 },
 {
  "q": "How do I request a home visit?",
  "a": "Call or WhatsApp us, or fill in the enquiry form. We will confirm your area, the service needed and a suitable time."
 },
 {
  "q": "What should I keep ready?",
  "a": "Prescriptions, recent reports, a list of current medicines and the patient's address and contact number."
 },
 {
  "q": "Who performs the procedures?",
  "a": "Appropriately qualified personnel. You are welcome to ask about the professional who will visit before you book."
 },
 {
  "q": "Can you arrange blood tests at home?",
  "a": "Yes. Blood samples can be collected at home and tested by a partner laboratory. Ask us which tests are suitable."
 },
 {
  "q": "How soon can a doctor visit?",
  "a": "Timing depends on availability and your location. Call or WhatsApp us and we will confirm."
 },
 {
  "q": "How much does a home visit cost?",
  "a": "Charges depend on the service, location and visit details. Contact us for current charges."
 },
 {
  "q": "Which areas do you serve?",
  "a": "We serve many parts of Mumbai, including Andheri, Juhu, Lokhandwala, Bandra, Goregaon, Malad and Kandivali. Ask us about your locality."
 }
];
