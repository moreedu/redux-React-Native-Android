import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Button } from 'react-native';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
// import logo from './assets/images/logo.bmp';

// A estrutura empregada é a nova após a atualização do React-navigation. Ver pdf... módulo 06

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
      headerLayoutPreset="center"
      headerBackTitleVisible={false}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'RocketShoes' }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Cart}
        options={{ title: 'Carrinho - Itens' }}
      />
    </Stack.Navigator>
  );
}
