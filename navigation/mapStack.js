import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../views/map';
import SendLocation from '../views/sendLocation';

const Stack = createNativeStackNavigator();

const MapStack = () => {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name="MapView" component={Map} />
        <Stack.Screen name="Send" component={SendLocation} />
    </Stack.Navigator>
  );
}

export default MapStack;