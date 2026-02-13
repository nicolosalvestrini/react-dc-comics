import logo from "../assets/img/dc-logo.png";
export default function Header() {
  return (
    <header className="container">
      <div className="d-flex align-items-center py-2 justify-content-between">
        <img src={logo} alt="dc comics logo" className="logo-dc" />

        <nav>
          <ul className="nav style">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                CHARACTERS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-primary border-bottom border-3 border-primary active"
                href="#"
              >
                COMICS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                MOVIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                TV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                GAMES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                COLLECTIBLES
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">
                VIDEOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                FANS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                SHOP
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
