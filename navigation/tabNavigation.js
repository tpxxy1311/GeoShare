import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Friendslist from "../views/friendlist";
import Map from "../views/map"
import Settings from "../views/settings";
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
              } else if (route.name === 'Friendlist') {
                iconName = focused ? 'people' : 'people-outline';
              }
              
              return <Ionicons name={iconName} size={32} color={color} />;
            },
            tabBarLabel: ({ color, focused, item }) => {
				return focused
					? (<Text style={{ fontWeight: 'bold', fontSize: 14, color:color}} >{route.name}</Text>)
					: (<Text style={{ fontWeight: 'normal', fontSize: 14 }} >{route.name}</Text>)
			},
            tabBarActiveTintColor: '#00639c',
            tabBarInactiveTintColor: '#51606f',
            tabBarStyle: { height: 70, paddingBottom: 5, paddingTop: 2, backgroundColor: "#fcfcff"},
          })}
        >
            <Tab.Screen name="Friendlist" component={Friendslist}/>
            <Tab.Screen name="Map" component={Map} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    )
}

export default TabGroup;