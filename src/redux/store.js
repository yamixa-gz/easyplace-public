// import {ADD_POST_DIALOGS, dialogsReducer, SET_TEXT_VALUE_DIALOGS} from "./dialogs-reduser";
// import {ADD_POST_PROFILE, profileReducer, SET_TEXT_VALUE_PROFILE} from "./profile-reduser";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: 'It\'s my first post', likesCount: 11},
//                 {id: 3, message: 'Blabla', likesCount: 11},
//                 {id: 4, message: 'Dada', likesCount: 11}
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrew'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra?'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'}
//             ],
//             newPostText: 'Dialogs!!!'
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('rerenderEntireTree!!!')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         dialogsReducer(this._state.dialogsPage, action)
//         profileReducer(this._state.profilePage, action)
//         this._callSubscriber(this._state)
//
//     }
// }
//
// window.store = store
//
// export default store