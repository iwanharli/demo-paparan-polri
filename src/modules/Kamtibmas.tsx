import { useState } from 'react';
import { Eye, ShieldAlert, Brain, Filter, MapPin } from 'lucide-react';
import { 
  PROVINSI, 
  PROV_DETAILS,
  KAM_DIM_DATA
} from '../data/dashboardData';

interface KamtibmasProps {
  openModal: (title: string, content: React.ReactNode) => void;
}

const kategoriAncaman = [
  { name: 'Kriminalitas Umum', status: 'siaga' },
  { name: 'Konflik Sosial', status: 'kritis' },
  { name: 'Terorisme/Radikalisme', status: 'monitor' },
  { name: 'Narkotika', status: 'siaga' },
  { name: 'Kejahatan Siber', status: 'waspada' },
  { name: 'TPPO', status: 'monitor' },
];

const rekomendasiMitigasi = [
  'Deploy Satuan Dalmas siaga di 3 titik rawan Surabaya untuk antisipasi eskalasi unjuk rasa.',
  'Aktifkan tim negosiasi dan mediasi tokoh masyarakat di wilayah konflik DKI Jakarta.',
  'Koordinasi lintas sektoral dengan Dinsos & BNPB untuk distribusi bantuan sosial mendesak.',
  'Monitoring ketat platform digital dan grup tertutup — narasi provokatif.',
];

export function Kamtibmas({ openModal }: KamtibmasProps) {
  const [dimProv, setDimProv] = useState('nasional');
  const [, setSelectedKamProv] = useState<string | null>(null);

  const dimensiData = KAM_DIM_DATA[dimProv] || KAM_DIM_DATA.nasional;

  const handleKamProvClick = (prov: typeof PROVINSI[0]) => {
    const detail = PROV_DETAILS[prov.n] || { 
      score: Math.floor(Math.random() * 40 + 30), 
      alasan: ['Kondisi relatif stabil', 'Data dalam proses analisis', 'Monitoring berkala diperlukan'] 
    };
    setSelectedKamProv(prov.n);
    
    openModal(
      `📍 ${prov.n} — ${prov.s.toUpperCase()}`,
      <div>
        <div className="mb-4">
          <div className="font-orbitron text-2xl font-bold" style={{ 
            color: prov.s === 'kritis' ? 'var(--cr)' : prov.s === 'siaga' ? 'var(--cy)' : 'var(--cg)' 
          }}>
            Skor: {detail.score}
          </div>
          <div className="text-[var(--ts)] text-sm">Populasi: {prov.pop}</div>
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

  return (
    <div className="animate-fade-up">
      {/* Row 1 */}
      <div className="grid-3">
        {/* Pantauan */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Pantauan — Potensi Unjuk Rasa
            </span>
            <span className="badge badge-warning">SOSMED</span>
          </div>
          
          <div className="flex items-center justify-between py-1.5 border-b border-[var(--border2)]">
            <span className="text-[var(--ts)]">Frekuensi Deteksi</span>
            <div className="flex items-center gap-1">
              <span className="font-orbitron text-[13px] font-bold text-[var(--cr)]">248</span>
              <span className="font-mono-tech text-[9px] text-[var(--td)]">post/jam</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-1.5 border-b border-[var(--border2)]">
            <span className="text-[var(--ts)]">Potensi Unras</span>
            <span className="px-2 py-0.5 rounded text-xs tag-waspada">WASPADA</span>
          </div>
          
          <div className="flex items-center justify-between py-1.5 border-b border-[var(--border2)]">
            <span className="text-[var(--ts)]">Mobilisasi Massa</span>
            <span className="px-2 py-0.5 rounded text-xs tag-monitor">MONITOR</span>
          </div>
          
          <div className="flex items-center justify-between py-1.5">
            <span className="text-[var(--ts)]">Kerumunan</span>
            <span className="px-2 py-0.5 rounded text-xs tag-normal">AMAN</span>
          </div>
          
          <div className="mt-2 p-2 bg-[rgba(255,107,0,0.07)] border border-[rgba(255,107,0,0.2)] rounded">
            <div className="font-orbitron text-[8.5px] text-[var(--co)] mb-1">THRESHOLD ALERT</div>
            <div className="text-[var(--ts)] text-xs">
              Frekuensi Unras melampaui ambang 200 post/jam. Sistem aktifkan level WASPADA otomatis.
            </div>
          </div>
        </div>

        {/* Kategori Ancaman */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              Kategori Ancaman Kamtibmas
            </span>
            <span className="badge badge-info">DATA</span>
          </div>
          
          <div className="space-y-1">
            {kategoriAncaman.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-[var(--border2)] last:border-0">
                <span className="text-[var(--ts)]">{item.name}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  item.status === 'kritis' ? 'tag-kritis' : 
                  item.status === 'siaga' ? 'tag-siaga' : 
                  item.status === 'waspada' ? 'tag-waspada' : 
                  item.status === 'monitor' ? 'tag-monitor' : 'tag-normal'
                }`}>
                  {item.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rekomendasi AI */}
        <div className="card-ews cg">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Brain className="w-3 h-3" />
              Rekomendasi Mitigasi AI
            </span>
            <span className="badge badge-live">AI-GEN</span>
          </div>
          
          <div className="space-y-1">
            {rekomendasiMitigasi.map((r, i) => (
              <div key={i} className="rekom-item">
                <span className="rekom-num">0{i + 1}</span>
                <span className="rekom-text">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid-2">
        {/* Indeks Dimensi */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Indeks Kerawanan Dimensi — Filter Wilayah
            </span>
            <span className="badge badge-info">COMPOSITE</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-tech text-[10px] text-[var(--td)] tracking-[0.1em]">PROVINSI ›</span>
            <select 
              className="select-ews"
              value={dimProv}
              onChange={(e) => setDimProv(e.target.value)}
            >
              <option value="nasional">Nasional</option>
              <option value="jatim">Jawa Timur</option>
              <option value="dki">DKI Jakarta</option>
              <option value="sulteng">Sulawesi Tengah</option>
              <option value="jabar">Jawa Barat</option>
            </select>
          </div>
          
          <div className="space-y-2">
            {dimensiData.map((item) => (
              <div key={item.n} className="flex items-center gap-2">
                <span className="font-rajdhani text-xs text-[var(--ts)] w-[110px] flex-shrink-0">{item.n}</span>
                <div className="progress-bar flex-1">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${item.v}%`, background: item.c }}
                  />
                </div>
                <span 
                  className="font-orbitron text-[11px] font-bold w-6 text-right"
                  style={{ 
                    color: item.v >= 70 ? 'var(--cr)' : item.v >= 50 ? 'var(--cy)' : 'var(--cg)' 
                  }}
                >
                  {item.v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Peta Kamtibmas */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Status Per-Wilayah — Klik untuk Detail
            </span>
            <span className="badge badge-live">PETA KAMTIBMAS</span>
          </div>
          
          <div className="grid grid-cols-6 gap-1">
            {PROVINSI.map((prov) => {
              const statusColors = {
                kritis: 'rgba(255,45,85,.18)',
                siaga: 'rgba(255,214,0,.12)',
                normal: 'rgba(0,255,157,.07)'
              };
              const borderColors = {
                kritis: 'rgba(255,45,85,.4)',
                siaga: 'rgba(255,214,0,.3)',
                normal: 'rgba(0,255,157,.2)'
              };
              const textColors = {
                kritis: 'var(--cr)',
                siaga: 'var(--cy)',
                normal: 'var(--cg)'
              };
              
              return (
                <div
                  key={prov.n}
                  className="p-1 text-center rounded cursor-pointer transition-all hover:scale-105"
                  style={{
                    background: statusColors[prov.s],
                    border: `1px solid ${borderColors[prov.s]}`
                  }}
                  onClick={() => handleKamProvClick(prov)}
                  title={`${prov.n} — ${prov.s.toUpperCase()}`}
                >
                  <div 
                    className="font-mono-tech text-[7px]"
                    style={{ color: textColors[prov.s] }}
                  >
                    {prov.n}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
