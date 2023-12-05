import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const FriendslistSearchbar = () => {
  return (
    <View style={styles.searchbar}>
        <Ionicons style={styles.searchIcon} name="search" size={24} color="gray"/>
        <TextInput placeholder="Freunde durchsuchen..."/>
    </View>
  )
}

export default FriendslistSearchbar;

const styles = StyleSheet.create({
    searchbar: {
        borderRadius: 20,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
})