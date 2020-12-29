import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import AddMyPostsForm from './AddMyPostsForm'

const MyPosts = (props) => {
    const posts = props.posts
    let onSubmit = (data) => {
        props.addProfilePost(data.newMyPostsText)
    }
    let postsElements =
        posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>Мои сообщения</h3>
                <AddMyPostsForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts