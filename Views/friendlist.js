import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import friendslistViewModel from '../viewmodels/friendslistViewModel'
import axios from 'axios'

const Friendslist = () => {

  const {friendsList, getFriends} = friendslistViewModel();

  useEffect(()=>{
    getFriends();
  },[])

  return (
    <View>
      <Text onPress={getFriends}>Friendslist</Text>
      <FlatList
        data={friendsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.username}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Friendslist

const styles = StyleSheet.create({})