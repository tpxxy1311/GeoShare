import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import * as SecureStore from 'expo-secure-store';
import useStore from '../store/store'

const Settings = () => {

  async function getToken() {
    let result = await SecureStore.getItemAsync('authTokecc');
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
    <View style={styles.container}>
      <Pressable onPress={getToken}>
        <Text>Show JWT</Text>
      </Pressable>
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 20,
  },
  logoutButton: {
    borderRadius: 50,
    width: 80,
    padding: 10,
    backgroundColor: '#00639c',
  }
})