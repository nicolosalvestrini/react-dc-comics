export default function NavbarLink({ link, name, active, key }) {
  return (
    <li className="nav-item" key={key}>
      <a
        className={`nav-link text-dark ${active ? "active" : ""}`}
        href={link}
      >
        {name}
      </a>
    </li>
  );
}