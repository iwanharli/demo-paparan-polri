import { useState } from 'react';
import { Brain, TrendingUp, Activity, Filter, Target, Zap } from 'lucide-react';
import { PREDIKTIF_DATA } from '../data/dashboardData';

interface PrediktifAnalisisProps {
  openModal: (_title: string, _content: React.ReactNode) => void;
}

export function PrediktifAnalisis(_props: PrediktifAnalisisProps) {
  const [provinsi, setProvinsi] = useState('nasional');

  const data = PREDIKTIF_DATA[provinsi] || PREDIKTIF_DATA.nasional;

  // Calculate gauge stroke dashoffset
  const circumference = 2 * Math.PI * 50;
  const getOffset = (percentage: string) => {
    const pct = parseInt(percentage);
    return circumference - (pct / 100) * circumference;
  };

  return (
    <div className="animate-fade-up">
      {/* AI Ticker */}
      <div className="ticker-ews" style={{ borderColor: 'rgba(0,238,255,0.22)', background: 'rgba(0,238,255,0.04)' }}>
        <span className="ticker-tag" style={{ color: 'var(--c)', borderColor: 'rgba(0,238,255,0.35)', background: 'rgba(0,238,255,0.08)' }}>
          <Brain className="w-3 h-3 inline mr-1" />
          AI ENGINE
        </span>
        <span className="font-mono-tech text-[11px] text-[var(--ts)] whitespace-nowrap overflow-hidden text-ellipsis">
          Update setiap 15 menit · Crosstab: Kamtibmas + Ekonomi + OSINT + Bencana · Akurasi Model: 83.4% · Horizon: 7/14/30 hari
        </span>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-4 h-4 text-[var(--td)]" />
        <span className="font-mono-tech text-[10px] text-[var(--td)] tracking-[0.1em]">FILTER WILAYAH ›</span>
        <select 
          className="select-ews"
          value={provinsi}
          onChange={(e) => setProvinsi(e.target.value)}
        >
          <option value="nasional">Nasional</option>
          <option value="dki">DKI Jakarta</option>
          <option value="jatim">Jawa Timur</option>
          <option value="jabar">Jawa Barat</option>
          <option value="sulteng">Sulawesi Tengah</option>
          <option value="sulsel">Sulawesi Selatan</option>
          <option value="sumut">Sumatera Utara</option>
        </select>
      </div>

      {/* Divider */}
      <div className="divider-ews">
        <span className="divider-text">INSIGHT & REKOMENDASI STRATEGIS PIMPINAN</span>
        <div className="divider-line" />
      </div>

      {/* Gauges */}
      <div className="grid-3">
        {/* Risiko Sosial */}
        <div className="card-ews cr">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Risiko Eskalasi Sosial
            </span>
            <span className="badge badge-alert">7 HARI</span>
          </div>
          
          <div className="text-center py-3">
            <svg className="gauge-svg mx-auto" width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9"/>
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                fill="none" 
                stroke="rgba(255,45,85,0.6)" 
                strokeWidth="9" 
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(data.sosial)}
                strokeLinecap="round"
              />
              <text x="60" y="55" textAnchor="middle" className="gauge-text" fontSize="20" transform="rotate(90 60 60)">
                {data.sosial}
              </text>
              <text x="60" y="68" textAnchor="middle" className="gauge-sub" transform="rotate(90 60 60)">
                PROBABILITAS
              </text>
            </svg>
          </div>
          
          <div className="ptxt text-xs">
            Probabilitas gangguan keamanan tingkat menengah-besar dalam 7 hari ke depan di wilayah Jawa-Bali.
          </div>
        </div>

        {/* Risiko Ekonomi */}
        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Risiko Gejolak Ekonomi
            </span>
            <span className="badge badge-warning">30 HARI</span>
          </div>
          
          <div className="text-center py-3">
            <svg className="gauge-svg mx-auto" width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9"/>
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                fill="none" 
                stroke="rgba(255,214,0,0.6)" 
                strokeWidth="9" 
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(data.eko)}
                strokeLinecap="round"
              />
              <text x="60" y="55" textAnchor="middle" className="gauge-text" fontSize="20" transform="rotate(90 60 60)">
                {data.eko}
              </text>
              <text x="60" y="68" textAnchor="middle" className="gauge-sub" transform="rotate(90 60 60)">
                PROBABILITAS
              </text>
            </svg>
          </div>
          
          <div className="ptxt text-xs">
            Potensi eskalasi protes akibat kenaikan harga bahan pokok jika tidak ada intervensi kebijakan.
          </div>
        </div>

        {/* Risiko Bencana */}
        <div className="card-ews co">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Risiko Bencana Alam
            </span>
            <span className="badge badge-warning">14 HARI</span>
          </div>
          
          <div className="text-center py-3">
            <svg className="gauge-svg mx-auto" width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9"/>
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                fill="none" 
                stroke="rgba(255,107,0,0.6)" 
                strokeWidth="9" 
                strokeDasharray={circumference}
                strokeDashoffset={getOffset(data.ben)}
                strokeLinecap="round"
              />
              <text x="60" y="55" textAnchor="middle" className="gauge-text" fontSize="20" transform="rotate(90 60 60)">
                {data.ben}
              </text>
              <text x="60" y="68" textAnchor="middle" className="gauge-sub" transform="rotate(90 60 60)">
                PROBABILITAS
              </text>
            </svg>
          </div>
          
          <div className="ptxt text-xs">
            Risiko bencana hidrometeorologi Sulawesi dan Nusa Tenggara berdasarkan data BMKG & histori.
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid-2">
        {/* Langkah Strategis */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Target className="w-3 h-3" />
              Langkah Strategis Jangka Pendek
            </span>
            <span className="badge badge-live">AI REKOM</span>
          </div>
          
          <div className="pbox">
            <span className="ptag">SITUASI KRISIS — CROSSTAB DATA ANALISIS</span>
            <div className="ptxt text-sm">{data.insight}</div>
          </div>
          
          <div className="space-y-1">
            {data.rekom.map((r, i) => {
              const [title, ...rest] = r.split(':');
              return (
                <div key={i} className="rekom-item">
                  <span className="rekom-num">0{i + 1}</span>
                  <span className="rekom-text">
                    <strong style={{ color: 'var(--c)' }}>{title}:</strong>
                    {rest.join(':')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skenario */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Skenario 30 Hari ke Depan
            </span>
            <span className="badge badge-warning">SCENARIO</span>
          </div>
          
          <div className="space-y-2">
            {data.skenario.map((s, i) => (
              <div key={i} className="scenario-item">
                <div className="flex-shrink-0 w-40">
                  <div 
                    className="font-rajdhani text-[13px] font-bold"
                    style={{ color: s.color.replace(/,\d*\.\d+\)$/, ',1)') }}
                  >
                    {s.lbl}
                  </div>
                  <div className="font-rajdhani text-[11px] text-[var(--ts)]">{s.desc}</div>
                </div>
                <div className="scenario-bar-wrap">
                  <div 
                    className="scenario-fill" 
                    style={{ width: s.w, background: s.color }}
                  />
                </div>
                <span className={`px-2 py-0.5 rounded text-xs flex-shrink-0 ${
                  s.tag === 'kritis' ? 'tag-kritis' : s.tag === 'siaga' ? 'tag-siaga' : 'tag-normal'
                }`}>
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-3 pt-2.5 border-t border-[var(--border2)]">
            <div className="font-orbitron text-[8px] text-[var(--td)] tracking-[0.14em] mb-2">
              FAKTOR KUNCI
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="isu-tag isu-high">Kebijakan HET Pangan</span>
              <span className="isu-tag isu-med">Program Bansos</span>
              <span className="isu-tag isu-med">Operasi Pasar</span>
              <span className="isu-tag isu-low">Kondisi Cuaca</span>
              <span className="isu-tag isu-high">Narasi Sosmed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
