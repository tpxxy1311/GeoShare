import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleRegistration = () => {
        console.log('Registrierung abgeschickt!');
        console.log('Benutzername:', username);
        console.log('Passwort:', password);
        // API Call
    };
    

    return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        placeholder="Benutzername"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        placeholder="Passwort"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button title="Registrieren" onPress={handleRegistration} />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})