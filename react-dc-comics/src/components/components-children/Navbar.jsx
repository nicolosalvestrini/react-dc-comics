
import NavbarLink from "./components-children/NavbarLink.jsx";
export default function Navbar(props) {
  const {navbarItems} = props
  return (
    <nav>
      <ul className="nav style">
        {navbarItems.map((item, index) => {
          return(
            <NavbarLink 
            link= {item.href}
            name= {item.label}
            id= {index}/>
          
          )
        })}
      </ul>
    </nav>
  );
}
