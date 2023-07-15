import React from "react";
import App from "./App.js";
import Posts from "./components/Posts/Posts.js";
function Feed(){
  
    return(
        <div> 
          <App  />
          < Posts />
          <p>Feed</p>  
        </div>
    );
}

export default Feed;
