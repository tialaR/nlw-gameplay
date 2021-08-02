import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../Guild';
import { ListDivider } from '../ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export const Guilds = ({ handleGuildSelect }: Props) => {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            ower: true,
        }
    ]
  return (
    <View style={styles.container}>
        <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Guild 
                    onPress={() => handleGuildSelect(item)} 
                    data={item} 
                />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 69, paddingTop: 104 }}
            style={styles.guilds}
        />
    </View>
  );
}
