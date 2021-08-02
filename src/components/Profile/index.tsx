import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Tiala
                    </Text>
                </View>
                
                <Text style={styles.mensage}>
                    Hoje é dia de vitória
                </Text>
            </View>

            
        </View>
    );
}