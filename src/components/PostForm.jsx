import React, {useState} from 'react';
import MyButton from './UI/MyButton';
import MyInput from './UI/MyInput';
import classes from './navbar/MyNavbar.module.css';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <MyInput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="post title"
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="post description"
                />
                <MyButton className={classes.MyButton_create_post} onClick={addNewPost}>Create post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;