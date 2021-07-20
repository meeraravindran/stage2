import { FaFileAlt } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { GrContactInfo, GrProjects, GrUserNew } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { SiAzureartifacts } from "react-icons/si";
import { GiBrainstorm } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import SeeMoreButton from "./SeeMoreButton";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = (props) => {
  const [display, setDisplay] = useState(false);
  const [display1, setDisplay1] = useState(false);
  let navRef = useRef(null);
  const changeStyle = () => {
    if (display) setDisplay(false);
    else setDisplay(true);
  };
  const changeStyle1 = () => {
    if (display1) setDisplay1(false);
    else setDisplay1(true);
  };
  useEffect(() => {
    document.addEventListener(
      "click",
      (event) => {
        console.log("Main Listner Clicked");
        if (navRef.current !== event.target && true) {
          let left = getComputedStyle(navRef.current).left;
          if (left !== "0px") {
            let nav = document.getElementById("mySidenav");
            nav.style.right = "auto";
            nav.style.left = "0px";
            nav.style.display = "none";
          }
        }
      },
      true
    );
  }, []);

  return (
    <div ref={navRef} id="mySidenav" className="sidenav">
      <div className="avatar-username">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50"
          alt="Avatar"
          className="avatar"
        />
        <p>Walter White</p>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <FaFileAlt />
        </div>
        <div className="content">
          <Link className="nav-link" to="/">
            <p className="item-text">Buzz Home</p>
          </Link>

          <p className="count">4</p>
        </div>
      </div>

      <div className="sidenav-item hover-color current-item">
        <div className="img">
          <FaFileAlt />
        </div>
        <div className="content">
          <Link className="nav-link" to="/myfeed">
            <p className="item-text">My Buzz Feed</p>
          </Link>
          <p className="count">{props.count}</p>
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <RiDraftLine />
        </div>
        <div className="content">
          <Link className="nav-link" to="/drafts">
            <p className="item-text">Draft Posts</p>
          </Link>
          <p className="count">3</p>
        </div>
      </div>

      <div className="sidenav-item hover-color">
        <div className="img">
          <BsPersonCheck />
        </div>
        <div className="content">
          <Link className="nav-link" to="/myfollowers">
            <p className="item-text">My Followers</p>
          </Link>
          <p className="count">50</p>
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <BsPersonCheckFill />
        </div>
        <div className="content">
          <Link className="nav-link" to="/following">
            <p className="item-text">I am following</p>
          </Link>
          <p className="count">50</p>
        </div>
      </div>

      <div className="sidenav-item hover-color">
        <div className="img">
          <RiTeamFill />
        </div>
        <div className="content">
          <Link className="nav-link" to="/team">
            <p className="item-text">My Team</p>
          </Link>
          <p className="count">20</p>
        </div>
      </div>

      <div className="sidenav-item hover-color">
        <div className="img">
          <GrContactInfo />
        </div>
        <div className="content">
          <Link className="nav-link" to="/reportees">
            <p className="item-text">My Reportees</p>
          </Link>
          <p className="count">10</p>
        </div>
      </div>
      {display === true ? (
        <div className="sidenav-item hover-color">
          <div className="img">
            <GrUserNew />
          </div>
          <div className="content">
            <Link className="nav-link" to="/newjoinees">
              <p className="item-text">New Joinees</p>
            </Link>
            <p className="count">3</p>
          </div>
        </div>
      ) : null}
      {display === true ? (
        <div className="sidenav-item hover-color">
          <div className="img">
            <FaBirthdayCake />
          </div>
          <div className="content">
            <Link className="nav-link" to="/birthdays">
              <p className="item-text">Birthdays</p>
            </Link>
            <p className="count">1</p>
          </div>
        </div>
      ) : null}

      <SeeMoreButton fun={changeStyle} />

      <p className="recently-added">
        <b>Recently added :</b>
      </p>

      <div className="sidenav-item hover-color">
        <div className="img">
          <SiAzureartifacts />
        </div>
        <div className="content">
          <Link className="nav-link" to="/atrifacts">
            <p className="item-text">New Artifacts</p>
          </Link>
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <CgNotes />
        </div>
        <div className="content">
          <Link className="nav-link" to="/modules">
            <p className="item-text">New Modules</p>
          </Link>
        </div>
      </div>
      <div className="sidenav-item hover-color">
        <div className="img">
          <GiBrainstorm />
        </div>
        <div className="content">
          <Link className="nav-link" to="/skills">
            <p className="item-text">New Skills</p>
          </Link>
        </div>
      </div>
      {display1 === true ? (
        <div className="sidenav-item hover-color">
          <div className="img">
            <GrProjects />
          </div>
          <div className="content">
            <Link className="nav-link" to="/newprojects">
              <p className="item-text">New Projects</p>
            </Link>
          </div>
        </div>
      ) : null}
      <SeeMoreButton fun={changeStyle1} />
    </div>
  );
};

export default SideNav;
