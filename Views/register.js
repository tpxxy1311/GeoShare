import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{ useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleRegistration = async () => {
        console.log('Benutzername:', username);
        console.log('Passwort:', password);
        // API Call
        try {
            const response = await axios.post('http://localhost:8080/register', {
              username: username,
              password: password,
            });
            console.log(response)
        }
        catch (error) {
            console.error('Fehler bei der Registrierung:', error);
        }
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