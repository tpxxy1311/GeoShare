import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{ useState } from 'react';
import { handleRegister } from '../presenter/authPresenter';

const Register = () => {
    
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
      <Button title="Register" onPress={()=> handleRegister(username, password)} />
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