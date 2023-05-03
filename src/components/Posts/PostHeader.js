// You do not need to change any code in this file
import React from 'react';
import "./PostHeader.css"
const PostHeader = (props) => {
  // 🔥 Make sure the parent of PostHeader is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  const { thumbnailUrl, username ,timestamp} = props;
  return (
    <div className='post-header'>
      <div className='post-thumb-wrapper'>
        <img
          alt='post header'
          className='post-thumb'
          src={thumbnailUrl}
        />
      </div>
      <h2 className='username'>{username}</h2>
      <p className='timestamp'>{timestamp}</p>
    </div>
  );
};

export default PostHeader;
