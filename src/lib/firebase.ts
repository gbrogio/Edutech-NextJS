// importações
import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, onIdTokenChanged, signOut, signInWithRedirect, deleteUser
} from 'firebase/auth';

// Configuração da API
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MENSSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// verificar se o app ja foi inicializado
if (getApps().length < 1) {
  initializeApp(firebaseConfig);
}

// Autenticação e Provedores
const auth = getAuth();
const providerGoogle = new GoogleAuthProvider();

// objetos de Autenticação (para facilitar na hora de exportar)
const authParams = {
  auth,
  providers: {
    google: providerGoogle,
  },
  onIdTokenChanged,
  signInWithRedirect,
  signOut,
  deleteUser,
};

// exportação
export {
  authParams,
};
