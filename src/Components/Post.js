import "./Post.css";
// import Pic from "../assests/download.jpg"
const Post = (props) => {
  return (
    <div className="post">
      <div className="header">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
          alt="Avatar"
          class="avatar avatar-border"
        />
        <div className="name">
          <span>Jessie Pinkman</span>
          <small>Manager</small>
          <small>id</small>
        </div>
      </div>
      <div className="post-content">
        {/* <img src={Pic} /> */}
        <p>
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Post;
