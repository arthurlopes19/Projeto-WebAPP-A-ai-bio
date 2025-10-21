// Importe os ícones e componentes necessários
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function PerfilPage() {
  return (
    <div className="app-container">
      
      {/* 1. HEADER (Cabeçalho) */}
      <header className="app-header">
        <Link href="/configuracoes" className="interactive-element">
          <FaArrowLeft size={24} />
        </Link>
        <h1>Perfil</h1>
        {/* Placeholder para manter o espaçamento */}
        <div style={{ width: '40px' }}></div> 
      </header>

      {/* 2. MAIN (Conteúdo Principal) */}
      <main className="app-main">
        
        <div className="profile-picture-container">
          <Image
            src="https://cdna.artstation.com/p/assets/images/images/051/511/534/large/mo-sy-11-2.jpg"
            alt="Foto de Perfil"
            width={120}
            height={120}
            className="profile-picture"
          />
        </div>

        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" defaultValue="Jose RocketLeague" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" defaultValue="JoseGuarulho@gmail.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" id="password" className="form-input" defaultValue="************" />
            <button className="change-password-link">Alterar a Senha</button>
          </div>
        </form>

      </main>
    </div>
  );
}