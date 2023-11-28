import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import React, {useRef, useState, useEffect} from 'react';
import * as Location from 'expo-location'
import { Ionicons } from '@expo/vector-icons';

const Map = () => {

    const [errorMsg, setErrorMsg] = useState(null);
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const mapRef = useRef();

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          setLatitude(location.coords.latitude)
          setLongitude(location.coords.longitude);
        })();
    }, []);

    const sendMyLocation = () =>{

    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
            </MapView>
            <View style={styles.actionButton}>
                <Ionicons name="location" size={28} color="white" />
            </View>
        </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  actionButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    zIndex: 10,
    padding: 20,
    borderRadius: 15,
    backgroundColor:"#00639c",
    color:"white",
  }
})