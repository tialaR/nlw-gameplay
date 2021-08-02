import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: ButtonIconProps) {
    return(
        <RectButton 
            {...rest } 
            style={styles.container}
        >
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    );
}