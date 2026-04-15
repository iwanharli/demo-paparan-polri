import { useState, useEffect } from 'react';
import { TrendingUp, AlertTriangle, Activity, MapPin, MessageSquare } from 'lucide-react';
import { IndonesiaMap } from '../components/IndonesiaMap';
import { 
  PROVINSI, 
  PROV_DETAILS, 
  TREN_DATA, 
  TREN_LABELS,
  INCIDENTS,
  TICKERS,
  RISK_METER_DATA
} from '../data/dashboardData';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

interface CommandCenterProps {
  openModal: (title: string, content: React.ReactNode) => void;
}

export function CommandCenter({ openModal }: CommandCenterProps) {
  const [, setSelectedProv] = useState<string | null>(null);
  const [trenProv, setTrenProv] = useState('nasional');
  const [tickerIndex, setTickerIndex] = useState(0);

  // Ticker rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleProvClick = (prov: typeof PROVINSI[0]) => {
    const detail = PROV_DETAILS[prov.n] || { 
      score: Math.floor(Math.random() * 40 + 30), 
      alasan: ['Data dalam proses analisis', 'Kondisi relatif stabil', 'Perlu monitoring lanjutan'] 
    };
    setSelectedProv(prov.n);
    
    openModal(
      `📍 ${prov.n} — STATUS ${prov.s.toUpperCase()}`,
      <div>
        <div className="mb-4">
          <div className="font-orbitron text-2xl font-bold" style={{ 
            color: prov.s === 'kritis' ? 'var(--cr)' : prov.s === 'siaga' ? 'var(--cy)' : 'var(--cg)' 
          }}>
            Skor: {detail.score}
          </div>
          <div className="text-[var(--ts)] text-sm">Populasi: {prov.pop} · Gini: {prov.gini}</div>
        </div>
        <div className="space-y-2">
          {detail.alasan.map((a, i) => (
            <div key={i} className="flex gap-2 items-start p-2 bg-[rgba(0,28,58,0.5)] rounded">
              <span className="text-[var(--c)] font-mono-tech text-xs mt-0.5">›</span>
              <span className="text-[var(--ts)] text-sm">{a}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const openSentimentDetail = () => {
    openModal(
      'DETAIL KEYWORD SENTIMEN PUBLIK',
      <div className="space-y-4">
        <div>
          <div className="font-orbitron text-xs text-[var(--cg)] mb-2">✅ POSITIF (35%) — KEYWORD UTAMA</div>
          <div className="flex flex-wrap gap-2">
            {['#PolriHadir', '#PelayananPublik', '#CepetTanggap', '#AmanBersama'].map(t => (
              <span key={t} className="isu-tag isu-low">{t}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="font-orbitron text-xs text-[var(--c)] mb-2">— NETRAL (27%) — KEYWORD UTAMA</div>
          <div className="flex flex-wrap gap-2">
            {['#Hukum', '#Regulasi', '#Aturan'].map(t => (
              <span key={t} className="isu-tag isu-low">{t}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="font-orbitron text-xs text-[var(--cr)] mb-2">❌ NEGATIF (38%) — KEYWORD UTAMA</div>
          <div className="flex flex-wrap gap-2">
            {['#PolisiKasar', '#TidakAdil', '#AbusePower', '#KorupsiPolri', '#PetugasTidakProfesional'].map(t => (
              <span key={t} className={`isu-tag ${t.includes('Korupsi') || t.includes('Abuse') ? 'isu-high' : 'isu-med'}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const openKamtibmasDetail = () => {
    openModal(
      'Kamtibmas Nasional',
      <div className="space-y-2">
        {[
          { name: 'Jawa Timur', status: 'kritis', score: 81 },
          { name: 'DKI Jakarta', status: 'kritis', score: 78 },
          { name: 'Sulteng', status: 'siaga', score: 71 },
          { name: 'Jawa Barat', status: 'siaga', score: 66 },
          { name: 'Sulawesi Sel', status: 'siaga', score: 58 },
        ].map((item) => (
          <div key={item.name} className="flex items-center justify-between p-2 border-b border-[var(--border2)]">
            <span className="text-[var(--ts)]">{item.name}</span>
            <span className={`px-2 py-0.5 rounded text-xs font-bold ${
              item.status === 'kritis' ? 'tag-kritis' : 'tag-siaga'
            }`}>
              {item.status.toUpperCase()} — {item.score}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // Prepare chart data
  const chartData = TREN_DATA[trenProv]?.map((v, i) => ({
    name: TREN_LABELS[i],
    value: v
  })) || [];

  return (
    <div className="animate-fade-up">
      {/* Ticker */}
      <div className="ticker-ews">
        <span className="ticker-tag">⚠ ALERT</span>
        <span className="font-mono-tech text-[11px] text-[var(--ts)] whitespace-nowrap overflow-hidden text-ellipsis">
          {TICKERS[tickerIndex]}
        </span>
      </div>

      {/* Divider */}
      <div className="divider-ews">
        <span className="divider-text">INDIKATOR KRITIS NASIONAL</span>
        <div className="divider-line" />
      </div>

      {/* Key Indicators */}
      <div className="grid-5">
        {/* Kamtibmas */}
        <div 
          className="card-ews cr clickable"
          onClick={openKamtibmasDetail}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Kamtibmas
            </span>
            <span className="badge badge-alert">KRITIS</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            73
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Indeks Kerawanan
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +8 vs bulan lalu · Klik detail ›
          </div>
        </div>

        {/* Pengangguran */}
        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Pengangguran
            </span>
            <span className="badge badge-warning">SIAGA</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            6.3%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            TPT Nasional
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +0.4% (Apr 2026)
          </div>
        </div>

        {/* Inflasi */}
        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Inflasi Wilayah
            </span>
            <span className="badge badge-warning">SIAGA</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            4.8%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            YoY Rata-Rata
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +0.3% MoM
          </div>
        </div>

        {/* Sentimen Negatif */}
        <div className="card-ews cr">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Sentimen Negatif
            </span>
            <span className="badge badge-alert">WASPADA</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            38%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Terhadap APH
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18% (7 hari)
          </div>
        </div>

        {/* PHK */}
        <div className="card-ews co">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Angka PHK
            </span>
            <span className="badge badge-warning">MONITOR</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--co)]">
            12.4K
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Total Nasional
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.1K (Q1)
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-ews">
        <span className="divider-text">PETA KERAWANAN & INSIDEN TERKINI</span>
        <div className="divider-line" />
      </div>

      {/* Map and Incidents */}
      <div className="grid-21">
        {/* Interactive Map */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Peta Kerawanan Wilayah — Klik Provinsi untuk Detail
            </span>
            <span className="badge badge-live">34 PROVINSI</span>
          </div>
          
          <div className="bg-[rgba(0,10,28,0.8)] rounded p-3.5">
            <div className="font-mono-tech text-[8.5px] text-[var(--td)] mb-2 tracking-[0.1em]">
              34 PROVINSI · INDONESIA · KLIK UNTUK DETAIL KERAWANAN
            </div>
            
            {/* Interactive Leaflet Map */}
            <div className="mb-2">
              <IndonesiaMap onProvClick={handleProvClick} />
            </div>

            {/* Legend and Analysis Summary */}
            <div className="flex items-start justify-between mt-3 px-1 border-t border-[rgba(255,255,255,0.05)] pt-3">
              <div className="flex-1">
                {/* <div className="font-orbitron text-[8.5px] text-[var(--td)] mb-2 tracking-[0.1em] uppercase">
                  Analisis Kerawanan Tertinggi
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {PROVINSI.filter(p => p.s === 'kritis' || p.n === 'Jawa Timur').slice(0, 4).map(p => (
                    <div key={p.n} className="flex items-center justify-between border-b border-[rgba(255,255,255,0.03)] pb-1">
                      <span className="font-rajdhani text-[11px] text-[var(--ts)] uppercase truncate max-w-[80px]">{p.n}</span>
                      <span className="font-mono-tech text-[10px] text-[var(--cr)] font-bold">
                        {PROV_DETAILS[p.n]?.score || Math.floor(Math.random() * 20 + 60)}%
                      </span>
                    </div>
                  ))}
                </div> */}
              </div>

              <div className="flex gap-3.5 justify-end pt-1">
                <div className="flex items-center gap-1.5 font-rajdhani text-[11px] text-[var(--ts)]">
                  <div className="w-2 h-2 rounded-sm bg-[rgba(255,45,85,.55)]" />
                  KRITIS
                </div>
                <div className="flex items-center gap-1.5 font-rajdhani text-[11px] text-[var(--ts)]">
                  <div className="w-2 h-2 rounded-sm bg-[rgba(255,214,0,.45)]" />
                  SIAGA
                </div>
                <div className="flex items-center gap-1.5 font-rajdhani text-[11px] text-[var(--ts)]">
                  <div className="w-2 h-2 rounded-sm bg-[rgba(0,255,157,.3)]" />
                  NORMAL
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Incidents and Sentiment */}
        <div className="flex flex-col gap-2.5 h-full">
          {/* Incident Feed */}
          <div className="card-ews flex-[8] flex flex-col">
            <div className="flex items-center justify-between mb-2.5 shrink-0">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Insiden Terkini
              </span>
              <span className="badge badge-live">LIVE</span>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin pr-1 lg:max-h-[40vh]">
              {INCIDENTS.map((incident, i) => (
                <div key={i} className="incident-item">
                  <div 
                    className="incident-dot" 
                    style={{ background: incident.color, boxShadow: `0 0 5px ${incident.color}` }}
                  />
                  <div>
                    <div className="font-rajdhani text-[13px] font-semibold text-[var(--tp)]">
                      {incident.title}
                    </div>
                    <div className="font-mono-tech text-[9px] text-[var(--td)]">
                      {incident.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment */}
          <div 
            className="card-ews clickable flex-[2] flex flex-col"
            onClick={openSentimentDetail}
          >
            <div className="flex items-center justify-between mb-2.5 shrink-0">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                Sentimen Publik — Klik untuk Keyword Detail
              </span>
              <span className="badge badge-info">SOSMED</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="sentiment-bar">
              <div className="sent-pos" style={{ width: '35%' }} />
              <div className="sent-net" style={{ width: '27%' }} />
              <div className="sent-neg" style={{ width: '38%' }} />
            </div>
            
            <div className="flex justify-between font-mono-tech text-[10px]">
              <span className="text-[var(--cg)]">✅ Pos 35%</span>
              <span className="text-[var(--c)]">— Net 27%</span>
              <span className="text-[var(--cr)]">❌ Neg 38%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Divider */}
      <div className="divider-ews">
        <span className="divider-text">TREN KAMTIBMAS & INDEKS KERAWANAN</span>
        <div className="divider-line" />
      </div>

      {/* Trend Chart and Risk Meter */}
      <div className="grid-2">
        {/* Trend Chart */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Tren Kamtibmas — Line Chart
            </span>
            <span className="badge badge-info">FILTER WILAYAH</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-[10px] text-[var(--td)] tracking-[0.1em]">WILAYAH ›</span>
            <select 
              className="select-ews"
              value={trenProv}
              onChange={(e) => setTrenProv(e.target.value)}
            >
              <option value="nasional">Nasional</option>
              <option value="dki">DKI Jakarta</option>
              <option value="jatim">Jawa Timur</option>
              <option value="jabar">Jawa Barat</option>
              <option value="sulteng">Sulawesi Tengah</option>
              <option value="sulsel">Sulawesi Selatan</option>
            </select>
          </div>

          <div className="h-[90px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--c)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--c)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 8, fill: 'var(--td)' }} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 8, fill: 'var(--td)' }} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '10px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="var(--c)" 
                  strokeWidth={2}
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Meter */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              🏙 Indeks Kerawanan — Top 5 Wilayah
            </span>
            <span className="badge badge-warning">RANKING</span>
          </div>
          
          <div className="space-y-2">
            {RISK_METER_DATA.map((r) => (
              <div key={r.n} className="flex items-center gap-2">
                <span className="font-rajdhani text-xs text-[var(--ts)] w-[100px] flex-shrink-0">{r.n}</span>
                <div className="progress-bar flex-1">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${r.v}%`, background: r.c }}
                  />
                </div>
                <span 
                  className="font-orbitron text-[11px] font-bold w-8 text-right"
                  style={{ 
                    color: r.c.includes('45,85') ? 'var(--cr)' : r.c.includes('107,0') ? 'var(--co)' : 'var(--cy)' 
                  }}
                >
                  {r.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
