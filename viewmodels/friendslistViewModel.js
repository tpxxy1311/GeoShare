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

export default friendslistViewModel