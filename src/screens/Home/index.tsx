import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { BackGround } from '../../components/Background';

import { styles } from './styles';
import { useState } from 'react';

const appointments = [
    {
        id: 1,
        guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            ower: true
        },
        category: '1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
        id: 2,
        guild: {
            id: '2',
            name: 'Lendários',
            icon: null,
            ower: true
        },
        category: '1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
        id: 3,
        guild: {
            id: '3',
            name: 'Lendários',
            icon: null,
            ower: true
        },
        category: '1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
        id: 4,
        guild: {
            id: '4',
            name: 'Lendários',
            icon: null,
            ower: true
        },
        category: '1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
        id: 5,
        guild: {
            id: '5',
            name: 'Lendários',
            icon: null,
            ower: true
        },
        category: '1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
];

export function Home() {
    const navigation = useNavigation();

    const [category, setCategory] = useState('');

    function handleCategorySelected(categoryId: string) {
        category === categoryId ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentsDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentsCreate');
    }

    return(
        <BackGround>
           <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleAppointmentCreate}
                />
            </View> 
            
                <CategorySelect
                     categorySelected={category}
                     setCategory={handleCategorySelected}
                />   
                
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                    />
                    <FlatList 
                        data={appointments}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={handleAppointmentDetails}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        style={styles.matches}
                        contentContainerStyle={{ marginBottom: 69 }}
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
        </BackGround>
    );
}