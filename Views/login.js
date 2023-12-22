import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
import { handleLogin } from '../presenter/authPresenter';

const Login = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
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
        <Button title="Login" onPress={()=> handleLogin(username, password)} />
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