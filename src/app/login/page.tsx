'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      
      {/* Cartão Central */}
      <div className="login-card">
        
        {/* Círculo com o Logo */}
        <div className="login-logo-circle">
          <Image 
            src="https://placehold.co/80x80/white/764ba2?text=🥤" 
            alt="Logo Açaí Bio" 
            width={80} 
            height={80}
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </div>

        {/* Título */}
        <h1 className="auth-title">Bem-vindo</h1>
        <p className="auth-subtitle">Entre na sua conta para continuar</p>

        {/* Formulário */}
        <form className="profile-form"> 
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaUser className="inline mr-2" />
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input" 
              placeholder="seu@email.com" 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FaLock className="inline mr-2" />
              Senha
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input pr-12" 
                placeholder="Digite sua senha" 
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          {/* Link Esqueci a senha */}
          <div className="text-right">
            <Link href="#" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
              Esqueci minha senha
            </Link>
          </div>

          {/* Botão Entrar */}
          <Link href="/" style={{ width: '100%' }}> 
            <button type="button" className="btn-login">
              Entrar
            </button>
          </Link>

        </form>

        {/* Divider */}
        <div className="auth-divider">
          Não tem conta?
        </div>

        {/* Link de Cadastro */}
        <Link href="/cadastro" className="signup-link">
          Criar nova conta
        </Link>

      </div>
    </div>
  );
}