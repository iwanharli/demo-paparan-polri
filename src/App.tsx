import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { CommandCenter } from './modules/CommandCenter';
import { MakroEkonomi } from './modules/MakroEkonomi';
import { Komoditas } from './modules/Komoditas';
import { Kamtibmas } from './modules/Kamtibmas';
import { DataBencana } from './modules/DataBencana';
import { OSINT } from './modules/OSINT';
import { PrediktifAnalisis } from './modules/PrediktifAnalisis';
import { Modal } from './components/Modal';

export type ModuleType = 'cmd' | 'eko' | 'kom' | 'kam' | 'ben' | 'osn' | 'pred';

export interface ModalData {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
}

function App() {
  const [activeModule, setActiveModule] = useState<ModuleType>('cmd');
  const [modal, setModal] = useState<ModalData>({
    isOpen: false,
    title: '',
    content: null
  });

  const openModal = (title: string, content: React.ReactNode) => {
    setModal({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModal({ isOpen: false, title: '', content: null });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <main className="px-4 py-3 max-w-[1640px] mx-auto">
        {activeModule === 'cmd' && <CommandCenter openModal={openModal} />}
        {activeModule === 'eko' && <MakroEkonomi openModal={openModal} />}
        {activeModule === 'kom' && <Komoditas openModal={openModal} />}
        {activeModule === 'kam' && <Kamtibmas openModal={openModal} />}
        {activeModule === 'ben' && <DataBencana openModal={openModal} />}
        {activeModule === 'osn' && <OSINT openModal={openModal} />}
        {activeModule === 'pred' && <PrediktifAnalisis openModal={openModal} />}
      </main>

      <footer className="footer-ews">
        SISTEM PERINGATAN DINI — POLRI · RAHASIA · HANYA UNTUK KEPERLUAN OPERASIONAL · © 2025 PUSAT ANALITIK POLRI
      </footer>

      <Modal 
        isOpen={modal.isOpen} 
        title={modal.title} 
        onClose={closeModal}
      >
        {modal.content}
      </Modal>
    </div>
  );
}

export default App;
