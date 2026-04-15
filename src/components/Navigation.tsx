import type { ModuleType } from '../App';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wheat, 
  ShieldAlert, 
  Waves, 
  Search, 
  Brain 
} from 'lucide-react';

interface NavigationProps {
  activeModule: ModuleType;
  setActiveModule: (module: ModuleType) => void;
}

const navItems: { id: ModuleType; label: string; icon: React.ElementType }[] = [
  { id: 'cmd', label: 'Command Center', icon: LayoutDashboard },
  { id: 'eko', label: 'Makro Ekonomi', icon: TrendingUp },
  { id: 'kom', label: 'Harga Komoditas', icon: Wheat },
  { id: 'kam', label: 'Kamtibmas', icon: ShieldAlert },
  { id: 'ben', label: 'Data Bencana', icon: Waves },
  { id: 'osn', label: 'OSINT & Isu', icon: Search },
  { id: 'pred', label: 'Prediktif Analisis', icon: Brain },
];

export function Navigation({ activeModule, setActiveModule }: NavigationProps) {
  return (
    <nav className="flex items-center gap-0.5 px-5 py-1.5 bg-[rgba(2,10,20,0.85)] border-b border-[var(--border2)] overflow-x-auto scrollbar-hide">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`nav-tab flex items-center gap-1.5 ${activeModule === item.id ? 'active' : ''}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
