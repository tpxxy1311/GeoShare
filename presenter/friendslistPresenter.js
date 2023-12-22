import axios from "axios";
import useStore from "../store/store";

export const getFriends = async () =>{
    const setFriendsList = useStore.getState().setFriends
    //API Call
    const response = await axios.get('https://fakestoreapi.com/users')
    console.log(response.data);
    //Set new State
    setFriendsList(response.data);
}

export const addFriend = async (newFriend) =>{
    const addToFriendsList = useStore.getState().addFriend
    //API Call
    const response = await axios.post('https://fakestoreapi.com/users', newFriend)
    console.log(response.data);
    //Set new State
    addToFriendsList(newFriend);
}

export const deleteFriend = async (deleteId) =>{
    const deleteFromFriendList = useStore.getState().deleteFriend
    //API Call
    const response = await axios.post('https://fakestoreapi.com/users', deleteId)
    console.log(response.data);
    //Set new State
    deleteFromFriendList(deleteId);
}