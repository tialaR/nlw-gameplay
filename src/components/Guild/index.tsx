import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    ower: boolean;
} 

type Props  = TouchableOpacityProps & {
    data: GuildProps;
}

export const Guild = ({ data, ...rest }: Props) => {
  return (
      <TouchableOpacity
        {...rest}
        activeOpacity={0.7}
        style={styles.container}
     >
          <GuildIcon />
          <View style={styles.content}>
            <View>
                <Text style={styles.title}>
                    {data.name}
                </Text>
                <Text style={styles.type}>
                    { data.ower ? 'Administrador' : 'Convidado' }
                </Text>
            </View>
          </View>

          <Feather name="chevron-right" color={theme.colors.heading} size={24} />
      </TouchableOpacity>
  );
}
