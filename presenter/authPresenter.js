import axios from "axios";
import useStore from "../store/store";
import * as SecureStore from 'expo-secure-store';

export const handleLogin = async (username, password) =>{

    const setLogin = useStore.getState().login

    console.log('Benutzername:', username);
    console.log('Passwort:', password);
    // API Call
    try {
        const response = await axios.post('http://100.117.90.194:8080/api/v1/auth/login', {
            username: username,
            password: password,
        });
        console.log(response.data)
        //Save Token in SecureStore to maintain Login 
        const token = response.data.token
        await SecureStore.setItemAsync('authToken', token);
        //Set State
        setLogin()
    }
    catch (error) {
        console.error('Fehler beim Login:', error);
    }
}

export const handleRegister = async (username, password) =>{

    const setLogin = useStore.getState().login

    console.log('Benutzername:', username);
    console.log('Passwort:', password);
    // API Call
    try {
        const response = await axios.post('http://100.117.90.194:8080/api/v1/auth/register', {
            username: username,
            password: password,
        });
        console.log(response.data)
        //Save Token in SecureStore to maintain Login 
        const token = response.data.token
        await SecureStore.setItemAsync('authToken', token);
        //Set State
        setLogin()
    }
    catch (error) {
        console.error('Fehler bei der Registrierung:', error);
    }
}

export const handleLogout = async () =>{

    const setLogout = useStore.getState().logout

    await SecureStore.deleteItemAsync('authToken');
    setLogout()
}