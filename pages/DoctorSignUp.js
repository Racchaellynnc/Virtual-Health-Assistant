import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default function DoctorSignUp() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Form type='SignUp'/>
      <View style={styles.signUpLink}>
        <Text style={styles.signUpText}>Already have an account?</Text>
        <Text style={styles.signUp}>Sign in</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23a4e4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpLink: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  signUpText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  signUp: {
    color: 'rgba(200, 200, 200, 0.6)',
    fontSize: 16,
    fontWeight: '500',
  }
});