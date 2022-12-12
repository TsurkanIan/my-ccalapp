import React from 'react';
import { useNavigate } from 'react-router';
import Counter from './counter';
import MyButton from './UI/MyButton';

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className='post_btns'>
                    <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                        Open
                    </MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>
                        Delete
                    </MyButton>
                    <Counter/>
                </div>
            </div>
        </div> 
    );
};
export default PostItem;