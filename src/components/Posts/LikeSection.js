
import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import "./LikeSection.css"

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  console.log("haye")
  console.log(props.likes)
  const [likes , setLikes] = useState(props.likes)
  
  // const { incrementLikes, numberOfLikes } = props.incrementLikes;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
    
          {/* Add onClick function to <FontAwesomeIcon /> below and give it 'incrementLikes' function */}
          {/* Ku dar 'onClick' function <FontAwesomeIcon /> hoos ku qoran, kadibna sii 'incrementLikes'*/}

        <div className='like-section-wrapper'>
          <i onClick={()=>setLikes(likes+1)} className="fa-regular fa-heart"></i>
        </div>
        <div className='like-section-wrapper'>
          {/* <FontAwesomeIcon icon={faComment} /> */}
          <i className="fa-regular fa-comment"></i>
        </div>
      </div>
    
          {/* Change this hard coded likes to like from props */}
          {/* Hoos waxaa ku qoran 100 likes oon la badali karin, waa inaa ka dhigtaa wax la badali karo adigoo istimaalaayo 'numberOfLikes' */}

      <p className='like-number'>{likes } Likes</p>
    </div>
  );
};

export default LikeSection;

// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)