import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './pages/StartPage';
import DoctorSignUp from './pages/DoctorSignUp';
import PatientSignUp from './pages/PatientSignUp';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#23a4e4' }}>
      <StartPage />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: '#23a4e4',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }} />
        <Stack.Screen 
          name="doctors-sign-up" 
          component={DoctorSignUp} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        />
        <Stack.Screen 
          name="patient-sign-up" 
          component={PatientSignUp} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

