
import React from 'react';
import Post from './Post';
import './Posts.css';

	 const Posts = (props) => {


    return (
      <div className='posts-container-wrapper'>
        {props.post.map((instagram)=>{
          return(
            <Post  post = {instagram}  />
      )
    })}
      </div>
  );
};

export default Posts;
