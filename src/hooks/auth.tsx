import React, { 
  createContext, 
  useCallback, 
  useState, 
  useContext, 
  ReactNode 
} from 'react';
import { api } from '../services/api';

import * as AuthSession from 'expo-auth-session';
import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
} from '../configs';

type User = {
  id: string;
  userName: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  }
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      //authUrl -> Para onde vai qdo o usuário começa o processo de autenticação (url de autorização de autenticação)
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

    if(type === 'success') {
       //Injetando o token no header das futuras requisições
       //Estabelecendo q/ em todas as requisições q/ o usuário fizer a partir de agora será enviado o token no cabeçalho
      api.defaults.headers.authorization = `Bearer ${params.access_token}`;

       //url p/ recuprar informações do user
      const userInfo = await api.get('/users/@me');

      const firstName = userInfo.data.username.split(' ')[0]; //ex: ['Tiala', 'Rocha']
      
      //A imagem deve ser a url que irá buscar a memsa no CDN do discord
      userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`; //Mudando o valor de uma prop do objeto userInfo

      //Alimentando informações do user:
      setUser({
        ...userInfo.data, //Espalhando todas as props contidas no serInfo.data na variavel user
        firstName, //firstName é uma prop que nós criamos
        token: params.access_token, //a informação do token vem na autenticação
      });

      setLoading(false);
    } else {
      setLoading(false);
    }

    } catch {
      //Lançando a exceção para quem chamou a função signIn()
      throw new Error('Não foi possível autenticar');
    }
  }

  return(
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

//Hook de autenticação:
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth,
};
