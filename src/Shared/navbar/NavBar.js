import Link from "next/link";
import styles from "./navbar.module.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <img
              src="https://vitasoftserver.vitasoftsolutions.com/upload/upload/Vitasoft_Logo_Draft_1.0-02.png"
              alt="Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>
        <div className={styles.linksContainer}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/users" className={styles.navLink}>
            User list
          </Link>
          <Link href="/add-user" className={styles.navLink}>
            Add User
          </Link>
          <Link href="/" className={styles.navLink}>
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
