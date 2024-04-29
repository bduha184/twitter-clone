import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from "@mui/material";
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
const Post = forwardRef(({post},ref) => {
  return (
    <div className='post' ref={ref}>
      <div className="post_avatar">
        <Avatar src={post.avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_header_text">
            <h3>
              {post.displayName}
            <span className='post_header_special'>
              {post.verified && (
                <VerifiedUser className='post_badge' />
              )}
              @{post.userName}
            </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{post.text}</p>
          </div>
        </div>
        <img src={post.image}/>
        <div className="post_footer">
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small'/>
          <FavoriteBorder fontSize='small' />
          <PublishOutlined  fontSize='small'/>
        </div>
      </div>
    </div>
  )
})

export default Post
