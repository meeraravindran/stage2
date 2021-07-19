import { React, useState, useRef } from "react";
import { MdCamera } from "react-icons/md";
import Webcam from "react-webcam";
//import Camera from "./Camera";
import "./Card.css";
import { BiVideo } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
const Card = (props) => {
  const [postContent, setPostContent] = useState("");
  const [postMediaContent, setPostMediaContent] = useState("");
  const [webCam, setWebCam] = useState(false);
  const handleChange = (event) => {
    setPostContent(event.target.value);
  };
  const toggleCamera = () => {
    webCam === true ? setWebCam(false) : setWebCam(true);
  };
  const webcamRef = useRef(null);
  const attachmentRef = useRef(null);

  const addPost = () => {
    const item = {
      text: postContent,
      date: Date.now(),
    };
    props.handleNewPost(item);
    setPostContent("");
  };
  const videoConstraints = {
    width: 220,
    height: 300,
    facingMode: "user",
  };
  const saveImg = () => {
    if (postMediaContent === "")
      setPostMediaContent(webcamRef.current.getScreenshot());
    else setPostMediaContent("");
  };
  const attachedFile=()=>{
    console.log(document.getElementById("attachment").files)
  }
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
          alt="Avatar"
          className="avatar"
        />
        <input
          className="card-input"
          type="text"
          placeholder="Share something..."
          value={postContent}
          onChange={handleChange}
        />
        {/* {postContent} */}
        <div className="send-icon" onClick={addPost}>
          <AiOutlineSend />
        </div>
      </div>

      {webCam === true ? (
        postMediaContent === "" ? (
          <Webcam
            audio={false}
            height={300}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={postMediaContent} alt="CapturedImage" />
        )
      ) : null}
      {postMediaContent === "" && webCam === true ? (
        <MdCamera onClick={saveImg} />
      ) : webCam === true ? (
        <button onClick={saveImg}>Retake</button>
      ) : null}
      <div className="icons">
        <div className="icon">
          <div className="center">
              <BiVideo />
          </div>
          <input type="file" className ="custom-file-input" ref={attachmentRef} onChange={attachedFile} id="attachment"/>
        </div>

        <div className="icon">
          <div className="center">
            <AiOutlineCamera onClick={toggleCamera} />
          </div>
          <p>Capture it</p>
        </div>
        <div className="icon">
          <div className="center">
            <BsMic />
          </div>
          <p>Say it</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
