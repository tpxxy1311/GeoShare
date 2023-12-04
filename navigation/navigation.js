import { NavigationContainer } from "@react-navigation/native"
import TabGroup from "./tabNavigation";
import AuthenticationStack from "./authenticationStack";
import useStore from "../store/store";

const Navigation = () =>{

    const logedIn = useStore((state)=> state.logedIn)

    return(
        <NavigationContainer>
            {logedIn ? <TabGroup /> : <AuthenticationStack />}
        </NavigationContainer>
    )
}

export default Navigation;