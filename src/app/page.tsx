// 1. Importar o componente Link do Next.js
import { FaCog, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    // classe principal
    <div className="app-container">

      {/* 1. HEADER (Cabeçalho) */}
      <header className="app-header">
        
        {/* 2. Substituir a tag <button> pela tag <Link> */}
        <Link href="/configuracoes" className="interactive-element">
          <FaCog size={24} />
        </Link>

        <h1>INICIO</h1>

        <div className="interactive-element">
          <Image
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="Avatar do usuário"
            width={40}
            height={40}
          />
        </div>
      </header>

      {/* 2. MAIN (Conteúdo Principal) */}
      <main className="app-main">
        {/* O conteúdo da página virá aqui */}
        {/* <p>Bem-vindo ao seu aplicativo!</p> */}
      </main>

      {/* 3. FOOTER (Rodapé de Navegação) */}
      <footer className="app-footer">
        
        {/* botão do footer com a de interação */}
        <button className="footer-button interactive-element">
          <FaUser size={24} />
          <span>Inicio</span>
        </button>
      </footer>

    </div>
  );
}