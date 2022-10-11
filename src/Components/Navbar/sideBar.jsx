import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  const closeSidebar = () => {
      props.setActive(false);
  }

  return (
    <>
    {props.active ? 
      <div className="side-bar-menu">
        <div className="close-side-bar">
          <CloseIcon style={{ cursor: "pointer" }}
          onClick={closeSidebar}
          />
        </div>
        <div className="sidebar-items">
          <div className="side-bar-navigation">
            <NavLink to="/about-us" onClick={closeSidebar}>
              <li>About us</li>
            </NavLink>
            <NavLink to="/gallery" onClick={closeSidebar}>
              <li>Gallery</li>
            </NavLink>
            <NavLink to="/events" onClick={closeSidebar}>
              <li>Events</li>
            </NavLink>
            <NavLink to="/team" onClick={closeSidebar}>
              <li>Team</li>
            </NavLink>
            <NavLink to="/contact" onClick={closeSidebar}>
              <li>Contact</li>
            </NavLink>
          </div>
        </div>
      </div>
    : null}
    </>
  );
}

export default SideBar;