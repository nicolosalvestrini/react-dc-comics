import NavbarLink from "./NavbarLink.jsx";

export default function Navbar({ navbarItems }) {
  return (
    <nav>
      <ul className="nav style">
        {navbarItems.map((item) => (
          <NavbarLink
            key={item.id}
            link={item.href}
            name={item.label}
            active={item.active}
          />
        ))}
      </ul>
    </nav>
  );
}