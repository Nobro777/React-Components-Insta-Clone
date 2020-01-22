/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";

// function HeaderApp() {

//   return (
//   <div className="column">
//     <img src={"../src/assets/ig_post.png"}></img>
//     <h1>{SearchBar}</h1>
//     <h2> Sign In</h2>
//   </div>
//   );
// };

// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  // set up state for the dummy data and pass to your PostsPage

const [data] = useState(dummyData);
console.log("app", data);

  return (
    <div className="App">
      <SearchBar />
      <PostPage postData = {data} />;
    </div>
  );
};

export default App;
