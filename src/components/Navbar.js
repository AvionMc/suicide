import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Suicide.lol
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                /home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                /features
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://discord.gg/hpxjBTC6YN"
                target="_blank"
              >
                /discord
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
