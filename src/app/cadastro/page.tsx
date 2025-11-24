import Image from 'next/image';
import Link from 'next/link';

export default function CadastroPage() {
  return (
    <div className="login-container">
      
      {/* Cartão Central  */}
      <div className="login-card">
        
        {/* Círculo com o Logo */}
        <div className="login-logo-circle">
          <Image 
            src="/logo.png" 
            alt="Logo Açaí Bio" 
            width={100} 
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Formulário */}
        <form className="profile-form">
          
          {/* Campo Nome (Novo) */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              id="name" 
              className="form-input" 
              placeholder="Lucas Gabriel" 
            />
          </div>

          {/* Campo Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="LuccaGa1@gmail.com" 
            />
          </div>

          {/* Campo Senha */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="............" 
            />
          </div>

          {/* Botão Cadastrar */}
          {/* Ao clicar, leva para o Login para a pessoa entrar na conta criada */}
          <Link href="/login" style={{ width: '100%' }}> 
            <button type="button" className="btn-login">
              Cadastrar
            </button>
          </Link>

        </form>

      </div>
    </div>
  );
}