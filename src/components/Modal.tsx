import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-[rgba(0,5,15,0.88)] z-[2000] flex items-center justify-center backdrop-blur-[6px] animate-fade-up"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[rgba(3,14,30,0.98)] border border-[var(--border)] rounded-md p-6 max-w-[580px] w-[90%] max-h-[80vh] overflow-y-auto relative animate-fade-up">
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--c)] to-transparent opacity-60" />
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3.5 right-4 font-orbitron text-[10px] text-[var(--td)] px-2 py-1 border border-[var(--border2)] rounded hover:text-[var(--cr)] hover:border-[rgba(255,45,85,0.3)] transition-all"
        >
          <X className="w-3 h-3 inline mr-1" />
          TUTUP
        </button>

        {/* Title */}
        <h2 className="font-orbitron text-[11px] font-bold tracking-[0.14em] text-[var(--c)] mb-4 drop-shadow-[0_0_8px_rgba(0,238,255,0.5)]">
          {title}
        </h2>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
