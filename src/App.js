import dummyData from './dummy-data';
import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import PostHeader from './components/Posts/PostHeader';
import SearchBar from './components/SearchBar/SearchBar';

/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/




// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Soo jiido Posts iyo SearchBar components-ka



// Import the dummyData

// Soo jiido dummyData



import './App.css';

const App = () => {
  let [posts, setPosts] = React.useState(dummyData);

  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // Waxaa sameysaa state la dhaho 'posts' si aad ugu keydisid wixii dummyData ka imaanaayo.

  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  // Hadaa rabtid inaad "SearchBar" ka shaqeysiisid (Waa Stretch ogow), waxaan u baahanahay state kale oo aad ku keydisid qoraalka aad raadineysid.

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      {/* Soo jiido SearchBar iyo Posts components-ka hoos, si aad u muujiyo */}
      <SearchBar post={posts} />
      <Posts post={posts} />

      <PostHeader post={posts} />


      {/* Check the implementation of each component, to see what props they require, if any! */}
      {/* Fiiri sida loo sameeyo component-kasta, si aad u ogaato PROPS-ka ay u baahan tahay, hadayba jiraan props ay u baahanatahy! */}
    </div>
  );
};

export default App;
