import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStore from '../store/store'

const Settings = () => {

  const logout = useStore((state)=>state.logout)
  const handleLogout = () =>{
    logout()
  }
  
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})