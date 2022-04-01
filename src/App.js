import React, {useState} from "react";
import './styles/App.css';
import PostItems from "./Components/PostItems";

function App() {
    const [posts, setPosts] = useState( [
        {id:1, title:'JavaScript', body:'Description'}
    ])

    return (
  <div className="App">
    </div>
  );
}

export default App;
