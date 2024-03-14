import "./Header.css";
import "./Nav.css";
import logo from "../../assets/img/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="100px" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav lists">
              <li className="nav-item">
                <a className="nav-link me-auto" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  TvShow
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse
                </a>
              </li>
              <li className="nav-item icons-list">
                <a className="nav-link  " href="#">
                  <SearchIcon className="pad" />
                  <NotificationsNoneIcon className="pad" />
                  <AccountBoxIcon className="pad" />
                  <ArrowDropDownIcon className="pad" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
