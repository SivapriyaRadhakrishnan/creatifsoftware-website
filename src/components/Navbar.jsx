
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const services = [
    { name: "CRM Solutions", path: "/services/crm" },
    { name: "ERP Software", path: "/services/erp" },
    { name: "FlexFlow AI", path: "/services/flexflow-ai" },
    { name: "Kinetix Payroll System", path: "/services/kinetix-payroll" },
    { name: "AI Chatbot", path: "/services/ai-chatbot" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/creatif-logo.png" alt="Creatif Software Solutions" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          <div className={`nav-dropdown ${servicesOpen ? "open" : ""}`}>
            <button
              className="nav-dropdown-toggle"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown size={16} />
            </button>

            <div className="nav-dropdown-menu">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={closeMenu}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          <div className="mobile-cta">
            <Button href="/contact">Get Started</Button>
          </div>
        </nav>

        <div className="desktop-cta">
          <Button href="/contact">Get Started</Button>
        </div>

        <button
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setServicesOpen(false);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
