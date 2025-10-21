// Importe os ícones e o componente Link
import { FaArrowLeft, FaCog, FaFileContract, FaGlobe, FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function ConfiguracoesPage() {
  return (
    <div className="app-container">

      {/* 1. HEADER (Cabeçalho) */}
      <header className="app-header">
        
        {/* Botão de Voltar usando o componente Link */}
        <Link href="/" className="interactive-element">
          <FaArrowLeft size={24} />
        </Link>

        <h1>Configurações</h1>

        {/* Avatar do Usuário */}
        <Image
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Avatar do usuário"
          width={40}
          height={40}
        />
      </header>

      {/* 2. MAIN (Conteúdo Principal) */}
      <main className="app-main">
        <div className="settings-menu">
          
          {/*  links */}
          <Link href="/perfil" className="settings-button interactive-element">
            <FaCog size={20} />
            <span>Editar Perfil</span>
          </Link>

          <button className="settings-button interactive-element">
            <FaFileContract size={20} />
            <span>Privacidade</span>
          </button>

          <button className="settings-button interactive-element">
            <FaGlobe size={20} />
            <span>Idioma</span>
          </button>
          
          <button className="settings-button interactive-element">
            <FaInfoCircle size={20} />
            <span>Sobre</span>
          </button>

        </div>
      </main>

      {/* sem footer */}

    </div>
  );
}