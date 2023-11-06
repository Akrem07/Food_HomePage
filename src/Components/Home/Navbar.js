
import React, { useState } from "react";
import Logo from "../../Assets/Logoo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MainComponent from "../Registration/MainComponent";
import Login from "../Registration/Login";
import Popup from "../Registration/Popup";
import ReactDom from "react-dom";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      target: "homee",
      href: "#homee",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      target: "aboutt",
    },
    {
      text: "Work",
      icon: <ShoppingCartRoundedIcon />,
      target: "workk",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      target: "#contactt",
    }
  ];



  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div> 
      <header className="navbar-links-container">
        <a href="#homee">Home</a>
        <a href="#aboutt">About</a>
        <a href="#workk">Work</a>
        <a href="#Testimonialss">Testimonials</a>
        <a href="#contactt">Contact</a>
        <MainComponent/>

      </header>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;