import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {

  // 🔥 Make sure the parent of Post is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
 
  // This is the state for the likes, if you pass the state correctly, the heart button should increase the likes
  // State-kaan waxaa loogu tala galay 'likes', hadaa si sax ah loo soo diray, 'heart' button-ka wuu shaqeynayaa.
  
    const [likes, setLikes] = useState(props.data.likes);
   // console.log(likes);
  
 // Function to increase the number of likes
  // Function-ka kor loogu qaado likes-ka

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const [comments,setComments] = useState(props.data.comments)
   
 

  return (
    <div className='post-border'>
      <PostHeader
        username={props.data.username}
        thumbnailUrl={props.data.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.data.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? Please send all the props it needs */}
      {/* Component-ga 'LikeSection' ma heysataa wixii props ah oo ay u baahantahay? Hadaysan heysan, fadlan u dir */}
    
      <LikeSection incrementLikes={incrementLikes} numberOfLikes={likes}   />
       
      {/* Comments also wants its props! */}
      {/* Fadlan u dir props-ka ay 'Comments' component u baahantahay */}
      
  
      <Comments comments={comments} />
    </div>
  );
};

export default Post;
