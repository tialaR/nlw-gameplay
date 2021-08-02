import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { BackGround } from './src/components/Background';

export default function App() {

  //Carregamento das fontes instaladas:
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  //Enquanto as fontes não carregarem -> mostra a tela de splash
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <BackGround>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </BackGround>
  );
}

