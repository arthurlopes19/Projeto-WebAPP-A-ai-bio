import { FaArrowLeft, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function CuriosidadesPage() {
  return (
    <div className="app-container">

      {/* 1. HEADER (Cabeçalho) */}
      <header className="app-header">
        <Link href="/" className="interactive-element">
          <FaArrowLeft size={24} />
        </Link>
        <h1>Curiosidades</h1>
        <div style={{ width: '24px' }}></div> {/* Espaço para centralizar */}
      </header>

      {/* 2. MAIN (Conteúdo) */}
      <main className="app-main">
        
        <h2 className="curiosidade-title">Curiosidade</h2>

        {/* Cartão Azul */}
        <div className="curiosity-card">
          <div style={{ minWidth: '40px' }}>
             <FaLightbulb size={32} color="#FFF" />
          </div>
          <p className="curiosity-text">
            O nome "Açaí" vem de uma palavra da língua Tupi Guarani, "ïwasa'i", 
            que significa "fruto que chora", referindo-se ao líquido roxo liberado 
            durante o preparo da polpa.
          </p>
        </div>

        {/* Imagens lado a lado */}
        <div className="images-row">
          <Image 
            src="https://images.unsplash.com/photo-1596386461350-326256694e4e?auto=format&fit=crop&w=300&q=80" 
            alt="Pessoa segurando açaí" 
            width={150} height={100} 
            className="info-image-small"
            unoptimized
          />
           <Image 
            src="https://images.unsplash.com/photo-1597916829826-05213458d224?auto=format&fit=crop&w=300&q=80" 
            alt="Palmeiras de açaí na natureza" 
            width={150} height={100} 
            className="info-image-small"
            unoptimized
          />
        </div>

        {/* Seção Sobre a Árvore */}
        <h3 className="section-title">Sobre a árvore</h3>
        
        <div className="tree-grid">
          <div className="tree-text-col">
            <p className="info-text">
              A árvore do <u>açaí</u> é chamada cientificamente de <i>Euterpe oleracea</i>. 
              No entanto, popularmente, ela é conhecida como palmeira-açaí ou açaizeiro.
            </p>
            <p className="info-text">
              Ela faz parte da família das palmeiras e é uma espécie nativa da região Amazônica,
              onde é cultivada para a produção do açaí!
            </p>
          </div>
          <div className="tree-image-col">
            <Image 
              src="https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&w=300&q=80" 
              alt="Cacho de açaí carregado" 
              width={120} height={180} 
              unoptimized
            />
          </div>
        </div>

        {/* Seção Como Identificar */}
        <h3 className="section-title">Como identificar um pé de açaí?</h3>
        <p className="info-text">
          O açaizeiro possui algumas características específicas do seu crescimento:
        </p>
        <ul className="id-list">
          <li>Tronco fino e liso, geralmente com coloração clara.</li>
          <li>Folhas longas e finas, podendo chegar a 2 metros de comprimento.</li>
          <li>Produção de cachos de frutos pequenos e arredondados, de coloração roxa escura.</li>
        </ul>

      </main>
    </div>
  );
}