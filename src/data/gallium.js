export const elementInfo = {
  name: "Galium",
  symbol: "Ga",
  atomicNumber: 31,
  atomicMass: 69.723,
  group: 13,
  period: 4,
  block: "p",
  category: "Logam Pascatransisi",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹",
  tagline: "Logam yang Meleleh di Telapak Tangan",
};

export const physicalProperties = [
  {
    title: "Wujud & Penampilan",
    value: "Padat, lunak, keperakan",
    detail:
      "Galium adalah logam lunak berwarna keperakan yang sangat mirip dengan aluminium. Logam ini sangat lunak sehingga dapat dipotong dengan pisau.",
    icon: "Sparkles",
    span: "col-span-2",
  },
  {
    title: "Titik Leleh",
    value: "29,76 °C",
    detail:
      "Salah satu logam dengan titik leleh terendah. Akan meleleh di telapak tangan manusia karena suhu tubuh ~37°C melebihi titik lelehnya.",
    icon: "Thermometer",
    span: "col-span-1",
  },
  {
    title: "Titik Didih",
    value: "2.204 °C",
    detail:
      "Rentang cair yang sangat luas (~2.177°C), menjadikannya ideal untuk termometer presisi tinggi.",
    icon: "Flame",
    span: "col-span-1",
  },
  {
    title: "Massa Jenis",
    value: "5,91 g/cm³",
    detail:
      "Massa jenis galium padat pada suhu 29,6°C. Lebih berat dari aluminium (2,70) tapi lebih ringan dari besi (7,87).",
    icon: "Scale",
    span: "col-span-1",
  },
  {
    title: "Kilap & Warna",
    value: "Keperakan",
    detail:
      "Memiliki kilap metalik yang khas dan warna keperakan yang berubah menjadi kebiruan saat teroksidasi.",
    icon: "Sun",
    span: "col-span-1",
  },
  {
    title: "Struktur Kristal",
    value: "Ortorombus",
    detail:
      "Galium memiliki struktur kristal ortorombus dengan 8 atom per sel satuan. Ini adalah struktur yang tidak biasa untuk logam.",
    icon: "Diamond",
    span: "col-span-2",
  },
];

export const chemicalProperties = [
  {
    title: "Konduktivitas",
    value: "Konduktor saat cair",
    detail:
      "Galium cair dapat menghantarkan listrik dengan baik, menjadikannya berguna untuk aplikasi elektronik cair.",
    icon: "Zap",
  },
  {
    title: "Reaktivitas",
    value: "Reaktif dengan asam & basa",
    detail:
      "Larut dalam asam encer dan basa. Membentuk oksida pelindung (Ga₂O₃) yang mencegah korosi lebih lanjut.",
    icon: "FlaskConical",
  },
  {
    title: "Sifat Unik",
    value: "Mengembang saat membeku",
    detail:
      "Seperti air, galium mengembang sekitar 3,2% saat membeku. Ini adalah sifat yang sangat langka di antara logam.",
    icon: "Snowflake",
  },
];

export const applications = [
  {
    category: "Semikonduktor",
    icon: "Cpu",
    items: [
      {
        name: "Gallium Arsenide (GaAs)",
        description:
          "Senyawa semikonduktor III-V dengan celah pita langsung 1,42 eV pada suhu kamar. Sangat penting untuk sirkuit frekuensi tinggi, sel surya, dan LED.",
        use: "Chip frekuensi tinggi, sel surya efisiensi tinggi, LED inframerah",
      },
      {
        name: "Gallium Nitride (GaN)",
        description:
          "Semikonduktor celah pita lebar (3,4 eV) yang tahan suhu tinggi. Mampu menghantarkan tegangan lebih tinggi dan mengalirkan arus lebih besar.",
        use: "LED biru & putih, laser biru, transistor daya tinggi",
      },
      {
        name: "Gallium Fosfida (GaP)",
        description:
          "Semikonduktor celah pita tak langsung (2,26 eV) yang digunakan untuk LED merah, kuning, dan hijau.",
        use: "LED warna-warni, diode laser",
      },
    ],
  },
  {
    category: "Optoelektronik",
    icon: "Lightbulb",
    items: [
      {
        name: "Galinstan",
        description:
          "Paduan cair dari galium, indium, dan timah yang cair pada suhu −19°C. Digunakan dalam termometer, sensor tekanan, dan stempel untuk litografi mikro.",
        use: "Termometer merkuri, sensor tekanan, stempel litografi",
      },
      {
        name: "Cermin Teleskop",
        description:
          "Lapisan galium oksida (Ga₂O₃) digunakan untuk membuat cermin teleskop yang sangat reflektif dan tahan lama.",
        use: "Cermin observatorium, optik presisi",
      },
    ],
  },
  {
    category: "Medis & Farmasi",
    icon: "Stethoscope",
    items: [
      {
        name: "Radiofarmaka",
        description:
          "Galium-67 digunakan sebagai agen diagnostik dalam kedokteran nuklir untuk pencitraan tumor, abses, dan proses inflamasi.",
        use: "Pencitraan medis (SPECT), diagnostik kanker",
      },
      {
        name: "Galium Nitrat",
        description:
          "Digunakan dalam pengobatan hiperkalsemia (kadar kalsium tinggi dalam darah) yang disebabkan oleh kanker.",
        use: "Pengobatan hiperkalsemia",
      },
    ],
  },
  {
    category: "Paduan & Lainnya",
    icon: "Wrench",
    items: [
      {
        name: "Paduan Nuklir",
        description:
          "Galium ditambahkan ke paduan plutonium untuk mencegah perubahan fase α → δ yang akan mengubah volume secara drastis.",
        use: "Stabilisator plutonium di senjata nuklir",
      },
      {
        name: "Magnet Superkonduktor",
        description:
          "Nb₃Ga dan V₃Ga adalah superkonduktor penting yang digunakan untuk membuat magnet superkonduktor kuat.",
        use: "Magnet MRI, akselerator partikel",
      },
    ],
  },
];

export const history = [
  {
    year: 1871,
    title: "Prediksi Mendeleev",
    description:
      'Dmitri Mendeleev memprediksi keberadaan unsur yang belum ditemukan yang ia sebut "eka-aluminium" berdasarkan tabel periodiknya. Ia memperkirakan sifat-sifatnya dengan sangat akurat.',
    type: "prediction",
  },
  {
    year: 1875,
    title: "Penemuan oleh Lecoq de Boisbaudran",
    description:
      'Paul Emile Lecoq de Boisbaudran menemukan galium melalui spektroskopi pada bijih seng dari Pyrenees. Unsur baru ini cocok dengan prediksi Mendeleev untuk "eka-aluminium".',
    type: "discovery",
  },
  {
    year: 1875,
    title: 'Nama "Gallium"',
    description:
      'Lecoq menamai unsur ini "Gallia" (Latin untuk Prancis). Ada spekulasi bahwa nama ini juga merupakan permainan kata dari "le coq" (ayam jantan dalam bahasa Prancis), merujuk pada nama belakang penemunya.',
    type: "naming",
  },
];

export const abundanceAndProduction = {
  kelimpahan: {
    title: "Kelimpahan di Bumi",
    content:
      "Galium tidak ditemukan sebagai unsur bebas di alam, tetapi tersebar luas dalam jumlah kecil. Diperkirakan memiliki kelimpahan 19 ppm (mg/kg) di kerak bumi, menjadikannya unsur ke-34 paling berlimpah. Ditemukan dalam bijih aluminium, seng, dan batu bara. Di laut, konsentrasinya sangat rendah, sekitar 30 ppt.",
  },
  produksi: {
    title: "Proses Produksi",
    content:
      "Galium diproduksi sebagai produk sampingan dari pengolahan bijih bauksit (aluminium). Proses utama melibatkan: (1) Pemisahan dari larutan Bayer menggunakan presipitasi kimia, (2) Ekstraksi pelarut dan penukar ion, (3) Pemurnian elektrolisis. Galium juga dapat diekstraksi dari limbah pembakaran batu bara (fly ash).",
  },
  reaksi: {
    title: "Reaksi Kimia Utama",
    reactions: [
      {
        equation: "2Ga + 3Cl₂ → 2GaCl₃",
        description: "Galium bereaksi dengan klorin membentuk galium klorida",
      },
      {
        equation: "4Ga + 3O₂ → 2Ga₂O₃",
        description: "Pembentukan galium oksida (Ga₂O₃) pada suhu tinggi",
      },
      {
        equation: "2Ga + 6HCl → 2GaCl₃ + 3H₂↑",
        description: "Galium larut dalam asam klorida encer",
      },
      {
        equation: "2Ga + 2NaOH + 6H₂O → 2Na[Ga(OH)₄] + 3H₂↑",
        description: "Galium bersifat amfoterik, larut dalam basa",
      },
      {
        equation: "Ga₂O₃ + 6HF → 2GaF₃ + 3H₂O",
        description: "Galium oksida bereaksi dengan asam fluorida",
      },
    ],
  },
  galinstan: {
    title: "Galinstan",
    content:
      "Galinstan adalah paduan eutektik dari galium (68,5%), indium (21,5%), dan timah (10%) yang memiliki titik leleh −19°C. Digunakan sebagai pengganti merkuri yang lebih aman dalam termometer, manometer, dan switch elektrik. Tidak beracun dan ramah lingkungan.",
  },
};

export const mediaReferences = [
  {
    type: "image",
    source: "Wikipedia",
    title: "Galium dalam wujud padat",
    description: "Sampel galium murni dengan permukaan segar",
    url: "https://id.wikipedia.org/wiki/Galium#/media/Berkas:Galium_crystals.jpg",
  },
  {
    type: "image",
    source: "Wikipedia",
    title: "Galium meleleh",
    description: "Galium yang mulai meleleh pada suhu kamar",
    url: "https://id.wikipedia.org/wiki/Galium#/media/Berkas:Galium_crystals_melt.jpg",
  },
  {
    type: "image",
    source: "Wikipedia",
    title: "Spektrum emisi Galium",
    description: "Spektrum garis emisi galium",
    url: "https://id.wikipedia.org/wiki/Galium#/media/Berkas:Galium_spectrum_visible.png",
  },
  {
    type: "video",
    source: "YouTube",
    title: "Gallium vs. Aluminium",
    description: "Eksperimen reaksi galium dengan aluminium",
    url: "https://www.youtube.com/embed/Lrz5g0XNFGw",
  },
  {
    type: "video",
    source: "YouTube",
    title: "Sifat Unik Galium",
    description: "Demonstrasi sifat unik galium",
    url: "https://www.youtube.com/embed/LI2p6lFj0QI",
  },
  {
    type: "video",
    source: "YouTube",
    title: "Galium Logam Cair",
    description: "Video demonstrasi galium mencair",
    url: "https://www.youtube.com/embed/dsx22_gBOrs",
  },
  {
    type: "video",
    source: "YouTube",
    title: "Pembuatan Galinstan",
    description: "Proses pembuatan paduan galinstan",
    url: "https://www.youtube.com/embed/-sS9plYRwkE",
  },
  {
    type: "video",
    source: "YouTube",
    title: "Galium Eksperimen",
    description: "Berbagai eksperimen menarik dengan galium",
    url: "https://www.youtube.com/embed/0S86gMQIjBQ",
  },
  {
    type: "video",
    source: "YouTube",
    title: "Fakta Menarik Galium",
    description: "Fakta-fakta menarik tentang unsur galium",
    url: "https://www.youtube.com/embed/3rwcFMeRfFM",
  },
];

export const references = [
  "Chang, R. & Goldsby, K.A. (2013). Chemistry (11th ed.). McGraw-Hill.",
  "Emsley, J. (2001). Nature's Building Blocks: An A-Z Guide to the Elements. Oxford University Press.",
  "Greenwood, N.N. & Earnshaw, A. (1997). Chemistry of the Elements (2nd ed.). Butterworth-Heinemann.",
  "IUPAC (2016). Pure and Applied Chemistry, 88(12), 1225–1229.",
  "Moskalyk, R.R. (2003). Gallium: the backbone of the electronics industry. Minerals Engineering, 16(10), 921–929.",
  "Schubert, K. (1963). Kristallstrukturen zweikomponentiger Phasen. Springer-Verlag.",
  "Snoeks, T. (2012). Gallium. In: Encyclopedia of Applied Electrochemistry. Springer.",
  "USGS (2024). Mineral Commodity Summaries: Gallium.",
  "Wikipedia. (2025, 28 April). Galium. https://id.wikipedia.org/wiki/Galium",
  "Weller, M. et al. (2010). Inorganic Chemistry (6th ed.). Pearson.",
];