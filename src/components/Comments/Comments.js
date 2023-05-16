
import React, { useState } from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const [comment] = useState(props.post)
  // 🔥 Make sure the parent of Comments is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  

  return (
    <div>

     {comment.map((info)=>{
      return <Comment  comment = {info} key = {info.id}/>
     })}
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/* Dulmar prop-ka 'comments', kadib soo celi 'Comment' component, adigoo waxa ay 'Comment' u baahantahay u diraayo. */}
    </div>
  );
};

export default Comments;
