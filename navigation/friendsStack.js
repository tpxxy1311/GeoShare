import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friendslist from '../views/friendlist';
import AddFriend from '../views/addFriend';

const Stack = createNativeStackNavigator();

const FriendsStack = () => {
    
  return (
    <Stack.Navigator >
        <Stack.Screen name="Friendslist" component={Friendslist} />
        <Stack.Screen name="Add Friend" component={AddFriend} />
    </Stack.Navigator>
  );
}

export default FriendsStack;