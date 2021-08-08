import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { SignIn } from '../screens/SignIn';

export function Routes() {
    const { user } = useAuth();

    return(
        <NavigationContainer>
            { user.id ? <AuthRoutes /> : <SignIn /> }
        </NavigationContainer>
    );
}

/*
LÓGICA: 

-> quando o contexto user.id mudar automaticamente o usuário será redirecionado para o dashboard da aplicação

{ user.id ? <AuthRoutes /> : <SignIn /> } 
-> Usuário logado terá acesso a área privada do app <AuthRoutes />;
-> Se existe um user.id é porque tenho um usuário logado, caso contrário
é porque não tenho e com isso de vo encaminhar o mesmo para a área de login do app <SignIn />.

-> Essa é uma das vantagens de utilizar estado com contextos, pois quando atualizamos
o estado no momento da autenticação por exemplo isso reflete no redirecionamento de 
telas do app.
*/