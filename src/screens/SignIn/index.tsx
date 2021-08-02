import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { BackGround } from '../../components/Background';

import IlustrationImg from '../../assets/ilustration.png';
import { styles } from './styles';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return(
        <BackGround>
            <View style={styles.container}>
                <Image source={IlustrationImg} resizeMode='stretch' style={styles.image} />
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

                    <ButtonIcon 
                        title="Entrar com discord"
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </BackGround>
    );
}