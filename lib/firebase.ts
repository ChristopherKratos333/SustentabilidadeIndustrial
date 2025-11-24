import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase fornecida pelo console
const firebaseConfig = {
  apiKey: "AIzaSyBZDOHOeWYYLwtLS9630My6BKfJoCTTmZ4",
  authDomain: "ecotrace-a51b1.firebaseapp.com",
  projectId: "ecotrace-a51b1",
  storageBucket: "ecotrace-a51b1.firebasestorage.app",
  messagingSenderId: "608585747524",
  appId: "1:608585747524:web:a1c0d56199fb2eae958011",
  measurementId: "G-LXS29HM8Z6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços de Autenticação e Banco de Dados para uso no app
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;