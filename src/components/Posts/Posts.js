import React from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.

  const { posts } = props;

  return (
    <div className='posts-container-wrapper'>

      {dummyData.map(post => <Post key ={post.id}  post={post}/>)}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Dulmar prop-ka 'posts', kadib soo celi 'Post' component, adigoo waxa ay 'Post' u baahantahay u diraayo. */}

    </div>
  );
};

export default Posts;
