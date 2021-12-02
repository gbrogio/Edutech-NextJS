// Metodos de Login

// Importações das dependencias necessárias
import { createContext, useEffect, useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';

import { authParams } from '../lib/firebase';
import {  UserCredential, User } from '@firebase/auth';


// criando contexto
const AuthContext = createContext(null);


// criando formato de usuário
const formatUser = (user: User) => ({
  email: user.email,
  name: user.displayName,
  photo: user.photoURL,
  uid: user.uid,
});

// criando Provedor de funções do Login
export const AuthProvider = function ({ children }) {
  // estados
  const [isUser, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // cookie / sessão
  const setSession = (session) => {
    if (session) {
      setCookie(undefined, 'EDUTECH_GBROGIO_COOKIE', session, {
        maxAge: 1 * 365 * 24 * 60 * 60 * 1000,
        path: '/',
      });
    } else {
      destroyCookie(undefined, 'EDUTECH_GBROGIO_COOKIE');
    }
  };

  // criando usuário
  const handleUser = async (currentUser: User) => {
    if (currentUser) {
      const formattedUser = formatUser(currentUser);
      await setUser(formattedUser);
      setSession(currentUser.refreshToken);

      return currentUser.displayName;
    }
    setUser(null);
    setSession(false);

    return false;
  };

  // login google
  const signInGoogle = () => {
    try {
      setLoading(true);
      authParams.signInWithRedirect(authParams.auth, authParams.providers.google)
        .then((result) => {
          const { user } = result;
          handleUser(user);
        });
    } finally {
      setLoading(false);
    }
  };

  // sair da conta
  const signOut = () => {
    try {
      setLoading(true);
      authParams.signOut(authParams.auth).then(() => {
        destroyCookie(undefined, 'EDUTECH_GBROGIO_COOKIE');
      });
    } finally {
      setLoading(false);
    }
  };

  // deletar conta
  const deleteAccount = () => {
    try {
      setLoading(true);
      authParams.deleteUser(authParams.auth.currentUser).then(() => {
        destroyCookie(undefined, 'EDUTECH_GBROGIO_COOKIE');
      });
    } finally {
      setLoading(false);
    }
  };

  // reiniciar
  useEffect(() => {
    const unSubscribe = authParams.onIdTokenChanged(authParams.auth, handleUser);

    return () => unSubscribe();
  }, []);


  // componente com os provedores
  return (
    <AuthContext.Provider value={{
      isUser,
      isLoading,
      signInGoogle,
      signOut,
      deleteAccount,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer; // permite o uso dos valores como funções

// exportação
export default AuthContext;
