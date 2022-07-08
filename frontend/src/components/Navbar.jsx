import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
},
    link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
    color: "yellow",
    borderBottom: "1px solid white",
    },
},
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Strudas Technologies Ltd
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About Us
          </Link>
          <Link to="/services" className={classes.link}>
            Services
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

// import React from 'react';
// import { Link } from "react-router-dom";
// import logo from "../mc1.png";
// import { SocialIcon } from "react-social-icons";
// const Navbar = () => {
//     return (

//       <nav className="navbar navbar-expand-lg navbar-light bg-silver">
//         <div className="nav-center">
//           <Link to="/">
//             <img src={logo} alt="Ideals Services" className="logo"></img>
//           </Link>
//           <div id="navbarSupportedContent" class="collapse navbar-collapse">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/About">About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/services">Our Services</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//           <ul className="social-icons">
//             <SocialIcon
//               url="https://www.linkedin.com/in/robert-simiyu-079399162/"
//               style={{ height: 25, width: 25 }}
//             />
//             <SocialIcon
//               network="twitter"
//               fgColor="#ff5a01"
//               style={{ height: 25, width: 25 }}
//             />
//             <SocialIcon
//               network="facebook"
//               fgColor="#ff5a01"
//               style={{ height: 25, width: 25 }}
//             />
//             <SocialIcon
//               network="instagram"
//               fgColor="#ff5a01"
//               style={{ height: 25, width: 25 }}
//             />
//           </ul>
//         </div>
//       </nav>
//     );
// };

// export default Navbar;
