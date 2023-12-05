import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FriendslistItem = ({username}) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.profileImage}/>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Vorname Nachname</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  )
}

export default FriendslistItem

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20,
        backgroundColor: '#00639c',
    },
    textContainer: {
        flex: 1,
    },    
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
      username: {
        fontSize: 14,
        color: 'gray',
    },
})