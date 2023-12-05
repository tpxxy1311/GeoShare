import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import useStore from '../store/store';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const Login = ({navigation}) => {

    const login = useStore((state)=> state.login)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleLogin = async () => {
        console.log('Benutzername:', username);
        console.log('Passwort:', password);
        // API Call
        try {
            const response = await axios.post('http://100.117.90.194:8080/api/v1/auth/login', {
              username: username,
              password: password,
            });
            console.log(response.data)
            const token = response.data.token
            await SecureStore.setItemAsync('authToken', token);
            login()
        }
        catch (error) {
            console.error('Fehler bei der Registrierung:', error);
        }
    };

    return (
        <View style={styles.container}>
        <Text>Login</Text>
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
        <Button title="Login" onPress={handleLogin} />
        <Button title="No Account? Register here" onPress={()=>navigation.push('Register')} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})