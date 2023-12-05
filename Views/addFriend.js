import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FriendslistSearchbar from '../components/friendslistSearchbar';
import useStore from '../store/store';

const AddFriend = () => {

    const newFriend = {
        id: 11,
        username : "tim.ptrs",
    }

    const addFriend = useStore((state) => state.addFriend)

    return (
        <View>
        <FriendslistSearchbar/>
        </View>
    )
}

export default AddFriend;

const styles = StyleSheet.create({})