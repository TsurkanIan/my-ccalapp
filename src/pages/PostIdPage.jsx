import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../components/API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { UseFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = UseFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading] = UseFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>
                Вы перешли на страницу поста c id = {params.id}
            </h1>
                { isLoading
                    ? <Loader/>
                    : <div style={{margin: '100px 0 0 0'}}>{post.id}.{post.title}</div>
                } 
                <h1 >
                    Коментарии
                </h1>
                {isComLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comm => 
                            <div style={{MarginTop: 15}}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>    
                        )}
                    </div>
                }
        </div>
    );
};

export default PostIdPage;