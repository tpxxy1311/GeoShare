import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapStack from "./mapStack";
import Settings from "../views/settings";
import FriendsStack from "./friendsStack";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabGroup = () =>{
    return(
        <Tab.Navigator 
        initialRouteName="Map"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              if (route.name === 'Map') {
                iconName = focused
                ? 'map' : 'map-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Friends') {
                iconName = focused ? 'people' : 'people-outline';
              }
              
              return <Ionicons name={iconName} size={28} color={color} />;
            },
            tabBarLabel: ({ color, focused, item }) => {
				return focused
					? (<Text style={{ fontWeight: 'bold', fontSize: 11, color:color}} >{route.name}</Text>)
					: (<Text style={{ fontWeight: 'normal', fontSize: 11 }} >{route.name}</Text>)
			},
            tabBarActiveTintColor: '#00639c',
            tabBarInactiveTintColor: '#51606f',
            tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 2, backgroundColor: "#fcfcff"},
          })}
        >
            <Tab.Screen name="Friends" component={FriendsStack}/>
            <Tab.Screen name="Map" component={MapStack} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}

export default TabGroup;