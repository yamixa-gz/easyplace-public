const ADD_POST_DIALOGS = 'ADD-POST-DIALOGS'
const initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
}
export let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_DIALOGS:
            return {
                ...state,
                messages: [...state.messages,{
                    id: 6,
                    message: action.newPostMessage
                }]
            }
        default: return state
    }
}
export const addPostDialogsActionCreator = (newPostMessage) => ({type: ADD_POST_DIALOGS, newPostMessage})

export default dialogsReducer