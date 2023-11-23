import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
      </MapView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  }
})