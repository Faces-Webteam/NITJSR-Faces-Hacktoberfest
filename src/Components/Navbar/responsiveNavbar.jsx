import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./sideBar";
import { useState } from "react";

function ResponsiveNavbar() {

  const [active , setActive] = useState(false);

  return (
    <>
      <nav className="navbar reponsive-navbar">
        <div className="side-menu" onClick={e => setActive(true)}>
            <MenuIcon 
                style={{cursor:"pointer", color:"white"}}
            />
        </div>
      </nav>
      <SideBar 
        active={active}
        setActive={setActive}
      />
    </>
  );
}

export default ResponsiveNavbar;