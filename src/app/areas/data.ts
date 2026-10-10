export const PHONE = "8080882201";
export const WA = "https://wa.me/918080882201";
export const SITE = "https://visitingmedics.com";

export const services = [
  "Doctor home visit", "Home nursing", "Elderly care", "Wound dressing",
  "IV injection & cannulation", "Bedridden patient care", "Ryle's tube & Foley catheter care",
  "Medication administration", "Diabetic care", "Palliative care", "Blood tests via partner lab (home sample collection)",
];

export const zones = ["South Mumbai", "Central & Sea-face", "Western Suburbs"] as const;
export type Zone = (typeof zones)[number];
export type Area = {
  slug: string; name: string; zone: Zone; landmarks: string[]; note: string;
  subs: { slug: string; name: string }[]; stations: string[];
};

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const S = "South Mumbai", C = "Central & Sea-face", W = "Western Suburbs";
const raw: [string, string, Zone, string[], string, string[], string[]][] = [
  ["churchgate", "Churchgate", S, ["Churchgate Station", "Oval Maidan", "Marine Drive"], "Useful for families around Marine Drive who need nursing or injections at home.", [], ["Churchgate"]],
  ["fort", "Fort", S, ["CST", "Horniman Circle", "Flora Fountain"], "Busy business district: professionals and elderly parents living nearby can arrange a doctor without disturbing their schedule.", [], []],
  ["colaba", "Colaba", S, ["Colaba Causeway", "Gateway of India", "Sassoon Docks"], "Compact lanes and older buildings make hospital trips tiring for seniors, so care at home saves effort.", [], []],
  ["cuffe-parade", "Cuffe Parade", S, ["World Trade Centre", "Badhwar Park"], "Tower living in Cuffe Parade suits scheduled doctor visits and long-term nursing.", [], []],
  ["nariman-point", "Nariman Point", S, ["NCPA", "Air India Building", "Mantralaya"], "Home care for residents and office-goers around Nariman Point.", [], []],
  ["marine-drive", "Marine Drive", S, ["Marine Drive Promenade", "Girgaum Chowpatty", "Wankhede Stadium"], "Sea-facing apartments along Marine Drive: elderly care and doctor visits at home.", [], []],
  ["marine-lines", "Marine Lines", S, ["Marine Drive", "Wilson College", "Charni Road"], "Many older apartment buildings here, where home nursing and elderly care are often needed.", [], ["Marine Lines"]],
  ["charni-road", "Charni Road", S, ["Charni Road Station", "Girgaum Chowpatty", "Prarthana Samaj"], "Home nursing and doctor visits for families in Charni Road's older chawls and buildings.", [], ["Charni Road"]],
  ["girgaon", "Girgaon", S, ["Girgaum Chowpatty", "Thakurdwar"], "Narrow lanes in Girgaon make travel hard for seniors; care comes to the door instead.", ["Opera House", "Kalbadevi"], []],
  ["grant-road", "Grant Road", S, ["Grant Road Station", "Nana Chowk", "August Kranti Maidan"], "Doctor visits, dressing and injections for residents in and around Grant Road.", ["Tardeo"], ["Grant Road"]],
  ["breach-candy", "Breach Candy", S, ["Breach Candy Hospital", "Warden Road", "Bhulabhai Desai Road"], "Home care for post-hospital recovery, wound dressing and medication support.", [], []],
  ["mahalaxmi", "Mahalaxmi", S, ["Mahalaxmi Racecourse", "Mahalaxmi Temple", "Haji Ali Dargah"], "Home healthcare for high-rise and seafront residents around Mahalaxmi.", ["Haji Ali"], ["Mahalaxmi"]],
  ["mumbai-central", "Mumbai Central", S, ["Mumbai Central Station", "Nair Hospital", "Maratha Mandir"], "Doctor home visits and nursing for families close to Mumbai Central.", [], ["Mumbai Central"]],
  ["worli", "Worli", C, ["Worli Sea Face", "Bandra-Worli Sea Link", "Nehru Centre"], "High-rise living in Worli suits home visits for check-ups, IV therapy and nursing.", ["Worli Sea Face"], []],
  ["lower-parel", "Lower Parel", C, ["Phoenix Palladium", "Kamala Mills", "Senapati Bapat Marg"], "Home care for residents of Lower Parel's towers and older chawl pockets.", ["Parel"], ["Lower Parel"]],
  ["prabhadevi", "Prabhadevi", C, ["Siddhivinayak Temple", "Ravindra Natya Mandir"], "Families near the temple area can book home nursing and doctor visits for elderly members.", [], ["Prabhadevi"]],
  ["dadar", "Dadar", C, ["Dadar Station", "Dadar Plaza", "Kabutarkhana"], "Dense, crowded Dadar makes travel to clinics difficult, so a visiting doctor helps.", ["Shivaji Park"], ["Dadar"]],
  ["matunga", "Matunga", C, ["Matunga Road Station", "King's Circle", "Five Gardens"], "Home visits for Matunga's many older apartment buildings and senior residents.", [], ["Matunga Road"]],
  ["mahim", "Mahim", C, ["Mahim Causeway", "St. Michael's Church", "Mahim Bay"], "Home care for bedridden patients and post-surgery dressing across Mahim.", [], ["Mahim Junction"]],
  ["sion", "Sion", C, ["Sion Hospital", "Sion Fort", "Sion Circle"], "Home nursing and follow-up care for residents of Sion and its neighbouring areas.", ["Wadala", "Sewri"], []],
  ["bandra", "Bandra", W, ["Bandra Talao", "Hill Road", "Mount Mary"], "Home doctor visits, IV injections and elderly care across Bandra.", ["Bandra Reclamation", "Bandra Bandstand"], ["Bandra"]],
  ["bandra-west", "Bandra West", W, ["Carter Road", "Linking Road", "Bandstand"], "Apartment-heavy Bandra West: doctor visits, IV injections and elderly care at your door.", [], []],
  ["bandra-east", "Bandra East", W, ["Bandra Terminus", "Kalanagar", "Family Court"], "Home healthcare for Bandra East families and nearby offices.", ["Bandra Kurla Complex (BKC)"], []],
  ["pali-hill", "Pali Hill", W, ["Pali Naka", "Pali Market", "Perry Cross Road"], "Quiet residential lanes where families prefer private, at-home medical care.", [], []],
  ["khar-west", "Khar West", W, ["Khar Station", "Linking Road", "Khar Gymkhana"], "Doctor home visits and nursing for families across Khar West.", [], ["Khar Road"]],
  ["khar-east", "Khar East", W, ["Khar Subway", "Western Express Highway", "Golibar"], "Home care for Khar East residents, including seniors and post-hospital patients.", [], []],
  ["santacruz-west", "Santacruz West", W, ["Santacruz Station", "Milan Subway", "Juhu Tara Road"], "Home healthcare for residents on the west side of Santacruz station.", [], ["Santacruz"]],
  ["santacruz-east", "Santacruz East", W, ["Domestic Airport", "Western Express Highway", "Golibar"], "Doctor visits and nursing at home across Santacruz East.", ["Kalina"], []],
  ["vile-parle-west", "Vile Parle West", W, ["Mithibai College", "Nanavati Hospital", "Juhu Road"], "Home nursing and follow-up care, including after discharge from nearby hospitals.", [], ["Vile Parle"]],
  ["vile-parle-east", "Vile Parle East", W, ["Nehru Road", "Subhash Road", "Parle Station East"], "Home doctor visits for Vile Parle East's housing societies.", [], []],
  ["juhu", "Juhu", W, ["Juhu Beach", "Juhu Tara Road", "JVPD Scheme"], "Bungalows and society flats in Juhu: elderly care and doctor visits without the traffic.", ["Juhu Scheme", "Irla"], []],
  ["andheri-west", "Andheri West", W, ["Link Road", "Infinity Mall", "Andheri Sports Complex"], "Large residential population: injections, wound dressing and nursing at home.", ["Seven Bungalows", "Four Bungalows", "Yari Road", "DN Nagar", "Amboli", "Oshiwara"], ["Andheri"]],
  ["lokhandwala-complex", "Lokhandwala Complex", W, ["Lokhandwala Market", "Lokhandwala Back Road", "Oshiwara"], "Gated complexes in Lokhandwala suit scheduled doctor and nursing visits.", [], []],
  ["versova", "Versova", W, ["Versova Beach", "Seven Bungalows", "Yari Road"], "Home care for families around Versova's lanes and seafront societies.", [], []],
  ["andheri-east", "Andheri East", W, ["Chakala", "MIDC", "Sahar"], "Working professionals and parents living apart can book care for family at home.", ["Marol", "Chakala", "JB Nagar", "MIDC Andheri", "SEEPZ", "Sakinaka", "Chandivali"], []],
  ["jogeshwari-west", "Jogeshwari West", W, ["Jogeshwari Station", "SV Road", "Jogeshwari Caves"], "At-home care for seniors and bedridden patients in Jogeshwari West.", [], ["Jogeshwari"]],
  ["jogeshwari-east", "Jogeshwari East", W, ["Jogeshwari-Vikhroli Link Road", "Western Express Highway", "Jogeshwari Caves"], "Doctor visits and nursing across Jogeshwari East.", [], []],
  ["goregaon-west", "Goregaon West", W, ["Goregaon Station", "Link Road", "Bangur Nagar"], "Doctor visits and nursing across Goregaon West.", ["Bangur Nagar", "Ram Mandir"], ["Goregaon", "Ram Mandir"]],
  ["goregaon-east", "Goregaon East", W, ["Oberoi Mall", "Film City", "Western Express Highway"], "Home healthcare for Goregaon East's large housing complexes.", ["Aarey Colony", "Dindoshi", "Gokuldham", "Yashodham", "Royal Palms", "Film City"], []],
  ["malad-west", "Malad West", W, ["Inorbit Mall", "Link Road", "Malad Station"], "Home healthcare for Malad's many housing societies.", ["Orlem", "Evershine Nagar", "Mindspace", "Chincholi Bunder", "Kanchpada", "Malvani", "Marve"], ["Malad"]],
  ["malad-east", "Malad East", W, ["Malad Subway", "Western Express Highway", "Pushpa Park"], "Doctor home visits and nursing for Malad East residents.", [], []],
  ["madh-island", "Madh Island", W, ["Madh Fort", "Marve Beach", "Erangal Beach"], "Coastal Madh is far from large hospitals, so doctor and nursing visits at home help.", [], []],
  ["kandivali-west", "Kandivali West", W, ["Kandivali Station", "Mahavir Nagar", "Charkop"], "Elderly care, dressing and IV therapy at home in Kandivali West.", ["Mahavir Nagar", "Charkop", "Dahanukarwadi", "Poisar"], ["Kandivali"]],
  ["kandivali-east", "Kandivali East", W, ["Thakur Village", "Samata Nagar", "Western Express Highway"], "Doctor visits and nursing for Kandivali East's large townships.", ["Thakur Village", "Thakur Complex", "Lokhandwala Township", "Samata Nagar"], []],
  ["borivali-west", "Borivali West", W, ["Borivali Station", "IC Colony", "Gorai Road"], "Doctor home visits and palliative care support across Borivali West.", ["IC Colony", "Eksar", "Shimpoli", "Gorai", "Yogi Nagar", "Chikuwadi", "Vazira", "Kastur Park", "Mandpeshwar"], ["Borivali"]],
  ["borivali-east", "Borivali East", W, ["Sanjay Gandhi National Park", "Kanheri Caves Road", "Magathane"], "Home care for Borivali East's housing societies and park-side neighbourhoods.", ["Magathane", "Devipada", "Rajendra Nagar", "Nancy Colony"], []],
  ["dahisar", "Dahisar", W, ["Dahisar Station", "Dahisar River"], "Home nursing and diabetic care for families at the northern end of Mumbai.", ["Dahisar Check Naka"], []],
];

export const areas: Area[] = raw.map(([slug, name, zone, landmarks, note, subs, stations]) => ({
  slug, name, zone, landmarks, note, stations,
  subs: subs.map((s) => ({ slug: slugify(s), name: s })),
}));
export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
export const nearbyOf = (slug: string) => {
  const i = areas.findIndex((a) => a.slug === slug);
  return [areas[i - 2], areas[i - 1], areas[i + 1], areas[i + 2]].filter(Boolean) as Area[];
};
