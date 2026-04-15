import { useState } from 'react';
import { Eye, ShieldAlert, Brain, Filter, MapPin } from 'lucide-react';
import { 
  PROVINSI, 
  PROV_DETAILS,
  KAM_DIM_DATA
} from '../data/dashboardData';
import { IndonesiaMap } from '../components/IndonesiaMap';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

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
      <div className="grid-12">
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
              <option value="jawa timur">Jawa Timur</option>
              <option value="dki jakarta">DKI Jakarta</option>
              <option value="sulawesi tengah">Sulawesi Tengah</option>
              <option value="jawa barat">Jawa Barat</option>
            </select>
          </div>
          
          <div className="h-[280px] relative mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dimensiData}
                  cx="50%"
                  cy="50%"
                  innerRadius={85}
                  outerRadius={115}
                  paddingAngle={5}
                  dataKey="v"
                  nameKey="n"
                  stroke="none"
                  animationDuration={1500}
                >
                  {dimensiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.c} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(2, 12, 24, 0.95)', 
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontFamily: 'Share Tech Mono, monospace'
                  }}
                  itemStyle={{ color: 'var(--tp)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-2">
              <span className="font-rajdhani text-[10px] text-[var(--td)] uppercase tracking-[0.2em] font-bold">Composite</span>
              <span className="font-orbitron text-4xl font-black text-[var(--tp)] leading-none my-1">
                {Math.round(dimensiData.reduce((acc, curr) => acc + curr.v, 0) / dimensiData.length)}
              </span>
              <span className="font-mono-tech text-[9px] text-[var(--ts)] opacity-50 uppercase tracking-widest">Aggregate Score</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 px-1">
            {dimensiData.map((item) => (
              <div key={item.n} className="flex items-center gap-2 group cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ background: item.c, color: item.c }} />
                <span className="font-rajdhani text-[11px] text-[var(--ts)] uppercase group-hover:text-[var(--tp)] transition-colors">{item.n}</span>
                <span className="font-mono-tech text-[10px] text-[var(--tp)] ml-auto opacity-70">{item.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-ews">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="font-orbitron text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--ts)] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[var(--c)]" />
              STATUS KAMTIBMAS PER-WILAYAH
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono-tech text-[8px] text-[var(--td)] animate-pulse">● LIVE SATELLITE</span>
              <span className="badge badge-live">TACTICAL MAP</span>
            </div>
          </div>
          
          <div className="relative group">
            {/* HUD Corner Decorations */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-[var(--c)] opacity-40" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-[var(--c)] opacity-40" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-[var(--c)] opacity-40" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-[var(--c)] opacity-40" />
            
            <div className="bg-[var(--bg-card2)] border border-[rgba(0,238,255,0.1)] rounded overflow-hidden">
              <div className="flex items-center justify-between px-3.5 py-2 bg-[rgba(0,238,255,0.03)] border-b border-[rgba(0,238,255,0.05)]">
                <div className="font-mono-tech text-[8.5px] text-[var(--ts)] tracking-[0.1em] uppercase">
                  GEO-SPATIAL INTELLIGENCE · IDN_UNIT_01 · MONITORING
                </div>
                <div className="font-mono-tech text-[8.5px] text-[var(--td)]">
                  SCANNING... 100%
                </div>
              </div>

              <div className="relative h-[410px]">
                <IndonesiaMap onProvClick={handleKamProvClick} />
                
                {/* Legend Overlay - Positioned for Minimal Obstruction */}
                <div className="absolute bottom-5 left-5 z-[1000] p-3 bg-[rgba(2,12,24,0.9)] border border-[var(--border2)] rounded backdrop-blur-md shadow-2xl">
                  <div className="font-orbitron text-[7.5px] text-[var(--td)] mb-2.5 tracking-[0.2em]">LEGEND STATUS</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 font-rajdhani text-[10.5px] text-[var(--ts)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--cr)] shadow-[0_0_8px_var(--cr)]" />
                      KRITIS
                    </div>
                    <div className="flex items-center gap-2.5 font-rajdhani text-[10.5px] text-[var(--ts)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--cy)] shadow-[0_0_8px_var(--cy)]" />
                      SIAGA
                    </div>
                    <div className="flex items-center gap-2.5 font-rajdhani text-[10.5px] text-[var(--ts)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--cg)] shadow-[0_0_8px_var(--cg)]" />
                      NORMAL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
