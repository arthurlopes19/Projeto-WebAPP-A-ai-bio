'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';

export default function CadastroPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== '';

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
        <h1 className="auth-title">Criar Conta</h1>
        <p className="auth-subtitle">Preencha os dados para se cadastrar</p>

        {/* Formulário */}
        <form className="profile-form">
          
          {/* Campo Nome */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <FaUser className="inline mr-2" />
              Nome Completo
            </label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleInputChange}
              className="form-input" 
              placeholder="Seu nome completo" 
              required
            />
          </div>

          {/* Campo Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="inline mr-2" />
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="form-input" 
              placeholder="seu@email.com" 
              required
            />
          </div>

          {/* Campo Senha */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FaLock className="inline mr-2" />
              Senha
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                value={formData.password}
                onChange={handleInputChange}
                className="form-input pr-12" 
                placeholder="Crie uma senha segura" 
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

          {/* Campo Confirmar Senha */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock className="inline mr-2" />
              Confirmar Senha
            </label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`form-input pr-12 ${
                  formData.confirmPassword && 
                  (passwordsMatch ? 'border-green-500' : 'border-red-500')
                }`}
                placeholder="Confirme sua senha" 
                required
              />
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                {formData.confirmPassword && passwordsMatch && (
                  <FaCheck className="text-green-500" size={16} />
                )}
              </div>
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {formData.confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-sm mt-1">As senhas não coincidem</p>
            )}
          </div>

          {/* Requisitos da senha */}
          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-1">A senha deve conter:</p>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li className={formData.password.length >= 8 ? 'text-green-600' : ''}>
                Pelo menos 8 caracteres
              </li>
              <li className={/[A-Z]/.test(formData.password) ? 'text-green-600' : ''}>
                Uma letra maiúscula
              </li>
              <li className={/[0-9]/.test(formData.password) ? 'text-green-600' : ''}>
                Um número
              </li>
            </ul>
          </div>

          {/* Checkbox de termos */}
          <div className="flex items-start space-x-2 mb-4">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Eu concordo com os{' '}
              <Link href="#" className="text-purple-600 hover:text-purple-800">
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link href="#" className="text-purple-600 hover:text-purple-800">
                Política de Privacidade
              </Link>
            </label>
          </div>

          {/* Botão Cadastrar */}
          <Link href="/login" style={{ width: '100%' }}> 
            <button type="button" className="btn-login">
              Criar Conta
            </button>
          </Link>

        </form>

        {/* Divider */}
        <div className="auth-divider">
          Já tem conta?
        </div>

        {/* Link de Login */}
        <Link href="/login" className="signup-link">
          Fazer login
        </Link>

      </div>
    </div>
  );
}