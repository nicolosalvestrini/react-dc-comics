const navbarItems = [
  { label: "CHARACTERS", href: "#", active: false },
  { label: "COMICS", href: "#", active: true },
  { label: "MOVIES", href: "#", active: false },
  { label: "TV", href: "#", active: false },
  { label: "GAMES", href: "#", active: false },
  { label: "COLLECTIBLES", href: "#", active: false },
  { label: "VIDEOS", href: "#", active: false, extraClass: "mx-2" },
  { label: "FANS", href: "#", active: false },
  { label: "NEWS", href: "#", active: false },
  { label: "SHOP", href: "#", active: false },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="nav style">
        {navbarItems.map((item, index) => {
          return(
            <li className="nav-item" key={index}>
            <a className={`nav-link text-dark ${item.active ? 'active ' : ''}`} href={item.href}>
              {item.label}
            </a>
          </li>
          )
        })}
      </ul>
    </nav>
  );
}
