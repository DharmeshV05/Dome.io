import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../CSS/Layout.css";

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3zR7U8WXN_VBLKy_ZCx4sbkOIqgVYa5uhw&s";

const getSidebarWidth = (isCollapsed, isMobile, isTablet) => {
  if (isMobile) return 0;
  if (isTablet) return isCollapsed ? 60 : 200;
  return isCollapsed ? 80 : 240;
};

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Hide sidebar on mobile when menu is closed
  const sidebarClass = `sidebar${isMenuOpen ? " open" : ""}${isCollapsed ? " collapsed" : ""}`;

  // Calculate main-content margin-left
  const sidebarWidth = getSidebarWidth(isCollapsed, isMobile, isTablet);
  const mainContentStyle = {
    marginLeft: sidebarWidth,
    transition: "margin-left 0.3s ease"
  };

  return (
    <div className="layout-root">
      <aside className={sidebarClass} aria-label="Sidebar navigation">
        <div className="sidebar-header">
          <Link to="/" aria-label="Dome.io Home" className="sidebar-logo" onClick={() => setIsMenuOpen(false)}>
            <img alt="Dome.io Logo" src={logo} />
          </Link>
          <button
            className="collapse-btn"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={toggleCollapse}
          >
            <i className={isCollapsed ? "fas fa-chevron-right" : "fas fa-chevron-left"}></i>
          </button>
          <button
            className="hamburger sidebar-hamburger"
            aria-label="Toggle sidebar menu"
            onClick={toggleMenu}
          >
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="link" title="Home" onClick={toggleMenu} aria-label="Home">
              <i className="fas fa-home"></i>
              {!isCollapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/services" className="link" title="Services" onClick={toggleMenu} aria-label="Services">
              <i className="fas fa-cogs"></i>
              {!isCollapsed && <span>Services</span>}
            </Link>
          </li>
          <li>
            <Link to="/about" className="link" title="About" onClick={toggleMenu} aria-label="About">
              <i className="fas fa-info-circle"></i>
              {!isCollapsed && <span>About</span>}
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link" title="Blog" onClick={toggleMenu} aria-label="Blog">
              <i className="fas fa-blog"></i>
              {!isCollapsed && <span>Blog</span>}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link" title="Contact" onClick={toggleMenu} aria-label="Contact">
              <i className="fas fa-envelope"></i>
              {!isCollapsed && <span>Contact</span>}
            </Link>
          </li>
          <li>
            <Link to="/login" className="login-btn" title="Login" onClick={toggleMenu} aria-label="Login">
              <i className="fas fa-sign-in-alt"></i>
              {!isCollapsed && <span>Login</span>}
            </Link>
          </li>
          <li>
            <Link to="/signup" className="signup-btn" title="Sign Up" onClick={toggleMenu} aria-label="Sign Up">
              <i className="fas fa-user-plus"></i>
              {!isCollapsed && <span>Sign Up</span>}
            </Link>
          </li>
        </ul>
      </aside>
      {isMobile && isMenuOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsMenuOpen(false)} />
      )}
      <main className="main-content" style={mainContentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;