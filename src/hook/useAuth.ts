// importações
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

// criando hook de acesso as funções do contexto
const useAuth = () => useContext(AuthContext);

// exportação
export default useAuth;
