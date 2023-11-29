import axios from 'axios';
import { useState } from 'react';

const friendslistViewModel = () => {
    
    const [friendsList, setFriendslist] = useState();

    const getFriends = async () =>{
        const res = await axios.get('https://fakestoreapi.com/users')
        setFriendslist(res.data)
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

export default friendslistViewModel