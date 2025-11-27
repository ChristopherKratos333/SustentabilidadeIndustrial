
import React, { useState } from 'react';
import { Eye, EyeOff, Leaf, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const { signup, logout, loginWithGoogle, verifyEmail } = useAuth();
  const navigate = useNavigate();

  // Consistent First Version Logo
  const Logo = () => (
    <div className="flex items-center gap-0.5 select-none">
      <span className="text-[#1e5336] dark:text-white font-bold text-3xl tracking-tighter">EC</span>
      <div className="relative flex items-center justify-center">
        <span className="text-[#1e5336] dark:text-white font-bold text-3xl tracking-tighter">O</span>
        <Leaf className="w-4 h-4 text-[#72b63b] fill-[#72b63b] absolute pb-0.5" />
      </div>
      <span className="text-[#72b63b] font-bold text-3xl tracking-tighter">TRACE</span>
    </div>
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('As senhas não coincidem.');
    }

    try {
      setError('');
      setLoading(true);
      
      // 1. Cria o usuário na Autenticação (Auth)
      const userCredential = await signup(email, password);
      const user = userCredential.user;

      // 2. Envia e-mail de verificação
      if (user) {
        await verifyEmail(user);
      }

      // 3. Tenta salvar no Firestore com Timeout Forçado
      if (user) {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            createdAt: new Date().toISOString(),
            uid: user.uid
        };

        const saveToDbPromise = setDoc(doc(db, "users", user.uid), userData);
        
        const timeoutPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('timeout');
            }, 2000);
        });

        await Promise.race([saveToDbPromise, timeoutPromise]);
      }

      // 4. Logout forçado (já que criar conta faz login automático)
      await logout();

      // 5. Redireciona para o login com mensagem instruindo verificação
      navigate('/login', { state: { successMessage: 'Conta criada! Um e-mail de verificação foi enviado. Verifique antes de entrar.' } });

    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este e-mail já está em uso.');
      } else if (err.code === 'auth/weak-password') {
        setError('A senha deve ter pelo menos 6 caracteres.');
      } else if (err.code === 'auth/configuration-not-found' || err.code === 'auth/operation-not-allowed') {
        setError('Erro de configuração: Ative "Email/Senha" no Firebase Console (Menu Authentication).');
      } else {
        setError('Falha ao criar conta. Tente novamente.');
      }
    } finally {
      if (loading) setLoading(false);
    }
  }
  
  async function handleGoogleLogin() {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (err: any) {
      if (err.code === 'auth/configuration-not-found' || err.code === 'auth/operation-not-allowed') {
        setError('Erro de configuração: Ative o provedor "Google" no Firebase Console (Menu Authentication).');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setError('Login cancelado.');
      } else {
        setError('Falha ao entrar com o Google.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row dark:bg-gray-900">
      {/* Left Form Side - White */}
       <div className="md:w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center p-8 order-2 md:order-1 relative transition-colors">
        {/* Logo Positioned Top Left on White Side */}
        <div className="absolute top-8 left-8 hidden md:block">
           <Link to="/">
             <Logo />
           </Link>
        </div>

        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-between items-center md:hidden mb-8">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Crie sua conta</h2>
          
          {error && (
            <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded relative flex items-center gap-2" role="alert">
              <AlertCircle size={18} />
              <span className="block sm:inline text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
               <div className="relative w-1/2">
                <input 
                    type="text" 
                    id="firstName" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] focus:ring-1 focus:ring-[#1e5336] dark:focus:ring-[#72b63b]" 
                    placeholder="Primeiro Nome"
                />
                <label 
                    htmlFor="firstName" 
                    className="absolute left-3 -top-2.5 bg-white dark:bg-gray-900 px-1 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
                >
                    Primeiro Nome
                </label>
                </div>
                <div className="relative w-1/2">
                <input 
                    type="text" 
                    id="lastName" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] focus:ring-1 focus:ring-[#1e5336] dark:focus:ring-[#72b63b]" 
                    placeholder="Sobrenome"
                />
                <label 
                    htmlFor="lastName" 
                    className="absolute left-3 -top-2.5 bg-white dark:bg-gray-900 px-1 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
                >
                    Sobrenome
                </label>
                </div>
            </div>

            <div className="relative">
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] focus:ring-1 focus:ring-[#1e5336] dark:focus:ring-[#72b63b]" 
                placeholder="E-mail"
              />
              <label 
                htmlFor="email" 
                className="absolute left-3 -top-2.5 bg-white dark:bg-gray-900 px-1 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
              >
                E-mail
              </label>
            </div>

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] focus:ring-1 focus:ring-[#1e5336] dark:focus:ring-[#72b63b]" 
                placeholder="Senha"
              />
              <label 
                htmlFor="password" 
                className="absolute left-3 -top-2.5 bg-white dark:bg-gray-900 px-1 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
              >
                Senha
              </label>
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

             <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                id="confirmPassword" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-[#1e5336] dark:focus:border-[#72b63b] focus:ring-1 focus:ring-[#1e5336] dark:focus:ring-[#72b63b]" 
                placeholder="Confirme sua senha"
              />
              <label 
                htmlFor="confirmPassword" 
                className="absolute left-3 -top-2.5 bg-white dark:bg-gray-900 px-1 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm"
              >
                Confirme sua senha
              </label>
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#1e5336] text-white py-3 rounded-lg font-bold hover:bg-[#153d26] transition-colors shadow-md mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Criando conta...' : 'Crie minha conta'}
            </button>

            <div className="relative flex items-center justify-center my-6">
               <div className="border-t border-gray-300 dark:border-gray-700 w-full absolute"></div>
               <span className="bg-white dark:bg-gray-900 px-3 text-gray-500 dark:text-gray-400 relative z-10 text-sm">ou</span>
            </div>

            <button 
              type="button" 
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 4.63c1.61 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Faça login com o Google
            </button>

            <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
               Tem uma conta? <Link to="/login" className="text-blue-400 hover:underline font-medium">Entrar</Link>
            </div>

          </form>
        </div>
      </div>

      {/* Right Gradient Side - Green */}
      <div className="md:w-1/2 bg-gradient-to-br from-[#72b63b] to-[#1e5336] relative flex items-center justify-center p-12 overflow-hidden order-1 md:order-2">
        {/* Abstract blur shapes */}
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#72b63b] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#1e5336] rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 text-right w-full max-w-md">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            EcoTrace te <br />
            antecipa.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
