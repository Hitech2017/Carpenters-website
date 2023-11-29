import navStyles from "../styles/navbar.module.css";

const NavBar = () => {
    return (
        <div className={navStyles.navBar}>
            <div className={navStyles.navBar_Container}>
                <div className={navStyles.navBar_logo_image}></div>
            </div>
        </div>
    );
}

export default NavBar;