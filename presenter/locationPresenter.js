import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const sendLocation = async (latitude, longitude, recipientUserId) =>{
    
    let authToken = await SecureStore.getItemAsync('authToken'); 

    const config = {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json', 
        }
    };

    const data = {
        latitude,
        longitude,
        recipientUserId,
    };
    
    try {
        const response = await axios.post('http://100.117.90.194:8080/api/v1/location/send', {
            data, 
            config
        });
        console.log(response)
    }
    catch (error) {
        console.error('Fehler beim Senden:', error);
    }
}