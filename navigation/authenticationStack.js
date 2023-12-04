import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/login';
import Register from '../views/register';

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthenticationStack;