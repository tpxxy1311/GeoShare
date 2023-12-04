import {create} from 'zustand';
import {getFriends, addFriend} from '../viewmodels/friendslistViewModel';
import axios from 'axios'


const useStore = create((set) => ({
    //Current Login State
    logedIn: false,
    login: () => set({ logedIn: true }),
    logout: () => set({ logedIn: false }),
    //Friendlist State
    friendsList: [],
    getFriends: () => getFriends(set),
    addFriend: addFriend(set),
}))

export default useStore