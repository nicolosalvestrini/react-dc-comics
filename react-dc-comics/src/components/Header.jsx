import logo from "../assets/img/dc-logo.png";
import Navbar from "./components-children/Navbar";
export default function Header() {
  return (
    <header className="container">
      <div className="d-flex align-items-center py-2 justify-content-between">
        <img src={logo} alt="dc comics logo" className="logo-dc" />
        <Navbar 
        navbarItems= {navbarItems}/>
      </div>
    </header>
  );
}
