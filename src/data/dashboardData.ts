// ════════════════════════════════════════════════════════
// PROVINSI DATA
// ════════════════════════════════════════════════════════
export interface Provinsi {
  n: string;
  s: 'kritis' | 'siaga' | 'normal';
  pop: string;
  gini: number;
}

export const PROVINSI: Provinsi[] = [
  { n: 'Aceh', s: 'normal', pop: '5.3M', gini: 0.31 },
  { n: 'Sumatera Utara', s: 'siaga', pop: '14.5M', gini: 0.34 },
  { n: 'Sumatera Barat', s: 'normal', pop: '5.5M', gini: 0.30 },
  { n: 'Riau', s: 'siaga', pop: '6.8M', gini: 0.36 },
  { n: 'Kepulauan Riau', s: 'normal', pop: '2.1M', gini: 0.33 },
  { n: 'Jambi', s: 'normal', pop: '3.6M', gini: 0.32 },
  { n: 'Kepulauan Bangka Belitung', s: 'normal', pop: '1.5M', gini: 0.29 },
  { n: 'Sumatera Selatan', s: 'siaga', pop: '8.7M', gini: 0.35 },
  { n: 'Bengkulu', s: 'normal', pop: '2.0M', gini: 0.30 },
  { n: 'Lampung', s: 'siaga', pop: '9.2M', gini: 0.34 },
  { n: 'Banten', s: 'siaga', pop: '13.1M', gini: 0.38 },
  { n: 'DKI Jakarta', s: 'kritis', pop: '10.6M', gini: 0.41 },
  { n: 'Jawa Barat', s: 'kritis', pop: '49.3M', gini: 0.40 },
  { n: 'Jawa Tengah', s: 'siaga', pop: '37.0M', gini: 0.36 },
  { n: 'Daerah Istimewa Yogyakarta', s: 'normal', pop: '3.8M', gini: 0.42 },
  { n: 'Jawa Timur', s: 'kritis', pop: '40.5M', gini: 0.37 },
  { n: 'Kalimantan Barat', s: 'normal', pop: '5.5M', gini: 0.33 },
  { n: 'Kalimantan Tengah', s: 'normal', pop: '2.7M', gini: 0.31 },
  { n: 'Kalimantan Selatan', s: 'siaga', pop: '4.3M', gini: 0.35 },
  { n: 'Kalimantan Timur', s: 'normal', pop: '3.8M', gini: 0.34 },
  { n: 'Kalimantan Utara', s: 'normal', pop: '0.7M', gini: 0.31 },
  { n: 'Sulawesi Utara', s: 'normal', pop: '2.6M', gini: 0.36 },
  { n: 'Gorontalo', s: 'normal', pop: '1.2M', gini: 0.33 },
  { n: 'Sulawesi Tengah', s: 'kritis', pop: '3.1M', gini: 0.34 },
  { n: 'Sulawesi Barat', s: 'siaga', pop: '1.4M', gini: 0.36 },
  { n: 'Sulawesi Selatan', s: 'siaga', pop: '9.1M', gini: 0.38 },
  { n: 'Sulawesi Tenggara', s: 'normal', pop: '2.7M', gini: 0.35 },
  { n: 'Maluku Utara', s: 'normal', pop: '1.3M', gini: 0.32 },
  { n: 'Maluku', s: 'normal', pop: '1.9M', gini: 0.31 },
  { n: 'Bali', s: 'normal', pop: '4.3M', gini: 0.38 },
  { n: 'Nusa Tenggara Barat', s: 'siaga', pop: '5.4M', gini: 0.37 },
  { n: 'Nusa Tenggara Timur', s: 'siaga', pop: '5.8M', gini: 0.36 },
  { n: 'Papua', s: 'siaga', pop: '4.4M', gini: 0.40 },
  { n: 'Papua Barat', s: 'normal', pop: '1.1M', gini: 0.33 },
  { n: 'Papua Tengah', s: 'siaga', pop: '1.4M', gini: 0.38 },
  { n: 'Papua Selatan', s: 'normal', pop: '0.5M', gini: 0.36 },
  { n: 'Papua Pegunungan', s: 'siaga', pop: '1.4M', gini: 0.39 },
  { n: 'Papua Barat Daya', s: 'normal', pop: '0.6M', gini: 0.33 },
];


export interface ProvDetail {
  score: number;
  alasan: string[];
}

export const PROV_DETAILS: Record<string, ProvDetail> = {
  'DKI Jakarta': { 
    score: 78, 
    alasan: [
      'Inflasi 5.2% — tertinggi nasional',
      'Sentimen negatif APH 42%',
      'Kenaikan harga sembako +3 komoditas melampaui HET',
      'Rawan unjuk rasa buruh dan pelajar'
    ]
  },
  'Jawa Timur': { 
    score: 81, 
    alasan: [
      'Indeks kerawanan tertinggi nasional',
      'Konflik sosial aktif 3 lokasi',
      'Angka PHK meningkat +2.400 (Q4)',
      'Unjuk rasa massa terdeteksi 248 post/jam'
    ]
  },
  'Jawa Barat': { 
    score: 66, 
    alasan: [
      'Kepadatan penduduk tertinggi',
      'Mobilisasi massa sosmed meningkat',
      'Bawang merah dan cabai melampaui HET',
      'Tingkat kemiskinan 9.8%'
    ]
  },
  'Sulawesi Tengah': { 
    score: 71, 
    alasan: [
      'Peringatan cuaca ekstrem aktif BMKG',
      'Histori konflik sosial tinggi',
      'Akses logistik terbatas',
      'Potensi bencana hidrometeorologi 78%'
    ]
  },
  'Jawa Tengah': { 
    score: 55, 
    alasan: [
      'Inflasi 3.8% — terkendali',
      'TPT 5.4% — moderat',
      'Beberapa kenaikan harga pangan lokal'
    ]
  },
};

// ════════════════════════════════════════════════════════
// TREN DATA
// ════════════════════════════════════════════════════════
export const TREN_DATA: Record<string, number[]> = {
  nasional: [42, 58, 51, 69, 75, 61, 73],
  'dki jakarta': [52, 65, 60, 78, 82, 71, 79],
  'jawa timur': [55, 70, 64, 81, 85, 75, 84],
  'jawa barat': [38, 52, 47, 60, 65, 55, 62],
  'sulawesi tengah': [45, 58, 52, 70, 73, 62, 70],
  'sulawesi selatan': [30, 40, 36, 50, 54, 45, 52],
};

export const TREN_LABELS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

// ════════════════════════════════════════════════════════
// KOMODITAS DATA
// ════════════════════════════════════════════════════════
export interface KomoditasItem {
  k: string;
  h: number;
  het: number;
  delta: number;
}

export const KOMODITAS_DATA: Record<string, KomoditasItem[]> = {
  nasional: [
    { k: '🌶 Cabai Merah', h: 68000, het: 48000, delta: 8 },
    { k: '🧅 Bawang Merah', h: 42500, het: 36000, delta: 5 },
    { k: '🧄 Bawang Putih', h: 38000, het: 32000, delta: 3 },
    { k: '🍚 Beras Premium', h: 16500, het: 14000, delta: 2 },
    { k: '🥚 Telur Ayam', h: 31000, het: 28000, delta: 4 },
    { k: '🐟 Ikan Bandeng', h: 28000, het: 30000, delta: -1 },
    { k: '🫙 Minyak Goreng', h: 16000, het: 17500, delta: 0 },
    { k: '🍬 Gula Pasir', h: 18500, het: 17000, delta: 2 },
  ],
  dki: [
    { k: '🌶 Cabai Merah', h: 72000, het: 48000, delta: 12 },
    { k: '🧅 Bawang Merah', h: 45000, het: 36000, delta: 7 },
    { k: '🍚 Beras Premium', h: 17000, het: 14000, delta: 3 },
    { k: '🥚 Telur Ayam', h: 33000, het: 28000, delta: 6 },
    { k: '🧄 Bawang Putih', h: 40000, het: 32000, delta: 4 },
    { k: '🫙 Minyak Goreng', h: 16500, het: 17500, delta: 1 },
    { k: '🐟 Ikan Bandeng', h: 30000, het: 30000, delta: 0 },
    { k: '🍬 Gula Pasir', h: 19000, het: 17000, delta: 3 },
  ],
  'jawa timur': [
    { k: '🌶 Cabai Merah', h: 65000, het: 48000, delta: 6 },
    { k: '🧅 Bawang Merah', h: 40000, het: 36000, delta: 4 },
    { k: '🍚 Beras Premium', h: 15800, het: 14000, delta: 1 },
    { k: '🥚 Telur Ayam', h: 29500, het: 28000, delta: 2 },
    { k: '🧄 Bawang Putih', h: 36000, het: 32000, delta: 2 },
    { k: '🐟 Ikan Bandeng', h: 27000, het: 30000, delta: -2 },
    { k: '🫙 Minyak Goreng', h: 15800, het: 17500, delta: -1 },
    { k: '🍬 Gula Pasir', h: 17800, het: 17000, delta: 1 },
  ],
};

// Fill missing provinces with nasional data
['jawa barat', 'sulawesi tengah', 'sulawesi selatan', 'sumatera utara'].forEach(k => {
  KOMODITAS_DATA[k] = KOMODITAS_DATA.nasional;
});

// ════════════════════════════════════════════════════════
// REKOMENDASI DATA
// ════════════════════════════════════════════════════════
export const REKOMENDASI_DATA: Record<string, string[]> = {
  nasional: [
    'Koordinasi Satgas Pangan untuk operasi pasar darurat di 5 kota besar.',
    'Tingkatkan patroli preventif di pasar tradisional wilayah kritis.',
    'Monitoring sosmed 24 jam terkait narasi kelangkaan dan provokasi harga.',
    'Laporan harian kepada Kapolri tentang tren komoditas strategis.',
  ],
  dki: [
    'Gelar operasi pasar bersama Pemprov DKI di 5 pasar induk prioritas.',
    'Siagakan Satuan Brimob untuk antisipasi kerusuhan pasar.',
    'Koordinasi dengan Bulog terkait cadangan beras dan sembako DKI.',
  ],
  jatim: [
    'Monitor distribusi pangan di Surabaya, Malang, dan Kediri.',
    'Aktifkan pos pantau harga di 10 pasar tradisional prioritas.',
    'Koordinasi dengan Satgas PHK untuk distribusi bantuan sosial.',
  ],
  sulsel: [
    'Pantau jalur distribusi pangan dari Makassar ke daerah pedalaman.',
    'Tingkatkan patroli pengawasan harga di pasar Makassar.',
  ],
};

// ════════════════════════════════════════════════════════
// PREDIKTIF DATA
// ════════════════════════════════════════════════════════
export interface PrediktifData {
  sosial: string;
  eko: string;
  ben: string;
  sosialOff: number;
  ekoOff: number;
  benOff: number;
  insight: string;
  rekom: string[];
  skenario: {
    lbl: string;
    pct: number;
    w: string;
    color: string;
    tag: string;
    desc: string;
  }[];
}

export const PREDIKTIF_DATA: Record<string, PrediktifData> = {
  nasional: {
    sosial: '78%',
    eko: '64%',
    ben: '53%',
    sosialOff: 69,
    ekoOff: 113,
    benOff: 147,
    insight: 'Sistem mendeteksi potensi krisis sosio-ekonomi nasional yang membutuhkan respons terpadu dalam 72 jam ke depan berdasarkan crosstab data Kamtibmas (73), inflasi (4.8%), dan sentimen negatif (38%).',
    rekom: [
      'OPERASI PASAR: Koordinasi Satgas Pangan darurat di 5 kota besar indeks tertinggi.',
      'DEPLOYMEN PREVENTIF: Satuan Dalmas siaga 12 titik rawan mobilisasi massa.',
      'COUNTER-NARASI: Aktifkan tim medsos Polri untuk counter 12 narasi viral berbahaya.',
      'LIAISON SOSIAL: Koordinasi tokoh masyarakat dan agama di wilayah konflik.',
    ],
    skenario: [
      { lbl: 'Skenario BURUK', pct: 23, w: '23%', color: 'rgba(255,45,85,.6)', tag: 'kritis', desc: 'Eskalasi unras besar, konflik sosial multi-wilayah, inflasi >6%' },
      { lbl: 'Skenario MODERAT', pct: 54, w: '54%', color: 'rgba(255,214,0,.55)', tag: 'siaga', desc: 'Ketegangan terkendali, insiden sporadis, perlu monitor ketat' },
      { lbl: 'Skenario BAIK', pct: 23, w: '23%', color: 'rgba(0,255,157,.5)', tag: 'normal', desc: 'Stabilisasi harga, sentimen membaik, kondisi kondusif' },
    ],
  },
  dki: {
    sosial: '82%',
    eko: '71%',
    ben: '30%',
    sosialOff: 57,
    ekoOff: 91,
    benOff: 220,
    insight: 'DKI Jakarta dalam kondisi kritis — inflasi 5.2%, sentimen negatif 42%, dan 4 komoditas melampaui HET. Potensi aksi massa di pusat kota tinggi.',
    rekom: [
      'Siagakan Dalmas di 5 titik rawan keramaian Jakarta.',
      'Koordinasi Pemrov DKI untuk operasi pasar darurat di pasar induk.',
      'Monitoring akun-akun provokator yang aktif di platform Twitter/X.',
    ],
    skenario: [
      { lbl: 'Skenario BURUK', pct: 32, w: '32%', color: 'rgba(255,45,85,.6)', tag: 'kritis', desc: 'Aksi massa besar di pusat kota, eskalasi kriminalitas' },
      { lbl: 'Skenario MODERAT', pct: 52, w: '52%', color: 'rgba(255,214,0,.55)', tag: 'siaga', desc: 'Demonstrasi terkontrol, situasi masih dapat dikendalikan' },
      { lbl: 'Skenario BAIK', pct: 16, w: '16%', color: 'rgba(0,255,157,.5)', tag: 'normal', desc: 'Kondisi kondusif dengan intervensi cepat' },
    ],
  },
};

['jawa timur', 'jawa barat', 'sulawesi tengah', 'sulawesi selatan', 'sumatera utara'].forEach(k => {
  PREDIKTIF_DATA[k] = PREDIKTIF_DATA.nasional;
});

// ════════════════════════════════════════════════════════
// BENCANA DATA
// ════════════════════════════════════════════════════════
export interface BencanaItem {
  e: string;
  n: number;
  pct: number;
  c: string;
}

export const BENCANA_HISTORI: Record<string, BencanaItem[]> = {
  nasional: [
    { e: '🌊 Banjir', n: 421, pct: 85, c: 'rgba(10,132,255,.55)' },
    { e: '🌋 Tanah Longsor', n: 312, pct: 65, c: 'rgba(255,107,0,.55)' },
    { e: '🌪 Puting Beliung', n: 248, pct: 50, c: 'rgba(255,214,0,.5)' },
    { e: '🌊 Gelombang Tinggi', n: 167, pct: 35, c: 'rgba(0,238,255,.4)' },
    { e: '🏔 Gempa Bumi', n: 99, pct: 22, c: 'rgba(255,45,85,.5)' },
  ],
  'jawa timur': [
    { e: '🌊 Banjir', n: 87, pct: 90, c: 'rgba(10,132,255,.55)' },
    { e: '🌪 Puting Beliung', n: 54, pct: 60, c: 'rgba(255,214,0,.5)' },
    { e: '🌋 Tanah Longsor', n: 42, pct: 45, c: 'rgba(255,107,0,.55)' },
  ],
  'sulawesi tengah': [
    { e: '🏔 Gempa Bumi', n: 38, pct: 80, c: 'rgba(255,45,85,.5)' },
    { e: '🌊 Tsunami', n: 12, pct: 25, c: 'rgba(0,238,255,.4)' },
    { e: '🌊 Banjir', n: 28, pct: 60, c: 'rgba(10,132,255,.55)' },
  ],
  'nusa tenggara timur': [
    { e: '🌪 Angin Kencang', n: 62, pct: 75, c: 'rgba(255,214,0,.5)' },
    { e: '🌊 Banjir', n: 35, pct: 45, c: 'rgba(10,132,255,.55)' },
    { e: '🌋 Tanah Longsor', n: 22, pct: 28, c: 'rgba(255,107,0,.55)' },
  ],
  'kalimantan selatan': [
    { e: '🌊 Banjir', n: 74, pct: 95, c: 'rgba(10,132,255,.55)' },
    { e: '🌊 Banjir Rob', n: 28, pct: 35, c: 'rgba(0,238,255,.4)' },
  ],
};

export interface PeringatanItem {
  j: string;
  w: string;
  detail: string;
  s: 'kritis' | 'siaga' | 'normal';
}

export const PERINGATAN_DATA: Record<string, PeringatanItem[]> = {
  all: [
    { j: 'Cuaca Ekstrem', w: 'Sulawesi Tengah', detail: 'Hujan Lebat + Angin Kencang · 18–20 Okt', s: 'kritis' },
    { j: 'Potensi Gempa', w: 'Nusa Tenggara Timur', detail: 'Aktivitas Seismik ≥5.0 SR · Monitoring', s: 'siaga' },
    { j: 'Banjir Rob', w: 'Kalimantan Selatan', detail: 'Pasang Tinggi + Hujan · 72 Jam', s: 'siaga' },
    { j: 'Gelombang Tinggi', w: 'Jawa Timur', detail: 'Tinggi Gelombang 3-4m · 48 Jam', s: 'siaga' },
  ],
  'sulawesi tengah': [
    { j: 'Cuaca Ekstrem', w: 'Sulawesi Tengah', detail: 'Hujan Lebat + Angin Kencang · 18-20 Okt', s: 'kritis' },
  ],
  'nusa tenggara timur': [
    { j: 'Potensi Gempa', w: 'Nusa Tenggara Timur', detail: 'Aktivitas Seismik ≥5.0 SR · Monitoring', s: 'siaga' },
  ],
  'kalimantan selatan': [
    { j: 'Banjir Rob', w: 'Kalimantan Selatan', detail: 'Pasang Tinggi + Hujan · 72 Jam', s: 'siaga' },
  ],
  'jawa timur': [
    { j: 'Gelombang Tinggi', w: 'Jawa Timur', detail: 'Tinggi Gelombang 3-4m · 48 Jam', s: 'siaga' },
  ],
};

export interface PredBencana {
  pct: number;
  txt: string;
  aksi: string[];
}

export const PRED_BENCANA: Record<string, PredBencana> = {
  'sulawesi tengah': {
    pct: 78,
    txt: 'Probabilitas bencana hidrometeorologi 78% dalam 7 hari. Rekomendasi: Aktifkan Satgas Evakuasi, siagakan logistik bantuan, koordinasi Pemda. Titik rawan: Palu, Donggala, Morowali.',
    aksi: [
      'Pra-posisi tim SAR di 3 titik strategis.',
      'Evakuasi mandiri wilayah pesisir rawan.',
      'Koordinasi BNPB for dropping logistik.',
    ],
  },
  'nusa tenggara timur': {
    pct: 55,
    txt: 'Probabilitas gempa >M5 dan angin kencang 55%. Rekomendasi: Edukasi masyarakat prosedur evakuasi, cek kesiapan sarana evakuasi.',
    aksi: [
      'Sosialisasi jalur evakuasi gempa.',
      'Inspeksi bangunan publik rawan gempa.',
    ],
  },
  'kalimantan selatan': {
    pct: 68,
    txt: 'Probabilitas banjir besar 68% akibat kombinasi hujan tinggi dan banjir rob. Rekomendasikan kesiapan pengungsian.',
    aksi: [
      'Siapkan titik pengungsian di dataran tinggi.',
      'Koordinasi BPBD for pompa air darurat.',
    ],
  },
  'jawa timur': {
    pct: 42,
    txt: 'Probabilitas gelombang tinggi 42% berpotensi ganggu nelayan dan jalur pelayaran.',
    aksi: [
      'Larangan melaut kapal kecil 24-48 jam.',
      'Koordinasi Basarnas for standby rescue.',
    ],
  },
  'dki jakarta': {
    pct: 25,
    txt: 'Risiko bencana alam DKI relatif rendah. Perhatikan potensi banjir kiriman dari Bogor.',
    aksi: [
      'Monitor debit Sungai Ciliwung.',
      'Siapkan pompa banjir di titik rawan.',
    ],
  },
};

// ════════════════════════════════════════════════════════
// ISU DATA
// ════════════════════════════════════════════════════════
export interface IsuData {
  high: string[];
  med: string[];
  low: string[];
}

export const ISU_DATA: Record<string, IsuData> = {
  nasional: {
    high: ['#KenaikanHarga', '#BuruhPHK', '#TolakCabaiMahal', '#DemoSurabaya'],
    med: ['#OpsiBantuan', '#KorupsiDaerah', '#PilkadaJatim', '#SentimensiPolri'],
    low: ['#CuacaEkstrem', '#BantuanSosial', '#Pariwisata'],
  },
  'dki jakarta': {
    high: ['#BuruhMarchDKI', '#HargaBahanPokok', '#OperasiPasarDarurat'],
    med: ['#TransjakartaMacet', '#PemrovDKI'],
    low: ['#EventJakarta', '#WisataDKI'],
  },
  'jawa timur': {
    high: ['#DemoSurabaya', '#BuruhPHKJatim', '#Cabai68Ribu'],
    med: ['#PilwaliSurabaya', '#NarkobaJatim'],
    low: ['#EkonomiJatim', '#WisataJatim'],
  },
  'sulawesi tengah': {
    high: ['#GempaSulteng', '#PaluBanjir', '#EvakuasiPalu'],
    med: ['#RekonstrSulteng', '#BantuanBencana'],
    low: ['#WisataSulteng'],
  },
};

// ════════════════════════════════════════════════════════
// KAMTIBMAS DIMENSION DATA
// ════════════════════════════════════════════════════════
export interface KamDimItem {
  n: string;
  v: number;
  c: string;
}

export const KAM_DIM_DATA: Record<string, KamDimItem[]> = {
  nasional: [
    { n: 'Kriminalitas', v: 73, c: 'rgba(255,45,85,.7)' },
    { n: 'Konflik Sosial', v: 81, c: 'rgba(255,45,85,.8)' },
    { n: 'Radikalisme', v: 34, c: 'rgba(0,255,157,.6)' },
    { n: 'Narkotika', v: 58, c: 'rgba(255,214,0,.65)' },
    { n: 'Kejahatan Siber', v: 67, c: 'rgba(255,107,0,.65)' },
  ],
  'jawa timur': [
    { n: 'Kriminalitas', v: 79, c: 'rgba(255,45,85,.7)' },
    { n: 'Konflik Sosial', v: 85, c: 'rgba(255,45,85,.85)' },
    { n: 'Radikalisme', v: 40, c: 'rgba(255,214,0,.6)' },
    { n: 'Narkotika', v: 65, c: 'rgba(255,214,0,.65)' },
    { n: 'Kejahatan Siber', v: 55, c: 'rgba(255,107,0,.6)' },
  ],
  'dki jakarta': [
    { n: 'Kriminalitas', v: 76, c: 'rgba(255,45,85,.7)' },
    { n: 'Konflik Sosial', v: 82, c: 'rgba(255,45,85,.8)' },
    { n: 'Radikalisme', v: 30, c: 'rgba(0,255,157,.55)' },
    { n: 'Narkotika', v: 70, c: 'rgba(255,107,0,.7)' },
    { n: 'Kejahatan Siber', v: 75, c: 'rgba(255,45,85,.6)' },
  ],
  'sulawesi tengah': [
    { n: 'Kriminalitas', v: 68, c: 'rgba(255,214,0,.65)' },
    { n: 'Konflik Sosial', v: 74, c: 'rgba(255,45,85,.7)' },
    { n: 'Radikalisme', v: 45, c: 'rgba(255,214,0,.55)' },
    { n: 'Narkotika', v: 42, c: 'rgba(0,238,255,.5)' },
    { n: 'Kejahatan Siber', v: 38, c: 'rgba(0,255,157,.5)' },
  ],
  'jawa barat': [
    { n: 'Kriminalitas', v: 65, c: 'rgba(255,214,0,.65)' },
    { n: 'Konflik Sosial', v: 70, c: 'rgba(255,45,85,.65)' },
    { n: 'Radikalisme', v: 38, c: 'rgba(0,255,157,.55)' },
    { n: 'Narkotika', v: 60, c: 'rgba(255,214,0,.6)' },
    { n: 'Kejahatan Siber', v: 62, c: 'rgba(255,107,0,.6)' },
  ],
};

// ════════════════════════════════════════════════════════
// KERENTANAN DATA
// ════════════════════════════════════════════════════════
export interface KerentananItem {
  prov: string;
  skor: number;
  status: 'kritis' | 'waspada' | 'siaga';
  alasan: string;
}

export const KERENTANAN_DATA: KerentananItem[] = [
  { prov: 'Sulawesi Tengah', skor: 82, status: 'kritis', alasan: 'Aktivitas seismik tinggi, akses terbatas, histori tsunami' },
  { prov: 'Nusa Tenggara Timur', skor: 78, status: 'kritis', alasan: 'Rawan angin kencang, kemiskinan tinggi, minim infrastruktur' },
  { prov: 'Kalimantan Selatan', skor: 74, status: 'waspada', alasan: 'Rawan banjir musiman, tutupan lahan berkurang' },
  { prov: 'Jawa Timur', skor: 68, status: 'waspada', alasan: 'Kepadatan penduduk, rawan banjir dan longsor' },
  { prov: 'Papua', skor: 65, status: 'siaga', alasan: 'Akses terbatas, rawan longsor dan banjir bandang' },
  { prov: 'Nusa Tenggara Barat', skor: 61, status: 'siaga', alasan: 'Rawan gempa dan tsunami wilayah pesisir' },
];

// ════════════════════════════════════════════════════════
// INCIDENT DATA
// ════════════════════════════════════════════════════════
export interface Incident {
  title: string;
  meta: string;
  color: string;
}

export const INCIDENTS: Incident[] = [
  { title: 'Unjuk Rasa — Surabaya Barat', meta: '📍 Jawa Timur · 08:43 · Massa ~350', color: 'var(--cr)' },
  { title: 'Lonjakan Harga Sembako — Pasar Senen', meta: '📍 DKI Jakarta · 07:15 · 1 Jam Lalu', color: 'var(--cy)' },
  { title: 'Potensi Konflik Sosial — Perumahan Warga', meta: '📍 Bandung · 06:50 · 2 Jam Lalu', color: 'var(--cr)' },
  { title: 'Kelangkaan Elpiji 3kg', meta: '📍 NTT · 06:20 · 3 Jam Lalu', color: 'var(--co)' },
  { title: 'Lonjakan Cuitan Negatif Sosmed', meta: '📍 Makassar · 05:00 · 4 Jam Lalu', color: 'var(--cy)' },
  { title: 'Sengketa Lahan — IKN Area', meta: '📍 Kalimantan Timur · 04:30 · Klaim Ulayat', color: 'var(--co)' },
  { title: 'Pencemaran Limbah Industri — Morowali', meta: '📍 Sulawesi Tengah · 03:15 · Protes Warga', color: 'var(--cr)' },
  { title: 'Ketegangan Ormas — Medan Kota', meta: '📍 Sumatera Utara · 02:45 · Personil Siaga', color: 'var(--co)' },
  { title: 'Kenaikan Harga Beras — Pasar Gede', meta: '📍 Jawa Tengah · 02:10 · Stok Menipis', color: 'var(--cy)' },
  { title: 'Provokasi Isu SARA — Sosmed', meta: '📍 Papua · 01:50 · Counter-Narasi Aktif', color: 'var(--cr)' },
  { title: 'Banjir Rob — Pesisir Belawan', meta: '📍 Sumatera Utara · 01:20 · Akses Terputus', color: 'var(--co)' },
  { title: 'Laporan Pungli Parkir — Titik Nol', meta: '📍 Yogyakarta · 00:45 · Tindak Lanjut APH', color: 'var(--cy)' },
  { title: 'Penemuan Paket Mencurigakan', meta: '📍 Batam · Kemarin · Sterilisasi Selesai', color: 'var(--cg)' },
  { title: 'Konflik Nelayan — Perairan Natuna', meta: '📍 Kepri · Kemarin · Patroli Bakamla', color: 'var(--co)' },
  { title: 'Aksi Solidaritas — Manado', meta: '📍 Sulawesi Utara · Kemarin · Kondusif', color: 'var(--cg)' },
];

// ════════════════════════════════════════════════════════
// TICKER MESSAGES
// ════════════════════════════════════════════════════════
export const TICKERS = [
  'Inflasi DKI Jakarta melampaui threshold 5.2% · Tindakan segera diperlukan',
  'Sentimen negatif APH naik 18% di Jawa Timur · Monitoring aktif',
  'Cabai melampaui HET di 7 Provinsi · Risiko protes pasar',
  'Cuaca ekstrem Sulawesi Tengah aktif · Siaga bencana',
  'Unjuk rasa buruh terdeteksi Cikarang · Estimasi 500+ orang',
  'Hoaks kelangkaan BBM viral Twitter/X · Perlu counter-narasi',
  'Gempa M4.8 Ternate · Tidak berpotensi tsunami',
  'Indeks kerawanan Jatim naik ke 81 · Tertinggi 6 bulan',
];

// ════════════════════════════════════════════════════════
// KOMODITAS TREND DATA
// ════════════════════════════════════════════════════════
export const KOMODITAS_TREND: Record<string, number[]> = {
  beras: [12500, 13000, 14200, 15000, 15800, 16200, 16500],
  cabai: [42000, 48000, 54000, 58000, 62000, 65000, 68000],
  bawang: [30000, 33000, 35000, 37000, 39000, 41000, 42500],
  telur: [26000, 27500, 28000, 28500, 29000, 30000, 31000],
};

// ════════════════════════════════════════════════════════
// ALERT KOMODITAS DATA
// ════════════════════════════════════════════════════════
export const ALERT_KOM_DATA = [
  [1, 1, 2, 3, 4, 4, 5],
  [2, 2, 3, 4, 5, 5, 6],
  [0, 1, 1, 2, 3, 2, 3],
];

// ════════════════════════════════════════════════════════
// SNA NODES DATA
// ════════════════════════════════════════════════════════
export interface SnaNode {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  lbl: string;
  role: string;
}

export const SNA_NODES: SnaNode[] = [
  { id: 0, x: 200, y: 100, r: 22, color: 'rgba(255,45,85,.7)', lbl: '@AktivisX', role: 'Pemicu Utama' },
  { id: 1, x: 100, y: 60, r: 14, color: 'rgba(255,107,0,.7)', lbl: '@Buzzer01', role: 'Amplifier' },
  { id: 2, x: 300, y: 70, r: 14, color: 'rgba(255,107,0,.7)', lbl: '@Buzzer02', role: 'Amplifier' },
  { id: 3, x: 60, y: 140, r: 10, color: 'rgba(0,238,255,.6)', lbl: '@Media01', role: 'Media' },
  { id: 4, x: 340, y: 140, r: 10, color: 'rgba(0,238,255,.6)', lbl: '@Media02', role: 'Media' },
  { id: 5, x: 150, y: 170, r: 8, color: 'rgba(255,214,0,.6)', lbl: '@User01', role: 'Penyebar' },
  { id: 6, x: 250, y: 170, r: 8, color: 'rgba(255,214,0,.6)', lbl: '@User02', role: 'Penyebar' },
  { id: 7, x: 100, y: 180, r: 7, color: 'rgba(255,214,0,.5)', lbl: '@User03', role: 'Penyebar' },
];

export const SNA_EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 4], [0, 5], [0, 6], [1, 7], [5, 6]
];

// ════════════════════════════════════════════════════════
// EMOTION DATA
// ════════════════════════════════════════════════════════
export const EMOTION_DATA = [
  { icon: '😠', label: 'MARAH', pct: 28, color: 'var(--cr)' },
  { icon: '😨', label: 'TAKUT', pct: 15, color: 'var(--co)' },
  { icon: '😊', label: 'SENANG', pct: 22, color: 'var(--cg)' },
  { icon: '😔', label: 'SEDIH', pct: 12, color: 'var(--cb)' },
  { icon: '😲', label: 'TERKEJUT', pct: 8, color: 'var(--cy)' },
  { icon: '😐', label: 'NETRAL', pct: 15, color: 'var(--ts)' },
];

// ════════════════════════════════════════════════════════
// RISK METER DATA
// ════════════════════════════════════════════════════════
export const RISK_METER_DATA = [
  { n: 'Jawa Timur', v: 81, c: 'rgba(255,45,85,.7)' },
  { n: 'DKI Jakarta', v: 78, c: 'rgba(255,45,85,.65)' },
  { n: 'Sulawesi Tengah', v: 71, c: 'rgba(255,107,0,.65)' },
  { n: 'Jawa Barat', v: 66, c: 'rgba(255,214,0,.65)' },
  { n: 'Sulawesi Selatan', v: 58, c: 'rgba(255,214,0,.55)' },
];

// ════════════════════════════════════════════════════════
// NARASI VIRAL DATA
// ════════════════════════════════════════════════════════
export const NARASI_VIRAL = [
  { title: 'Ajakan Unjuk Rasa Serentak', meta: '12.4K Share · 4.2K Komentar · Viral 6 Jam', color: 'var(--cr)' },
  { title: 'Narasi Anti-APH di Twitter/X', meta: '8.7K Share · 2.1K Reply · Tren Naik', color: 'var(--co)' },
  { title: 'Hoaks Distribusi Sembako', meta: '3.2K Share · Perlu Klarifikasi', color: 'var(--cy)' },
];
