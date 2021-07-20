import "./Post.css";
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
const postedTime=(time)=>{
  let diff = (Date.now() - time)/1000
  console.log(diff)
  if(diff < 60) return 'few seconds ago'
  if(diff < 3600 && diff >60) return 'few minutes ago'
  if(diff <86400 && diff> 3600) return 'few hours ago'
  if(diff >86400) return Math.floor(diff/86400)+'d'
}
const Post = (props) => {
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
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Post;
