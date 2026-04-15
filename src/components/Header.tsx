import { useState, useEffect } from 'react';
import { Shield, Radio } from 'lucide-react';

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <header className="sticky top-0 z-[900] bg-[rgba(2,10,20,0.97)] border-b border-[var(--border)] backdrop-blur-[14px] px-5 py-2 flex items-center justify-between shadow-[0_2px_40px_rgba(0,238,255,0.07)]">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0a2640] to-[#0c3a6a] border-2 border-[var(--c)] flex items-center justify-center text-xl glow-cyan flex-shrink-0">
          <Shield className="w-5 h-5 text-[var(--c)]" />
        </div>
        <div>
          <div className="font-orbitron text-xs font-extrabold tracking-[0.12em] text-[var(--c)] drop-shadow-[0_0_8px_rgba(0,238,255,0.5)] leading-tight">
            SISTEM PERINGATAN DINI — POLRI
          </div>
          <div className="text-[10px] text-[var(--ts)] tracking-[0.2em] uppercase">
            Early Warning System · Command Center Dashboard v2.0
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Threat Level */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[rgba(255,45,85,0.1)] border border-[rgba(255,45,85,0.3)] rounded">
          <span className="font-orbitron text-[8px] tracking-[0.15em] text-[var(--ts)]">THREAT LEVEL</span>
          <span className="font-orbitron text-[11px] font-bold text-[var(--cy)] animate-blink">⚠ SIAGA II</span>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2 font-mono-tech text-[11px] text-[var(--cg)] tracking-[0.08em]">
          <div className="w-2 h-2 rounded-full bg-[var(--cg)] animate-pulse-glow" />
          <Radio className="w-3 h-3" />
          LIVE MONITORING
        </div>

        {/* Clock */}
        <div className="text-right">
          <div className="font-orbitron text-[15px] font-semibold text-[var(--c)] tracking-[0.05em]">
            {formatTime(time)}
          </div>
          <div className="font-mono-tech text-[10px] text-[var(--ts)]">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </header>
  );
}
