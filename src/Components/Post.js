import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./Post.scss";
// import Pic from "../assests/download.jpg"
const imageSource = (ext, file) => {
  return "data:image/" + ext + ";base64," + file;
};
const downloadHREF = (file) => {
  return "data:application/octet;base64," + file;
};
const downloadFileName = (ext) => {
  return "download." + ext;
};
const videoSrc = (file) => {
  return "data:video/mp4;base64," + file;
};
const postedTime = (time) => {
  let diff = (Date.now() - time) / 1000;
  console.log(diff);
  if (diff < 60) return "few seconds ago";
  if (diff < 3600 && diff > 60) return "few minutes ago";
  if (diff < 86400 && diff > 3600) return "few hours ago";
  if (diff > 86400) return Math.floor(diff / 86400) + "d";
};
const Post = (props) => {
  const [edit, setEdit] = useState(false);
  const [textContent, setTextContent] = useState(props.content);
  const handleChange = (event) => {
    setTextContent(event.target.value);
  };
  const updatePost=(id)=>{
    if(textContent.length<3){
      alert("Content too short")
      return
    }
    if(textContent.length>1000){
      alert("Content too large")
      return
    }
    props.updatePost(id,textContent)
    setEdit(false)
  }
  return (
    <div className="post">
      <div className="header">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
          alt="Avatar"
          className="avatar avatar-border"
        />
        <div className="name">
          <span>Jessie Pinkman</span>
          <small>Manager</small>
          <small>{postedTime(props.date)}</small>
        </div>
        <div
          onClick={() => {
            let menu = document.getElementById("post-menu");
            let disp = getComputedStyle(menu).display;
            if (disp === "none") menu.style.display = "block";
            else menu.style.display = "none";
          }}
          className="post-options"
        >
          <BsThreeDots />
          <div id="post-menu" className="post-options-menu">
            <div
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </div>
            <div
              onClick={() => {
                props.deletePost(props.id);
              }}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
      <div className="post-content">
        {props.ext === "jpg" ? (
          <img src={imageSource(props.ext, props.file)} />
        ) : null}
        {props.ext === "image" ? <img src={props.file} /> : null}
        {props.ext &&
        props.ext !== "image" &&
        props.ext !== "jpg" &&
        props.ext !== "mp4" ? (
          <a
            href={downloadHREF(props.file)}
            download={downloadFileName(props.ext)}
          >
            Download File
          </a>
        ) : null}
        {props.ext === "mp4" ? (
          <video src={videoSrc(props.file)} controls />
        ) : null}
        {edit === false ? (
          <p>{props.content}</p>
        ) : (
          <div>
            <input type="text" value={textContent} onChange={handleChange} />
            <button onClick={()=>{updatePost(props.id)}}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
