import React from 'react';
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { BackGround } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (err) {
            Alert.alert(err);
        }
    }

    return(
        <BackGround>
            <View style={styles.container}>
                <Image source={IllustrationImg} resizeMode='stretch' style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subTitle}>
                        Crie grupos para jogar seus games {'\n'} 
                        favoritos com seus amigos
                    </Text>

                    { 
                        loading 
                            ? <ActivityIndicator color={theme.colors.primary} /> 
                            : <ButtonIcon 
                                title="Entrar com discord"
                                onPress={handleSignIn}
                            />
                    }
                </View>
            </View>
        </BackGround>
    );
}