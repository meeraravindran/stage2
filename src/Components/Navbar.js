import { FaArrowLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss"
function Navbar() {
const openNavbar=()=>{
  console.log("NAVBAR CLICKED");
  let nav=document.getElementById("mySidenav")
  nav.style.right = "0px"
  nav.style.left="auto"
  nav.style.display = "block"

}


  return (
    <div className="navbar">
      <div><FaArrowLeft/></div>
      <p>Dashboard</p>
      <div><FaAngleRight/></div>
      <p>Social Feed</p>
      <div className="right">
      <div onClick={openNavbar}><FaBars/></div>
      </div>
     
    </div>
  );
}

export default Navbar;