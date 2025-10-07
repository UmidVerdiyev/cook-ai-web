import React from "react";
import { ChefHat, Image, Menu, X } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getNavigationStyles } from "../../../themes/styles/navigation";
import NavLink from "./NavLink";
import CookAiLogo from "../../../images/log.png";

interface NavigationProps {
  theme: ColorTheme;
  activeSection: string;
  isMenuOpen: boolean;
  isMobile: boolean;
  onMenuToggle: () => void;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  theme,
  activeSection,
  isMenuOpen,
  isMobile,
  onMenuToggle,
  onNavigate,
}) => {
  const styles = getNavigationStyles(theme);

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <img
              src={CookAiLogo}
              alt="Cook AI Logo"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </div>
          <span style={styles.logoText}>Cook AI</span>
        </div>
        {/* Desktop Navigation */}
        <div style={!isMobile ? styles.navLinks : { display: "none" }}>
          <NavLink
            href="#home"
            isActive={activeSection === "home"}
            onClick={() => onNavigate("home")}
            theme={theme}
          >
            Home
          </NavLink>
          <NavLink
            href="#features"
            isActive={activeSection === "features"}
            onClick={() => onNavigate("features")}
            theme={theme}
          >
            Features
          </NavLink>
          <NavLink
            href="#contact"
            isActive={activeSection === "contact"}
            onClick={() => onNavigate("contact")}
            theme={theme}
          >
            Contact
          </NavLink>
          <button
            style={styles.downloadBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          style={isMobile ? styles.mobileMenuBtn : { display: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f3f4f6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          <NavLink
            href="#home"
            isActive={activeSection === "home"}
            onClick={() => onNavigate("home")}
            theme={theme}
          >
            Home
          </NavLink>
          <NavLink
            href="#features"
            isActive={activeSection === "features"}
            onClick={() => onNavigate("features")}
            theme={theme}
          >
            Features
          </NavLink>
          <NavLink
            href="#contact"
            isActive={activeSection === "contact"}
            onClick={() => onNavigate("contact")}
            theme={theme}
          >
            Contact
          </NavLink>
          <button
            style={{
              ...styles.downloadBtn,
              width: "100%",
              marginTop: "1rem",
              marginLeft: 0,
            }}
          >
            Download App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
