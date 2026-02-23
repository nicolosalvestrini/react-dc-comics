export default function NavbarLink({ link, name, active }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link text-dark ${active ? "active" : ""}`}
        href={link}
      >
        {name}
      </a>
    </li>
  );
}