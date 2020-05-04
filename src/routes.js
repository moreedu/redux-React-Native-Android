import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
// import logo from './assets/images/logo.bmp';

// A estrutura empregada é a nova após a atualização do React-navigation. Ver pdf... módulo 06

function navigateToCarts({ navigation }) {
  navigation.navigate('Carrinho');
}

function navigateToMain({ navigation }) {
  navigation.navigate('Main');
}

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
        options={{
          title: 'RocketShoes',
          headerRight: () => (
            <Button
              onPress={() => navigateToCarts()}
              title="Carrinho"
              color="#000"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Cart}
        options={
          (({ route }) => ({ title: route.params.user.name }),
          {
            headerRight: () => (
              <Button
                onPress={() => navigateToMain()}
                title="Home"
                color="#000"
              />
            ),
          })
        }
      />
    </Stack.Navigator>
  );
}
