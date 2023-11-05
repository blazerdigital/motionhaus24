import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom (you might need to install it if you haven't already)
import SocialContainer from "./SocialContainer/SocialContainer";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/"> {/* Link to the home page */}
        <img src="/images/logo.svg" alt="Home" className={styles.logo} />
      </Link>
      <SocialContainer />
    </div>
  );
};

export default Navbar;
