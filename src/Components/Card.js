import "./Card.css";
import { BiVideo } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
const Card = (props) => {
  return (
    <div className="card">
      <div>
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
          alt="Avatar"
          class="avatar"
        />
        <input
          className="card-input"
          type="text"
          placeholder="Share something here..."
        />
      </div>
      <div className="icons">
        <div className="icon">
          <div className="center">
            <BiVideo />
          </div>
          <p>Attachment</p>
        </div>

        <div className="icon">
          <div className="center">
            <AiOutlineCamera />
          </div>
          <p>Capture it</p>
        </div>
        <div className="icon">
          <div className="center">
            {" "}
            <BsMic />
          </div>
          <p>Say it</p>
        </div>
      </div>
    </div>
  );
};

export default Card;