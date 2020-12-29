import React from 'react';
import profileReducer, {addPostProfile, deletePost} from "./profile-reduser";


const SET_STATUS = 'SET-STATUS'


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
}


it('length of posts should be incremented', () => {   

    const newState = profileReducer(initialState, addPostProfile('it-kamasutra'))
    expect(newState.posts.length).toBe(5)
});

it('after deleting length of messages should be decremented', () => {

    const newState = profileReducer(initialState, deletePost(1))
    expect(newState.posts.length).toBe(3)
});