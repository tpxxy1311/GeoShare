import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import * as SecureStore from 'expo-secure-store';
import useStore from '../store/store'

const Settings = () => {

  async function getToken() {
    let result = await SecureStore.getItemAsync('authToken');
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }

  const logout = useStore((state)=>state.logout)

  const handleLogout = () =>{
    logout()
  }

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Get Token" onPress={getToken} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})