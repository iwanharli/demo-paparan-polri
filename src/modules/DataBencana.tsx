import { useState } from 'react';
import { Waves, AlertTriangle, Brain, Filter, Shield, TrendingUp, TrendingDown } from 'lucide-react';
import { 
  BENCANA_HISTORI,
  PERINGATAN_DATA,
  PRED_BENCANA,
  KERENTANAN_DATA
} from '../data/dashboardData';

interface DataBencanaProps {
  openModal: (title: string, content: React.ReactNode) => void;
}

export function DataBencana({ openModal }: DataBencanaProps) {
  const [histProv, setHistProv] = useState('nasional');
  const [kerenFilter, setKerenFilter] = useState('all');
  const [pdFilter, setPdFilter] = useState('all');
  const [predFilter, setPredFilter] = useState('sulteng');

  const bencanaData = BENCANA_HISTORI[histProv] || BENCANA_HISTORI.nasional;
  const peringatanData = PERINGATAN_DATA[pdFilter] || PERINGATAN_DATA.all;
  const predData = PRED_BENCANA[predFilter] || PRED_BENCANA.sulteng;
  
  const kerentananFiltered = kerenFilter === 'all' 
    ? KERENTANAN_DATA 
    : KERENTANAN_DATA.filter(d => d.status === kerenFilter);

  return (
    <div className="animate-fade-up">
      {/* Key Indicators */}
      <div className="grid-4">
        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Waves className="w-3 h-3" />
              Total Bencana 2026
            </span>
            <span className="badge badge-warning">BNPB</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            1.247
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Kejadian s/d Apr
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +187 vs 2025
          </div>
        </div>

        <div className="card-ews cr">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Peringatan Aktif
            </span>
            <span className="badge badge-alert">BMKG</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            8
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Wilayah Peringatan
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Cuaca Ekstrem
          </div>
        </div>

        <div className="card-ews co">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Brain className="w-3 h-3" />
              Proyeksi Risiko Tinggi
            </span>
            <span className="badge badge-warning">PREDIKTIF</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--co)]">
            5
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Provinsi — 30 Hari
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cy)]">
            Sulteng, NTT, Kalsel…
          </div>
        </div>

        <div className="card-ews cg">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Satgas Siaga
            </span>
            <span className="badge badge-live">AKTIF</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cg)]">
            12
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Pos Satgas Aktif
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cg)] flex items-center gap-1">
            <TrendingDown className="w-3 h-3" /> ✓ Standby Siaga 1
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid-2">
        {/* Histori Bencana */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Histori Bencana — Klik untuk Detail Wilayah
            </span>
            <span className="badge badge-info">BNPB</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-[10px] text-[var(--td)] tracking-[0.1em]">PROVINSI ›</span>
            <select 
              className="select-ews"
              value={histProv}
              onChange={(e) => setHistProv(e.target.value)}
            >
              <option value="nasional">Nasional</option>
              <option value="jatim">Jawa Timur</option>
              <option value="sulteng">Sulawesi Tengah</option>
              <option value="ntt">NTT</option>
              <option value="kalsel">Kalimantan Selatan</option>
            </select>
          </div>
          
          <div className="space-y-1">
            {bencanaData.map((b, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-2 bg-[rgba(0,12,30,0.7)] border border-[var(--border2)] rounded cursor-pointer hover:border-[rgba(0,238,255,0.3)] transition-all"
                onClick={() => openModal(
                  `Detail Bencana — ${histProv.toUpperCase()}`,
                  <div className="ptxt">
                    Tipe: <strong>{b.e}</strong> · Kejadian: <strong>{b.n}</strong> · 
                    Tren meningkat dari tahun lalu. Perlu koordinasi BNPB dan BPBD setempat.
                  </div>
                )}
              >
                <span className="font-rajdhani text-[13px] font-semibold flex items-center gap-2">
                  {b.e}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-[rgba(255,255,255,0.05)] rounded overflow-hidden">
                    <div 
                      className="h-full rounded" 
                      style={{ width: `${b.pct}%`, background: b.c }}
                    />
                  </div>
                  <span 
                    className="font-orbitron text-[11px] font-bold"
                    style={{ color: b.c.replace(/,\d*\.\d+\)$/, ',1)') }}
                  >
                    {b.n}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indeks Kerentanan */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Indeks Kerentanan Wilayah — Klik Detail
            </span>
            <span className="badge badge-warning">FILTER PROVINSI</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <select 
              className="select-ews"
              value={kerenFilter}
              onChange={(e) => setKerenFilter(e.target.value)}
            >
              <option value="all">Semua Prioritas</option>
              <option value="kritis">Bahaya</option>
              <option value="waspada">Waspada</option>
              <option value="siaga">Siaga</option>
            </select>
          </div>
          
          <div className="space-y-1">
            {kerentananFiltered.map((k, i) => (
              <div 
                key={i}
                className="kerentanan-card"
                onClick={() => openModal(
                  `Indeks Kerentanan — ${k.prov}`,
                  <div>
                    <div 
                      className="font-orbitron text-3xl font-bold mb-2"
                      style={{ 
                        color: k.status === 'kritis' ? 'var(--cr)' : k.status === 'waspada' ? 'var(--co)' : 'var(--cy)' 
                      }}
                    >
                      {k.skor}
                    </div>
                    <div className="klbl mb-3">Skor Kerentanan</div>
                    <div className="ptxt">{k.alasan}</div>
                  </div>
                )}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-rajdhani text-[14px] font-bold text-[var(--tp)]">{k.prov}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    k.status === 'kritis' ? 'tag-kritis' : k.status === 'waspada' ? 'tag-waspada' : 'tag-siaga'
                  }`}>
                    {k.status === 'kritis' ? 'BAHAYA' : k.status === 'waspada' ? 'WASPADA' : 'SIAGA'}
                  </span>
                </div>
                <div className="progress-bar mb-1">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${k.skor}%`, 
                      background: k.status === 'kritis' ? 'rgba(255,45,85,.6)' : k.status === 'waspada' ? 'rgba(255,107,0,.6)' : 'rgba(255,214,0,.55)' 
                    }}
                  />
                </div>
                <div className="text-[var(--ts)] text-xs">{k.alasan}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid-2">
        {/* Peringatan Dini */}
        <div className="card-ews cr">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Peringatan Dini Aktif — Filter Wilayah
            </span>
            <span className="badge badge-alert">BMKG LIVE</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <select 
              className="select-ews"
              value={pdFilter}
              onChange={(e) => setPdFilter(e.target.value)}
            >
              <option value="all">Semua Wilayah</option>
              <option value="sulteng">Sulawesi Tengah</option>
              <option value="ntt">NTT</option>
              <option value="kalsel">Kalimantan Selatan</option>
              <option value="jatim">Jawa Timur</option>
            </select>
          </div>
          
          <div className="space-y-1">
            {peringatanData.map((p, i) => (
              <div 
                key={i}
                className="flex items-center justify-between py-2 border-b border-[var(--border2)] last:border-0 cursor-pointer hover:bg-[rgba(0,238,255,0.02)] px-1 -mx-1 rounded transition-all"
                onClick={() => openModal(
                  `${p.j} — ${p.w}`,
                  <div className="ptxt">
                    Jenis: <strong>{p.j}</strong><br/>
                    Wilayah: {p.w}<br/>
                    Detail: {p.detail}<br/><br/>
                    Rekomendasi: Siagakan personel dan pastikan koordinasi dengan BPBD setempat.
                  </div>
                )}
              >
                <div>
                  <div className="font-rajdhani text-[13px] font-bold text-[var(--tp)]">{p.j} — {p.w}</div>
                  <div className="font-mono-tech text-[9px] text-[var(--td)]">{p.detail}</div>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  p.s === 'kritis' ? 'tag-kritis' : 'tag-siaga'
                }`}>
                  {p.s.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Analysis */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Brain className="w-3 h-3" />
              Predictive Analysis Bencana — Filter Wilayah
            </span>
            <span className="badge badge-live">AI ENGINE</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <select 
              className="select-ews"
              value={predFilter}
              onChange={(e) => setPredFilter(e.target.value)}
            >
              <option value="sulteng">Sulawesi Tengah</option>
              <option value="ntt">NTT</option>
              <option value="kalsel">Kalimantan Selatan</option>
              <option value="jatim">Jawa Timur</option>
              <option value="dki">DKI Jakarta</option>
            </select>
          </div>
          
          <div className="pbox">
            <span className="ptag">🤖 PREDIKTIF BENCANA — {predFilter.toUpperCase()} · PROBABILITAS {predData.pct}%</span>
            <div className="ptxt">{predData.txt}</div>
          </div>
          
          <div className="space-y-1 mt-2">
            {predData.aksi.map((a, i) => (
              <div key={i} className="rekom-item">
                <span className="rekom-num">0{i + 1}</span>
                <span className="rekom-text">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
