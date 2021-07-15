import { FaFileAlt } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { SiAzureartifacts } from "react-icons/si";
import { GiBrainstorm } from "react-icons/gi";
import SeeMoreButton from "./SeeMoreButton";

function SideNav(props) {
  return (
    <div id="mySidenav" class="sidenav">
      <div className="avatar-username">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
          alt="Avatar"
          class="avatar"
        />
        <p>Alex</p>
      </div>
      <div className="sidenav-item current-item hover-color">
        <div className="img">
          <FaFileAlt />
        </div>
        <div className="content">
          <p className="item-text">Buzz Home</p>
          <p className="count">4</p>
        </div>
      </div>

      <div className="sidenav-item hover-color">
        <div className="img">
          <FaFileAlt />
        </div>
        <div className="content">
          <p className="item-text">My Buzz Feed</p>
          <p className="count">20</p>
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <RiDraftLine />
        </div>
        <div className="content">
          <p className="item-text">Draft Posts</p>
          <p className="count">3</p>
        </div>
      </div>
      
      <div className="sidenav-item hover-color">
        <div className="img">
          <BsPersonCheck />
        </div>
        <div className="content">
          <p className="item-text">My Followers</p>
          <p className="count">50</p>
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <BsPersonCheckFill />
        </div>
        <div className="content">
          <p className="item-text">I am following</p>
          <p className="count">50</p>
        </div>
      </div>

      <div className="sidenav-item hover-color">
        <div className="img">
          <RiTeamFill />
        </div>
        <div className="content">
          <p className="item-text">My Team</p>
          <p className="count">20</p>
        </div>
      </div>

      <div className="sidenav-item hover-color">
        <div className="img">
          <GrContactInfo />
        </div>
        <div className="content">
          <p className="item-text">My Reportees</p>
          <p className="count">10</p>
        </div>
      </div>

      <SeeMoreButton/>

      <div className="sidenav-item hover-color">
        <div className="img">
          <SiAzureartifacts />
        </div>
        <div className="content">
          <p className="item-text">New Artifacts</p>
          {/* <p className="count">10</p> */}
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <CgNotes />
        </div>
        <div className="content">
          <p className="item-text">New Modules</p>
          {/* <p className="count">10</p> */}
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <GiBrainstorm />
        </div>
        <div className="content">
          <p className="item-text">New Skills</p>
          {/* <p className="count">10</p> */}
        </div>
      </div>

      <SeeMoreButton/>
    </div>
  );
}

export default SideNav;
