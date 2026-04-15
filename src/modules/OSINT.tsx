import { useState } from 'react';
import { Search, TrendingUp, Activity, Share2, Smile, AlertTriangle } from 'lucide-react';
import { 
  ISU_DATA,
  SNA_NODES,
  SNA_EDGES,
  EMOTION_DATA,
  NARASI_VIRAL
} from '../data/dashboardData';

interface OSINTProps {
  openModal: (title: string, content: React.ReactNode) => void;
}

export function OSINT({ openModal }: OSINTProps) {
  const [isuProv, setIsuProv] = useState('nasional');

  const isuData = ISU_DATA[isuProv] || ISU_DATA.nasional;

  const openIsuDetail = () => {
    const allIsu = [...isuData.high, ...isuData.med];
    openModal(
      `ISU TERIDENTIFIKASI — ${isuProv.toUpperCase()}`,
      <div className="space-y-1">
        {allIsu.map((t, i) => (
          <div key={i} className="flex items-center justify-between p-2 border-b border-[var(--border2)]">
            <span className="text-[var(--ts)]">{t}</span>
            <span className={`px-2 py-0.5 rounded text-xs ${i < 3 ? 'tag-kritis' : 'tag-siaga'}`}>
              {i < 3 ? 'DAMPAK TINGGI' : 'SEDANG'}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="animate-fade-up">
      {/* Key Indicators */}
      <div className="grid-4">
        <div 
          className="card-ews clickable"
          onClick={openIsuDetail}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Search className="w-3 h-3" />
              Isu Teridentifikasi
            </span>
            <span className="badge badge-live">LIVE</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--c)]">
            127
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Isu per 24 jam · Klik ›
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +23 isu baru
          </div>
        </div>

        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Konten Diproses
            </span>
            <span className="badge badge-info">OSINT</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cb)]">
            4.8M
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Post & Berita (24h)
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--ts)]">
            → Sosmed + Media Online
          </div>
        </div>

        <div className="card-ews cr">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Narasi Viral Berbahaya
            </span>
            <span className="badge badge-alert">DETEKSI</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            12
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Potensi Destabilisasi
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +4 vs kemarin
          </div>
        </div>

        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Share2 className="w-3 h-3" />
              Isu Bobot Tinggi
            </span>
            <span className="badge badge-warning">DAMPAK</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            8
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Stabilitas Kritis
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cy)]">
            Ekonomi, Politik, Sosial
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid-2">
        {/* Left Column */}
        <div className="flex flex-col gap-2.5">
          {/* Isu Trending */}
          <div className="card-ews">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Isu Trending — Filter Wilayah & Pembobotan
              </span>
              <span className="badge badge-live">LIVE</span>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <select 
                className="select-ews"
                value={isuProv}
                onChange={(e) => setIsuProv(e.target.value)}
              >
                <option value="nasional">Nasional</option>
                <option value="dki">DKI Jakarta</option>
                <option value="jatim">Jawa Timur</option>
                <option value="sulteng">Sulawesi Tengah</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <div>
                <div className="font-mono-tech text-[8.5px] text-[var(--td)] mb-1.5">DAMPAK TINGGI</div>
                <div className="flex flex-wrap gap-1">
                  {isuData.high.map((t, i) => (
                    <span 
                      key={i} 
                      className="isu-tag isu-high"
                      onClick={() => openModal(
                        `Detail Isu: ${t}`,
                        <div className="ptxt">
                          Isu <strong>{t}</strong> teridentifikasi dengan dampak tinggi terhadap stabilitas. 
                          Frekuensi: {Math.floor(Math.random() * 5000 + 1000)} post/24jam. 
                          Sumber: Twitter/X, TikTok, Telegram.
                        </div>
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-mono-tech text-[8.5px] text-[var(--td)] mb-1.5">DAMPAK SEDANG</div>
                <div className="flex flex-wrap gap-1">
                  {isuData.med.map((t, i) => (
                    <span key={i} className="isu-tag isu-med">{t}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-mono-tech text-[8.5px] text-[var(--td)] mb-1.5">DAMPAK RENDAH</div>
                <div className="flex flex-wrap gap-1">
                  {isuData.low.map((t, i) => (
                    <span key={i} className="isu-tag isu-low">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Analisis Sentimen */}
          <div className="card-ews">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <Activity className="w-3 h-3" />
                Analisis Sentimen Media
              </span>
              <span className="badge badge-info">NLP</span>
            </div>
            
            <div className="sentiment-bar">
              <div className="sent-pos" style={{ width: '40%' }} />
              <div className="sent-net" style={{ width: '25%' }} />
              <div className="sent-neg" style={{ width: '35%' }} />
            </div>
            
            <div className="flex justify-between font-mono-tech text-[10px]">
              <span className="text-[var(--cg)]">✅ Pos 40%</span>
              <span className="text-[var(--c)]">— Net 25%</span>
              <span className="text-[var(--cr)]">❌ Neg 35%</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2.5">
          {/* Social Network Analysis */}
          <div className="card-ews">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <Share2 className="w-3 h-3" />
                Social Network Analysis — Aktor Pemicu Isu
              </span>
              <span className="badge badge-info">SNA</span>
            </div>
            
            <div className="relative h-[180px] bg-[rgba(0,10,25,0.6)] rounded overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 400 180">
                {/* Edges */}
                {SNA_EDGES.map(([a, b], i) => {
                  const na = SNA_NODES[a];
                  const nb = SNA_NODES[b];
                  return (
                    <line
                      key={i}
                      x1={na.x}
                      y1={na.y}
                      x2={nb.x}
                      y2={nb.y}
                      stroke="rgba(0,238,255,0.18)"
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Nodes */}
                {SNA_NODES.map((n) => (
                  <g 
                    key={n.id}
                    className="cursor-pointer"
                    onClick={() => openModal(
                      `AKTOR: ${n.lbl}`,
                      <div className="ptxt">
                        <strong>{n.lbl}</strong> — {n.role}<br/><br/>
                        Pengaruh: {n.r > 15 ? 'Sangat Tinggi' : n.r > 12 ? 'Tinggi' : 'Sedang'}<br/>
                        Konten berbahaya terdeteksi: {Math.floor(Math.random() * 50 + 10)} post<br/>
                        Follower estimasi: {(n.r * 5000).toLocaleString()}<br/>
                        Platform: Twitter/X, Telegram
                      </div>
                    )}
                  >
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={n.r}
                      fill={n.color}
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                    />
                    <text
                      x={n.x}
                      y={n.y + n.r + 9}
                      textAnchor="middle"
                      fontFamily="Share Tech Mono"
                      fontSize="7"
                      fill="rgba(180,220,255,0.7)"
                    >
                      {n.lbl}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            
            <div className="font-mono-tech text-[8.5px] text-[var(--td)] mt-1.5">
              Ukuran node = tingkat pengaruh · Warna = kategori aktor · Klik untuk detail
            </div>
          </div>

          {/* Emosi Publik */}
          <div className="card-ews">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <Smile className="w-3 h-3" />
                Analisis Emosi Publik Terhadap APH
              </span>
              <span className="badge badge-info">NLP</span>
            </div>
            
            <div className="emotion-grid">
              {EMOTION_DATA.map((e, i) => (
                <div 
                  key={i} 
                  className="emotion-item"
                  onClick={() => openModal(
                    `Emosi: ${e.label}`,
                    <div className="ptxt">
                      <div className="text-4xl mb-2">{e.icon}</div>
                      <div className="font-orbitron text-2xl font-bold" style={{ color: e.color }}>{e.pct}%</div>
                      <div className="text-[var(--ts)]">{e.label}</div>
                    </div>
                  )}
                >
                  <div className="emotion-icon">{e.icon}</div>
                  <span className="emotion-label">{e.label}</span>
                  <div className="emotion-pct" style={{ color: e.color }}>{e.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Narasi Viral */}
          <div className="card-ews cr">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Deteksi Narasi Viral Berbahaya
              </span>
              <span className="badge badge-alert">ALERT</span>
            </div>
            
            <div className="space-y-1">
              {NARASI_VIRAL.map((n, i) => (
                <div key={i} className="incident-item">
                  <div 
                    className="incident-dot" 
                    style={{ background: n.color, boxShadow: `0 0 5px ${n.color}` }}
                  />
                  <div>
                    <div className="font-rajdhani text-[13px] font-semibold text-[var(--tp)]">{n.title}</div>
                    <div className="font-mono-tech text-[9px] text-[var(--td)]">{n.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
