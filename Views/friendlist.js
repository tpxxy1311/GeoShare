import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { useEffect } from 'react'
import useStore from '../store/store'

const Friendslist = () => {

  const newFriend = {
    id: 11,
    username : "tim.ptrs",
  }

  const getFriends = useStore((state)=> state.getFriends)
  const friendsList = useStore((state)=> state.friendsList)
  const addFriend = useStore((state) => state.addFriend)

  useEffect(()=>{
    getFriends();
  },[])

  return (
    <View style={styles.list}>
      <Button title="Freund hinzufügen" onPress={()=>addFriend(newFriend)} />
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

const styles = StyleSheet.create({
  list: {
    marginTop: 50,
    marginLeft: 50,
  }
})