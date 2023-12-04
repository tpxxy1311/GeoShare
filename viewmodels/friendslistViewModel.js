import axios from 'axios';
import { useState } from 'react';

const friendslistViewModel = () => {

    const getFriends = async (setFriends) => {
        const response = await axios.get('https://fakestoreapi.com/users');
        setFriends(response.data)
    }

    const addFriend = async () =>{

    }

    const searchNewFriend = () =>{

    }

    const deleteFriend = async () =>{

    }

    return {
        getFriends,
        friendsList
    }
}

export const getFriends = async (set) => {
    const response = await axios.get('https://fakestoreapi.com/users');
    set({ friendsList: response.data });
}

export const addFriend = (set) => (newFriend) =>{
    //API Call
    //...

    //State aktualisieren
    set((state)=>({
        friendsList: [
            ...state.friendsList, newFriend
        ]
    }))
}

export default friendslistViewModel