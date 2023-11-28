import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Friendslist from "../Views/friendlist";
import Map from "../Views/map";
import Settings from "../Views/settings";

const Tab = createBottomTabNavigator();

const TabGroup = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Friendlist" component={Friendslist}/>
            <Tab.Screen name="Map" component={Map} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}

export default TabGroup;