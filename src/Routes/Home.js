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
      posts.map((post, index) => (
        <Post
          key={index}
          content={post.text}
          file={post.file}
          date={post.date}
          ext={post.fileExtension}
          deletePost={deletePost}
          updatePost={updatePost}
          id={post.id}
        />
      ))
    );
  };

  useEffect(()=>{
    localStorage.setItem("posts", JSON.stringify(posts));
  },[posts])

  const addPost = (item) => {
    setPosts([...posts, item]);
    console.log("posts", posts);
  };
  const deletePost = (id) =>{
    let newPosts = [];
    posts.forEach(post => {
      if(post.id === id)
        return;
      newPosts.push(post);   
    })
    setPosts([...newPosts])

  }
  const updatePost = (id,textContent) =>{
    let newPosts = [];
    posts.forEach(post => {
      if(post.id === id){
        newPosts.push({...post,text:textContent,date:Date.now()})
      }
      else{
        newPosts.push(post);   
      }
    })
    setPosts([...newPosts])

  }

  return (
    <div>
      <SideNav count={posts.length} />
      <div id="main">
        <Card handleNewPost={addPost} />
        {posts.length > 0 ? (
          loadAllPosts()
        ) : (
          <h3>You have not posted anything!!!</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
