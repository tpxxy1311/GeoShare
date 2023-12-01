import {create} from 'zustand';
import axios from 'axios'


const getFriends = async (set) => {
    const response = await axios.get('https://fakestoreapi.com/users');
    set({ friendsList: response.data });
}

const addFriend = (set) => (newFriend) =>{
    //API Call
    //...
    
    //State aktualisieren
    set((state)=>({
        friendsList: [
            ...state.friendsList, newFriend
        ]
    }))
}


const useStore = create((set) => ({
    friendsList: [],
    getFriends: () => getFriends(set),
    addFriend: addFriend(set),
}))

export default useStore