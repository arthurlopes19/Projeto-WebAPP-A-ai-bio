import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="login-container">
      
      {/* Cartão Central */}
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
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="Digite o Email" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="Digite a Senha" 
            />
          </div>

          {/* Botão Entrar (Leva para a Home) */}
          <Link href="/" style={{ width: '100%' }}> 
            <button type="button" className="btn-login">
              Entrar
            </button>
          </Link>

        </form>

        {/* Link de Cadastro (Leva para a tela de Cadastro) */}
        <Link href="/cadastro" className="signup-link">
          Cadastrar conta?
        </Link>

      </div>
    </div>
  );
}