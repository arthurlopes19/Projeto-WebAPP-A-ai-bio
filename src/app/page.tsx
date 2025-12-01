// Importações de Ícones e Componentes
import { FaCog, FaHome, FaBolt, FaHeart, FaBrain, FaDumbbell, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="app-container">

      {/* 1. HEADER (Cabeçalho) */}
      <header className="app-header">
        
        <Link href="/configuracoes" className="interactive-element">
          <FaCog size={24} />
        </Link>

        {/* Logo Central */}
        <div className="interactive-element">
             <Image 
              src="/img/logo.png" 
              alt="Logo Açaí Bio" 
              width={100} 
              height={40} 
              style={{ objectFit: 'contain' }}
              unoptimized 
            />
        </div>

        <div className="interactive-element">
          <Image
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="Avatar do usuário"
            width={40}
            height={40}
            className="profile-picture" 
            style={{ width: '40px', height: '40px' }}
            unoptimized 
          />
        </div>
      </header>

      {/* 2. MAIN (Conteúdo Principal) */}
      <main className="app-main">
        
        {/* Título e Botão */}
        <h2 className="welcome-title">Bem-vindo ao Açaí Bio</h2>
        <button className="cta-button interactive-element">
          Conheça mais sobre nós
        </button>

        {/* Cartão de Benefícios (Verde) */}
        <div className="benefits-card">
          <div className="benefits-title">Benefícios do Açaí</div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <FaBolt size={24} color="#F59E0B" /> 
              <span>Traz energia natural para o dia</span>
            </div>
            
            <div className="benefit-item">
              <FaHeart size={24} color="#EF4444" /> 
              <span>Rico em antioxidantes, vitaminas e minerais</span>
            </div>

            <div className="benefit-item">
              <FaBrain size={24} color="#F97316" /> 
              <span>Melhora o foco e o humor</span>
            </div>

            <div className="benefit-item">
              <FaDumbbell size={24} color="#555" /> 
              <span>Bom para pré treino e pós treino</span>
            </div>
          </div>
        </div>

        {/* Seção Tipos de Açaí */}
        <div className="types-title">Tipos de açaí</div>
        
        <div className="types-grid">
            {/* IMAGEM 1: Estilo SP */}
            <div className="type-card interactive-element">
                <Image 
                    src="/img/sorvete_copo.png" 
                    alt="Copo de açaí estilo sorvete com leite e granola" 
                    width={120} 
                    height={120} 
                    className="type-image"
                    unoptimized 
                />
                <span className="type-label">Sorvete de açaí em copo</span>
            </div>

            {/* IMAGEM 2: Estilo Pará */}
            <div className="type-card interactive-element">
                <Image 
                    src="/img/tradicional.png" 
                    alt="Tigela de açaí tradicional originário do Pará" 
                    width={120} 
                    height={120} 
                    className="type-image"
                    unoptimized 
                />
                <span className="type-label">Açaí tradicional em tigela</span>
            </div>
        </div>

        {/* Seta para a direita COM LINK (MUDANÇA AQUI) */}
        <Link href="/curiosidades" className="arrow-container interactive-element">
            <FaArrowRight size={24} color="#333" />
        </Link>

      </main>

      {/* 3. FOOTER (Rodapé de Navegação) */}
      <footer className="app-footer">
        <button className="footer-button interactive-element">
          <FaHome size={24} />
          <span>Início</span>
        </button>
      </footer>

    </div>
  );
}