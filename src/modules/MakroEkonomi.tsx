import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

interface MakroEkonomiProps {
  openModal: (_title: string, _content: React.ReactNode) => void;
}

const inflasiData = [
  { name: 'DKI Jakarta', value: 5.2, color: 'var(--cr)' },
  { name: 'Jawa Timur', value: 4.6, color: 'var(--cy)' },
  { name: 'Sumatera Utara', value: 4.4, color: 'var(--cy)' },
  { name: 'Jawa Tengah', value: 3.8, color: 'var(--c)' },
  { name: 'Bali', value: 3.1, color: 'var(--cg)' },
];

export function MakroEkonomi(_props: MakroEkonomiProps) {
  return (
    <div className="animate-fade-up">
      {/* Divider */}
      <div className="divider-ews">
        <span className="divider-text">INDIKATOR MAKRO STRATEGIS</span>
        <div className="divider-line" />
      </div>

      {/* Row 1 */}
      <div className="grid-3">
        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Inflasi
            </span>
            <span className="badge badge-warning">BPS</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            4.8%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Year on Year
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Melampaui Target BI 3.5%
          </div>
        </div>

        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              IHK
            </span>
            <span className="badge badge-info">NASIONAL</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--c)]">
            118.4
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Basis 2022=100
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.1 MoM
          </div>
        </div>

        <div className="card-ews cr">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              TPT
            </span>
            <span className="badge badge-warning">APRIL 2026</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            6.3%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Pengangguran Terbuka
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Naik dari 5.9%
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-ews">
        <span className="divider-text">INVESTASI, SOSIAL & KESEJAHTERAAN</span>
        <div className="divider-line" />
      </div>

      {/* Row 2 */}
      <div className="grid-3">
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              IPM
            </span>
            <span className="badge badge-info">UNDP</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--c)]">
            73.6
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Indeks Pembangunan Manusia
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cg)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +0.5 YoY (Positif)
          </div>
        </div>

        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Kemiskinan
            </span>
            <span className="badge badge-warning">BPS</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            9.4%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Tingkat Kemiskinan
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +0.2% pasca PHK
          </div>
        </div>

        <div className="card-ews cg">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
              Investasi
            </span>
            <span className="badge badge-live">BKPM</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cg)]">
            Rp431T
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Realisasi Q1 2026
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cy)] flex items-center gap-1">
            <TrendingDown className="w-3 h-3" /> Turun 3% QoQ
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid-2">
        {/* Inflasi Chart */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <BarChart3 className="w-3 h-3" />
              Inflasi Per-Provinsi
            </span>
            <span className="badge badge-info">%</span>
          </div>
          
          <div className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inflasiData} layout="vertical">
                <CartesianGrid stroke="rgba(255,255,255,0.04)" horizontal={false} />
                <XAxis 
                  type="number" 
                  tick={{ fontSize: 8, fill: 'var(--td)' }} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  type="category" 
                  dataKey="name"
                  tick={{ fontSize: 9, fill: 'var(--ts)' }} 
                  axisLine={false}
                  tickLine={false}
                  width={80}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '10px'
                  }}
                />
                <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                  {inflasiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Korelasi */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Korelasi Ekonomi → Kamtibmas
            </span>
            <span className="badge badge-warning">ANALISIS AI</span>
          </div>
          
          <div className="pbox">
            <span className="ptag">💡 TEMUAN SISTEM — CROSSTAB DATA</span>
            <div className="ptxt">
              Korelasi positif terdeteksi antara inflasi {'>'}4% dengan kriminalitas pencurian di wilayah urban. 
              Wilayah TPT {'>'}6% menunjukkan potensi mobilisasi massa 2.3× lebih tinggi dalam 30 hari ke depan.
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-[rgba(0,18,42,0.7)] border border-[var(--border2)] rounded p-2.5 text-center">
              <div className="font-orbitron text-xl font-extrabold text-[var(--cr)]">0.78</div>
              <div className="font-rajdhani text-[10px] text-[var(--ts)] tracking-[0.07em] uppercase">
                Inflasi ↔ Kriminalitas
              </div>
            </div>
            <div className="bg-[rgba(0,18,42,0.7)] border border-[var(--border2)] rounded p-2.5 text-center">
              <div className="font-orbitron text-xl font-extrabold text-[var(--cy)]">0.62</div>
              <div className="font-rajdhani text-[10px] text-[var(--ts)] tracking-[0.07em] uppercase">
                TPT ↔ Unras
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
