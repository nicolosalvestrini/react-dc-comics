export default function NavbarLink(props) {
    const { link, id, name} = props;
  <li className="nav-item" key={id}>
    <a
      className={`nav-link text-dark ${item.active ? "active " : ""}`}
      href={link}
    >
      {name}
    </a>
  </li>;
}
