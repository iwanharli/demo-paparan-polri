import { useState } from 'react';
import { TrendingUp, AlertTriangle, Wheat, Filter } from 'lucide-react';
import { 
  KOMODITAS_DATA, 
  REKOMENDASI_DATA,
  KOMODITAS_TREND,
  ALERT_KOM_DATA
} from '../data/dashboardData';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

interface KomoditasProps {
  openModal: (title: string, content: React.ReactNode) => void;
}

const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

export function Komoditas({ openModal }: KomoditasProps) {
  const [provinsi, setProvinsi] = useState('nasional');
  const [komoditasFilter, setKomoditasFilter] = useState('all');
  const [rekomProv, setRekomProv] = useState('nasional');

  const data = KOMODITAS_DATA[provinsi] || KOMODITAS_DATA.nasional;
  const naikCount = data.filter(d => d.delta > 0).length;
  const hetCount = data.filter(d => d.h > d.het).length;

  const openKomNaikDetail = () => {
    const naikData = data.filter(d => d.delta > 0);
    openModal(
      'KOMODITAS NAIK — DETAIL',
      <div>
        <div className="mb-3 text-[var(--ts)] text-sm">Wilayah: <span className="text-[var(--c)] font-orbitron">{provinsi.toUpperCase()}</span></div>
        <div className="space-y-2">
          {naikData.map((d, i) => (
            <div key={i} className="flex items-center justify-between p-2 border-b border-[var(--border2)]">
              <span className="text-[var(--ts)]">{d.k}</span>
              <div className="flex items-center gap-2">
                <span className="font-orbitron text-sm text-[var(--cy)]">Rp{d.h.toLocaleString()}</span>
                <span className="px-2 py-0.5 rounded text-xs bg-[rgba(255,45,85,0.1)] text-[var(--cr)] border border-[rgba(255,45,85,0.3)]">
                  ▲ +{d.delta}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const openKomHETDetail = () => {
    const hetData = data.filter(d => d.h > d.het);
    openModal(
      'KOMODITAS MELAMPAUI HET — DETAIL',
      <div className="space-y-2">
        {hetData.map((d, i) => (
          <div key={i} className="flex items-center justify-between p-2 border-b border-[var(--border2)]">
            <span className="text-[var(--ts)]">{d.k}</span>
            <div>
              <div className="font-orbitron text-sm text-[var(--cr)]">
                Rp{d.h.toLocaleString()} <span className="text-[9px] text-[var(--td)]">HET Rp{d.het.toLocaleString()}</span>
              </div>
              <div className="font-mono-tech text-[10px] text-[var(--co)]">
                +{(((d.h - d.het) / d.het) * 100).toFixed(1)}% di atas HET
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Prepare chart data
  const getChartData = () => {
    if (komoditasFilter === 'all') {
      return days.map((day, i) => ({
        name: day,
        beras: KOMODITAS_TREND.beras[i],
        cabai: KOMODITAS_TREND.cabai[i],
        bawang: KOMODITAS_TREND.bawang[i],
        telur: KOMODITAS_TREND.telur[i],
      }));
    }
    return days.map((day, i) => ({
      name: day,
      value: KOMODITAS_TREND[komoditasFilter][i],
    }));
  };

  const chartData = getChartData();

  const rekomendasi = REKOMENDASI_DATA[rekomProv] || REKOMENDASI_DATA.nasional;

  return (
    <div className="animate-fade-up">
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

      {/* Key Indicators */}
      <div className="grid-4">
        <div 
          className="card-ews cr clickable"
          onClick={openKomNaikDetail}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Komoditas Naik
            </span>
            <span className="badge badge-alert">HARI INI</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            {naikCount}
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            dari {data.length} Komoditas
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +3 dari kemarin · Klik detail ›
          </div>
        </div>

        <div 
          className="card-ews cr clickable"
          onClick={openKomHETDetail}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Melampaui HET
            </span>
            <span className="badge badge-alert">KRITIS</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cr)]">
            {hetCount}
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Komoditas di atas HET
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cy)]">
            Cabai, Bawang, Beras… · Klik ›
          </div>
        </div>

        <div className="card-ews cy">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Kenaikan Tertinggi
            </span>
            <span className="badge badge-warning">CABAI</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--cy)]">
            +42%
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            vs HET Ditetapkan
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--co)]">
            Rp68.000/kg (HET 48K)
          </div>
        </div>

        <div className="card-ews co">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Potensi Gangguan
            </span>
            <span className="badge badge-warning">ALERT</span>
          </div>
          <div className="font-orbitron text-[27px] font-extrabold leading-none mb-1 text-[var(--co)]">
            3
          </div>
          <div className="font-rajdhani text-[11px] font-medium text-[var(--ts)] tracking-[0.1em] uppercase">
            Wilayah Rawan Protes
          </div>
          <div className="font-mono-tech text-[10px] mt-1.5 text-[var(--cr)] flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> 7 Hari Trend Naik
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid-32">
        {/* Table */}
        <div className="card-ews">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)] flex items-center gap-1">
              <Wheat className="w-3 h-3" />
              Harga Komoditas Pangan
            </span>
            <span className="badge badge-live">UPDATE 08:00</span>
          </div>
          
          <table className="table-ews">
            <thead>
              <tr>
                <th>KOMODITAS</th>
                <th>HARGA (Rp/kg)</th>
                <th>HET</th>
                <th>STATUS</th>
                <th>PERUBAHAN</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                const status = item.h > item.het * 1.2 ? 'kritis' : item.h > item.het ? 'siaga' : 'normal';
                return (
                  <tr key={i}>
                    <td>{item.k}</td>
                    <td className={item.delta > 0 ? 'text-[var(--cr)] font-bold' : item.delta < 0 ? 'text-[var(--cg)]' : 'text-[var(--ts)]'}>
                      {item.h.toLocaleString()}
                    </td>
                    <td className="text-[var(--td)]">{item.het.toLocaleString()}</td>
                    <td>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        status === 'kritis' ? 'tag-kritis' : status === 'siaga' ? 'tag-siaga' : 'tag-normal'
                      }`}>
                        {status.toUpperCase()}
                      </span>
                    </td>
                    <td className={item.delta > 0 ? 'text-[var(--cr)]' : item.delta < 0 ? 'text-[var(--cg)]' : 'text-[var(--ts)]'}>
                      {item.delta > 0 ? `▲ +${item.delta}%` : item.delta < 0 ? `▼ ${item.delta}%` : '→ Stabil'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Side Panel */}
        <div className="flex flex-col gap-2.5">
          {/* Trend Chart */}
          <div className="card-ews">
            <div className="flex items-center justify-between mb-2">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
                📉 Tren Kenaikan Harga
              </span>
              <span className="badge badge-info">FILTER</span>
            </div>
            <select 
              className="select-ews w-full mb-2"
              value={komoditasFilter}
              onChange={(e) => setKomoditasFilter(e.target.value)}
            >
              <option value="all">Semua</option>
              <option value="beras">Beras</option>
              <option value="cabai">Cabai</option>
              <option value="bawang">Bawang Merah</option>
              <option value="telur">Telur</option>
            </select>
            
            <div className="h-[65px]">
              <ResponsiveContainer width="100%" height="100%">
                {komoditasFilter === 'all' ? (
                  <LineChart data={chartData}>
                    <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="name" tick={{ fontSize: 7, fill: 'var(--td)' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 7, fill: 'var(--td)' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '9px' }} />
                    <Line type="monotone" dataKey="beras" stroke="var(--c)" strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="cabai" stroke="var(--cr)" strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="bawang" stroke="var(--co)" strokeWidth={1.5} dot={false} />
                    <Line type="monotone" dataKey="telur" stroke="var(--cy)" strokeWidth={1.5} dot={false} />
                  </LineChart>
                ) : (
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorKom" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--c)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--c)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="name" tick={{ fontSize: 7, fill: 'var(--td)' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 7, fill: 'var(--td)' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '9px' }} />
                    <Area type="monotone" dataKey="value" stroke="var(--c)" strokeWidth={2} fill="url(#colorKom)" />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between font-mono-tech text-[8px] text-[var(--td)] mt-1">
              {days.map(d => <span key={d}>{d}</span>)}
            </div>
          </div>

          {/* Alert Chart */}
          <div className="card-ews cr">
            <div className="flex items-center justify-between mb-2">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
                ⚠ Alert Potensi Gangguan
              </span>
              <span className="badge badge-alert">7 HARI</span>
            </div>
            <div className="h-[50px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={days.map((d, i) => ({ name: d, kritis: ALERT_KOM_DATA[0][i], siaga: ALERT_KOM_DATA[1][i] }))}>
                  <CartesianGrid stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="name" tick={{ fontSize: 7, fill: 'var(--td)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 7, fill: 'var(--td)' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '9px' }} />
                  <Line type="monotone" dataKey="kritis" stroke="var(--cr)" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="siaga" stroke="var(--cy)" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rekomendasi */}
          <div className="card-ews cg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-orbitron text-[8.5px] font-semibold tracking-[0.14em] uppercase text-[var(--ts)]">
                💡 Rekomendasi Tindakan
              </span>
              <span className="badge badge-live">AI</span>
            </div>
            <select 
              className="select-ews w-full mb-2"
              value={rekomProv}
              onChange={(e) => setRekomProv(e.target.value)}
            >
              <option value="nasional">Nasional</option>
              <option value="dki">DKI Jakarta</option>
              <option value="jatim">Jawa Timur</option>
              <option value="sulsel">Sulawesi Selatan</option>
            </select>
            <div className="space-y-1">
              {rekomendasi.map((r, i) => (
                <div key={i} className="rekom-item">
                  <span className="rekom-num">0{i + 1}</span>
                  <span className="rekom-text">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
