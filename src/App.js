/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

/* 
  Halkaan ka bilow, components-ka hoos usii gal.
  Qasab ma aha in file-kasta oo project-gaan ku jiro inaa wax ka badasho.
  File-kasta fiiri si aad u ogaato PROPS-ka uu doonaayo.
*/

import { useState } from "react";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Soo jiido Posts iyo SearchBar components-ka
import Posts from "./components/Posts/Posts.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

// Import the dummyData
// Soo jiido dummyData
import dummyData from "./dummy-data.js";

import "./App.css";

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // Waxaa sameysaa state la dhaho 'posts' si aad ugu keydisid wixii dummyData ka imaanaayo.
  const [posts, setPost] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  // Hadaa rabtid inaad "SearchBar" ka shaqeysiisid (Waa Stretch ogow), waxaan u baahanahay state kale oo aad ku keydisid qoraalka aad raadineysid.
  
  const [ input, setInput ] = useState("");

  const handleChange = (value) => {
    setInput(value)
    const result = dummyData.filter(item => {
    return item.username.includes(value)
    })
    setPost(result)
  } 

  return (
    <div className="App">
      {/* Add SearchBar and Posts here to render them */}
      {/* Soo jiido SearchBar iyo Posts components-ka hoos, si aad u muujiyo */}

      <SearchBar handleChange={handleChange} input={input}/>
      <Posts posts={posts} />

      {/* Check the implementation of each component, to see what props they require, if any! */}
      {/* Fiiri sida loo sameeyo component-kasta, si aad u ogaato PROPS-ka ay u baahan tahay, hadayba jiraan props ay u baahanatahy! */}
    </div>
  );
};

export default App;
