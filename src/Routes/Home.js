import React, { useState, useEffect } from "react";
import SideNav from "../Components/SideNav";
import Card from "../Components/Card";
import Post from "../Components/Post";
const Home = () => {
  const [posts, setPosts] = useState([]);
  //const [reload, setReload] = useState(false);
  const loadPosts = () => {
    let posts = [];
    if (localStorage.getItem("posts")) {
      posts = JSON.parse(localStorage.getItem("posts"));
    }
    return posts;
  };

  useEffect(() => {
    setPosts(loadPosts());
  }, []);
  const loadAllPosts = () => {
    return (
      posts &&
      posts.map((post, index) => <Post key={index} content={post.text} />)
    );
  };

  const addPost = (item) => {
    setPosts([...posts, item]);
    localStorage.setItem("posts", JSON.stringify(posts));
    console.log("posts",posts)
  };
  return (
    <div>
      <SideNav />
      <div id="main">
        <Card handleNewPost={addPost} />
        {posts.length>0 ? loadAllPosts():(<h3>You have not posted anything!!!</h3>)}
      </div>
    </div>
  );
};

export default Home;
