import { NavigationContainer } from "@react-navigation/native"
import TabGroup from "./tabNavigation";
import AuthenticationStack from "./authenticationStack";
import useStore from "../store/store";
import { useEffect } from "react";
import * as SecureStore from 'expo-secure-store';

const Navigation = () =>{

    const logedIn = useStore((state)=> state.logedIn)
    const login = useStore((state)=> state.login)
    const logout = useStore((state)=> state.logout)

    const checkLogin = async () =>{
        let result = await SecureStore.getItemAsync('authToken');
        if (result) {
            login()
        }   
        else {
            logout()
        }
    }

    useEffect(()=>{
        checkLogin();
    },[])

    return(
        <NavigationContainer>
            {logedIn ? <TabGroup /> : <AuthenticationStack />}
        </NavigationContainer>
    )
}

export default Navigation;