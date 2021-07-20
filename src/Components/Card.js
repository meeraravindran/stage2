import { React, useState, useRef } from "react";
import { MdCamera } from "react-icons/md";
import Webcam from "react-webcam";
import { MdClose } from "react-icons/md";
import {MdRepeat} from "react-icons/md"
import "./Card.css";
import { BiVideo } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
const Card = (props) => {
  const [postContent, setPostContent] = useState("");
  const [postMediaContent, setPostMediaContent] = useState("");
  const [webCam, setWebCam] = useState(false);
  const [fileContent, setFileContent] = useState("");
  const [fileExt, setFileExt] = useState("");
  const webcamRef = useRef(null);
  const attachmentRef = useRef(null);
  const videoConstraints = {
    width: 220,
    height: 300,
    facingMode: "user",
  };
  const handleChange = (event) => {
    setPostContent(event.target.value);
  };
  const toggleCamera = () => {
    //webCam === true ? setWebCam(false) : setWebCam(true);
    if (webCam) {
      setWebCam(false);
      setPostMediaContent("");
      setFileExt("");
    } else setWebCam(true);
  };
  const addPost = () => {
    if(postContent.length<5){
      alert("Post content is too small")
      return
    }
    if(postContent.length > 1000){
      alert("Post content is too large")
      return
    }
    const item = {
      text: postContent,
      date: Date.now(),
      file: postMediaContent,
      fileExtension: fileExt,
    };
    props.handleNewPost(item);
    setPostContent("");
    setPostMediaContent("");
    setFileExt("");
    clearAttachment();
  };
  const saveImg = () => {
    if (postMediaContent === "") {
      setPostMediaContent(webcamRef.current.getScreenshot());
      setFileExt("image");
    } else setPostMediaContent("");
  };
  const clearAttachment = () => {
    setFileContent("")
    setFileExt("")
    setPostMediaContent("")
  };
  const attachedFile = (event) => {
    let file = event.target.files[0];
    let fileName = file.name;
    let array = fileName.split(".");
    if (
      array[1] === "docx" ||
      array[1] === "mp4" ||
      array[1] === "jpg" ||
      array[1] === "pdf" ||
      array[1] === "ppt"
    ) {
      setFileContent(fileName);
      setFileExt(array[1]);
      let reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e) {
          var binaryData = e.target.result;
          var base64String = window.btoa(binaryData);
          console.log(base64String);
          setPostMediaContent(base64String);
        };
      })(file);
      reader.readAsBinaryString(file);
    } else {
      alert("Unspported file type");
      return;
    }
  };
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
      {fileContent !== "" ? (
        <div className="attachment">
          <p>{fileContent}</p>
          <div className="close" onClick={clearAttachment}>
            <MdClose />
          </div>
        </div>
      ) : null}
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
        <div>
        <MdCamera className="button-style" onClick={saveImg} title="Capture Image"/>
        <MdClose className="button-style" onClick={toggleCamera} title="Close Camera"/>
        </div>
      ) : webCam === true ? (
        <div>
        <MdRepeat className="button-style" onClick={saveImg} title="Capture Image"/>
        <MdClose className="button-style" onClick={toggleCamera} title="Close Camera"/>
        </div>
      ) : null}
      <div className="icons">
        <div className="icon">
          <div className="center">
            <BiVideo />
          </div>
          <input
            type="file"
            className="custom-file-input"
            ref={attachmentRef}
            onChange={attachedFile}
            id="attachment"
          />
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
