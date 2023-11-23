import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="friendslist" options={{title: "Friends"}}/>
        <Tabs.Screen name="index"/>
        <Tabs.Screen name="settings" options={{title: "Settings"}}/>
    </Tabs>
  )
}

export default Layout