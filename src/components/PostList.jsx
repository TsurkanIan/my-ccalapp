import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return(
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }
    return (
        <div>
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem remove = {remove} number={index+1} post={post}/>
                </CSSTransition>
                )}
            </TransitionGroup>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
        </div>
    );
};

export default PostList;