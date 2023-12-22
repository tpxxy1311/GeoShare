import {create} from 'zustand';

const useStore = create((set) => ({
    //Current Login State
    logedIn: false,
    login: () => set({ logedIn: true }),
    logout: () => set({ logedIn: false }),

    //Friendlist State
    friendsList: [],
    //Initialize Friendslist
    setFriends: (friends) => set({ friendsList: friends }),
    //Add new Friend
    addFriend: (newFriend) => set((state)=>({friendsList: [...state.friendsList, newFriend]})),
    //Delete Friend
    deleteFriend: (deleteId) => set((state)=>({friendsList: state.friendsList.filter((friend)=>friend.id!==deleteId)}))
}))

export default useStore