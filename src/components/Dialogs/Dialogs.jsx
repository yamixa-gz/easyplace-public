import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm'

const Dialogs = ({ dialogsPage, addDialogsPost }) => {
    const dialogs = dialogsPage.dialogs
    const messages = dialogsPage.messages
    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);
        const onSubmit = (data) => {
            addDialogsPost(data.newPostMessage)
        }
        return (
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messagesWrapper}>
                    <div className={s.addPostMessage}>
                        <AddMessageForm onSubmit={onSubmit}/>
                    </div>
                    <div className={s.messages}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        )
}
export default Dialogs