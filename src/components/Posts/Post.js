import React, { useState } from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  const { post } = props;

  // This is the state for the likes, if you pass the state correctly, the heart button should increase the likes
  // State-kaan waxaa loogu tala galay 'likes', hadaa si sax ah loo soo diray, 'heart' button-ka wuu shaqeynayaa.

  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  // Function to increase the number of likes
  // Function-ka kor loogu qaado likes-ka

  const incrementLikes = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img src={post.imageUrl} alt="post thumbnail" className="post-image" />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? Please send all the props it needs */}
      {/* Component-ga 'LikeSection' ma heysataa wixii props ah oo ay u baahantahay? 
      Hadaysan heysan, fadlan u dir */}

      <LikeSection
        incrementLikes={incrementLikes}
        numberOfLikes={likes}
        liked={liked}
      />

      {/* Comments also wants its props! */}
      {/* Fadlan u dir props-ka ay 'Comments' component u baahantahay */}

      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
