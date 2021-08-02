import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

type ButtonIconProps = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
    return(
        <RectButton 
            {...rest } 
            style={styles.container}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    );
}