import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import FriendslistItem from '../components/friendslistItem';
import useStore from '../store/store';

const Friendslist = ({navigation}) => {

  const getFriends = useStore((state)=> state.getFriends)
  const friendsList = useStore((state)=> state.friendsList)

  useEffect(()=>{
    getFriends();
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={friendsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FriendslistItem username={item.username}/>
        )}
      />
      <TouchableOpacity style={styles.actionButton} onPress={()=> navigation.navigate('Add Friend')}>
          <Ionicons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default Friendslist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingLeft: 10,
  },
  actionButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    zIndex: 10,
    padding: 17,
    borderRadius: 15,
    backgroundColor:"#00639c",
    color:"white",
  }
})