export const MODULES = [
  {
    id: "overview",
    num: "00",
    title: "Learning Hub",
    short: "Overview",
    href: "#/",
    icon: "space_dashboard",
    blurb: "Peta eksplorasi Gallium — tujuh modul + sel interaktif 3D.",
  },
  {
    id: "sifat-fisika",
    num: "01",
    title: "Sifat Fisika",
    short: "Sifat Fisika",
    href: "#/sifat-fisika",
    icon: "thermostat",
    blurb: "Titik leleh anomali, massa jenis, isotop, dan perilaku termal.",
  },
  {
    id: "sifat-kimia",
    num: "02",
    title: "Sifat Kimia",
    short: "Sifat Kimia",
    href: "#/sifat-kimia",
    icon: "science",
    blurb: "Valensi, sifat amfoter, elektropositif, dan toksisitas rendah.",
  },
  {
    id: "aplikasi",
    num: "03",
    title: "Aplikasi & Kegunaan",
    short: "Aplikasi",
    href: "#/aplikasi",
    icon: "memory",
    blurb: "Galinstan, semikonduktor GaAs, LED GaN, dan deteksi neutrino.",
  },
  {
    id: "cara-pembuatan",
    num: "04",
    title: "Cara Pembuatan",
    short: "Cara Pembuatan",
    href: "#/cara-pembuatan",
    icon: "factory",
    blurb: "Diagram Bayer, ekstraksi limbah seng, dan metode alternatif.",
  },
  {
    id: "kelimpahan",
    num: "05",
    title: "Kelimpahan di Alam",
    short: "Kelimpahan",
    href: "#/kelimpahan",
    icon: "public",
    blurb: "Kelimpahan kerak bumi, mineral inang, dan cadangan dunia.",
  },
  {
    id: "sejarah",
    num: "06",
    title: "Sejarah",
    short: "Sejarah",
    href: "#/sejarah",
    icon: "history_edu",
    blurb: "Prediksi Mendeleev hingga isolasi Lecoq de Boisbaudran, 1875.",
  },
  {
    id: "reaksi",
    num: "07",
    title: "Reaksi-reaksi",
    short: "Reaksi",
    href: "#/reaksi",
    icon: "bolt",
    blurb: "Oksidasi, hidrolisis, pelarutan asam, dan gejala kepasaian.",
  },
  {
    id: "simulasi-3d",
    num: "08",
    title: "Simulasi 3D Sel Interaktif",
    short: "Simulasi 3D",
    href: "#/simulasi-3d",
    icon: "deployed_code",
    blurb: "Sel 3D interaktif: struktur atom, kisi ortorombik, dan transisi fase.",
  },
];

export const ROUTES = {
  "/": "overview",
  "/sifat-fisika": "sifat-fisika",
  "/sifat-kimia": "sifat-kimia",
  "/aplikasi": "aplikasi",
  "/cara-pembuatan": "cara-pembuatan",
  "/kelimpahan": "kelimpahan",
  "/sejarah": "sejarah",
  "/reaksi": "reaksi",
  "/simulasi-3d": "simulasi-3d",
};

export function getModule(id) {
  return MODULES.find((m) => m.id === id) ?? MODULES[0];
}

export function nextModuleOf(id) {
  const order = [
    "overview",
    "sifat-fisika",
    "sifat-kimia",
    "aplikasi",
    "cara-pembuatan",
    "kelimpahan",
    "sejarah",
    "reaksi",
    "simulasi-3d",
  ];
  const i = order.indexOf(id);
  return i >= 0 && i < order.length - 1 ? getModule(order[i + 1]) : null;
}
