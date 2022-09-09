import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Avatar } from '@mui/material'
import './Post.css'
import moment from 'moment';

function Post({ post }) {
    return (
        <div className='post'>
            <div className='header'>
                <Avatar src={post.owner.picture} />
                <div className='title'>
                    <span>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</span>
                    <span>{moment(post.publishDate).format('MMMM Do YYYY, h:mm:ss')}</span>
                </div>
            </div>
            <div className='block'>
                <img src={post.image} style={{ width: '50%', height: '50%' }} />
                <div className='text'>
                    <span>{moment(post.publishDate).format('MMMM Do YYYY, h:mm:ss')}</span><br />
                    <span>{post.text}</span><br />
                    <div className='tags'>
                        {post.tags.map((tag) => (
                            <span className='span'>{tag}</span>
                        ))}
                    </div>
                    <div>
                        <ThumbUpOffAltIcon color="primary" />
                        {post.likes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post