import { FaArrowLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
      <div><FaArrowLeft/></div>
      <p>Dashboard</p>
      <div><FaAngleRight/></div>
      <p>Social Feed</p>
    </div>
  );
}

export default Navbar;