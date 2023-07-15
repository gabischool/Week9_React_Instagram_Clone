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

import  { useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Soo jiido Posts iyo SearchBar components-ka
 
import SearchBar from './components/SearchBar/SearchBar';
// import Comment from './components/Comments/Comment';
 
 
// Import the dummyData
// Soo jiido dummyData


import './App.css';
import Comments from './components/Comments/Comments';
// import Feed from './dummy-data';
import LikeSection from './components/Posts/LikeSection';
import Posts from './components/Posts/Posts';
import PostHeader from './components/Posts/PostHeader';
import Post from './components/Posts/Post';
// import { PropsWithChildren } from 'react'; 
const DummyData = [
  {
    id: 1,
    username: "philzcoffee",
    thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        id: 22,
        username: "philzcoffee",
        text: "We've got more than just coffees!",
      },
      {
        id: 23,
        username: "biancasaurus",
        text: "Looks delicious!",
      },
      {
        id: 24,
        username: "martinseludo",
        text: "Can't wait to try it!",
      },
    ],
  },
  {
    id: 2,
    username: "twitch",
    thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
    imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
    likes: 4307,
    timestamp: "July 15th 2017, 03:12:09 pm",
    comments: [
      {
        id: 36,
        username: "twitch",
        text: "Epic Street Fighter action here in Vegas!",
      },
      {
        id: 37,
        username: "michaelmarzetta",
        text: "Omg that match was crazy",
      },
      {
        id: 38,
        username: "themexican_leprechaun",
        text: "What a setup",
      },
      {
        id: 39,
        username: "dennis_futbol",
        text: "It that injustice",
      },
  
    ],
  }
  ];
  


function App()   {
       
      // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
      // Waxaa sameysaa state la dhaho 'posts' si aad ugu keydisid wixii dummyData ka imaanaayo.

      // To make the search bar work (which is stretch) we'd need another state to hold the search term.
      // Hadaa rabtid inaad "SearchBar" ka shaqeysiisid (Waa Stretch ogow), waxaan u baahanahay state kale oo aad ku keydisid qoraalka aad raadineysid.
      const [posts, setPosts] = useState(DummyData);
      return (
        <div className='App'>

          {/* Add SearchBar and Posts here to render them */}
          {/* Soo jiido SearchBar iyo Posts components-ka hoos, si aad u muujiyo */}

           <feed Posts={posts}/> 
            <feed />
           < SearchBar />
          <Posts posts={posts}/>

          
           
          
             

           

          {/* Check the implementation of each component, to see what props they require, if any! */}
          {/* Fiiri sida loo sameeyo component-kasta, si aad u ogaato PROPS-ka ay u baahan tahay, hadayba jiraan props ay u baahanatahy! */}
        </div>
      );
    };

    export default App;
