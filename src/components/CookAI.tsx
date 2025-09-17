import React, { useState, useEffect, CSSProperties } from "react";
import {
  ChefHat,
  Smartphone,
  Star,
  Users,
  ArrowRight,
  Menu,
  X,
  Download,
  Play,
} from "lucide-react";
import image1 from "../images/IMG_0437.png";
import image2 from "../images/IMG_0438.png";
import image3 from "../images/IMG_0439.png";
import image4 from "../images/IMG_0440.png";
// CSS Modules styles
const styles: { [key: string]: CSSProperties } = {
    // Main container
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fef2f2 100%)",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  
    // Navigation
    nav: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #fed7aa",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
  
    navContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
    },
  
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  
    logoIcon: {
      width: "40px",
      height: "40px",
      background: "linear-gradient(135deg, #fb923c, #ef4444)",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
  
    logoText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      background: "linear-gradient(135deg, #ea580c, #dc2626)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
  
    navLinks: {
      display: "none",
      alignItems: "center",
      gap: "0.5rem",
    },
  
    navLinksDesktop: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  
    navLink: {
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      transition: "all 0.3s ease",
      color: "#374151",
      textDecoration: "none",
    },
  
    navLinkActive: {
      background: "#f97316",
      color: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  
    downloadBtn: {
      marginLeft: "1rem",
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      color: "white",
      padding: "0.5rem 1.5rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  
    mobileMenuBtn: {
      display: "block",
      padding: "0.5rem",
      borderRadius: "8px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  
    mobileMenu: {
      display: "block" as const,
      background: "white",
      borderTop: "1px solid #e5e7eb",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      gap: "0.5rem",
      flexDirection: "column" as const,
    },
  
    // Hero Section - Split Layout
    heroSection: {
      paddingTop: "64px",
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "4rem",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "64px 2rem 0 2rem",
    },
  
    heroLeft: {
      padding: "2rem 0",
    },
  
    heroRight: {
      position: "relative" as const,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "2rem",
    },
  
    badge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0.5rem 1rem",
      background: "linear-gradient(135deg, #fed7aa, #fecaca)",
      borderRadius: "9999px",
      color: "#9a3412",
      fontSize: "0.875rem",
      fontWeight: "500",
      marginBottom: "1.5rem",
    },
  
    heroTitle: {
      fontSize: "clamp(3rem, 6vw, 4.5rem)",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "1.5rem",
      lineHeight: 1.1,
    },
  
    heroGradientText: {
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
  
    heroSubtitle: {
      fontSize: "1.25rem",
      color: "#6b7280",
      marginBottom: "2.5rem",
      lineHeight: 1.6,
    },
  
    heroButtons: {
      display: "flex",
      gap: "1rem",
      marginBottom: "3rem",
      flexWrap: "wrap" as const,
    },
  
    primaryBtn: {
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      color: "white",
      padding: "1rem 2rem",
      borderRadius: "16px",
      fontSize: "1.125rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      gap: "0.5rem",
    },
  
    secondaryBtn: {
      display: "flex",
      alignItems: "center",
      background: "white",
      color: "#374151",
      padding: "1rem 2rem",
      borderRadius: "16px",
      fontSize: "1.125rem",
      fontWeight: "600",
      border: "2px solid #e5e7eb",
      cursor: "pointer",
      transition: "all 0.3s ease",
      gap: "0.5rem",
    },
  
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      maxWidth: "24rem",
    },
  
    statItem: {
      textAlign: "center" as const,
    },
  
    statNumber: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#f97316",
    },
  
    statLabel: {
      color: "#6b7280",
    },
  
    // Screenshots Grid - Cal AI Style
    screenshotsContainer: {
      position: "relative" as const,
      width: "100%",
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    },
  
    screenshotsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gap: "3rem",
      width: "100%",
      height: "100%",
      maxWidth: "600px",
      maxHeight: "700px",
    },
  
    phonePosition1: {
      transform: "rotate(-3deg) translateY(-10px)",
      justifySelf: "end",
      alignSelf: "end",
    },
  
    phonePosition2: {
      transform: "rotate(2deg) translateY(10px)",
      justifySelf: "start",
      alignSelf: "end",
    },
  
    phonePosition3: {
      transform: "rotate(1deg) translateY(-20px)",
      justifySelf: "end",
      alignSelf: "start",
    },
  
    phonePosition4: {
      transform: "rotate(-2deg) translateY(15px)",
      justifySelf: "start",
      alignSelf: "start",
    },
  
    // Subtle connecting lines instead of arrows
    connectingLine1: {
      position: "absolute" as const,
      top: "45%",
      left: "45%",
      width: "60px",
      height: "2px",
      background: "linear-gradient(90deg, #f97316, transparent)",
      opacity: 0.3,
      borderRadius: "1px",
    },
  
    connectingLine2: {
      position: "absolute" as const,
      top: "55%",
      right: "45%",
      width: "60px",
      height: "2px",
      background: "linear-gradient(270deg, #ef4444, transparent)",
      opacity: 0.3,
      borderRadius: "1px",
    },
  
    iphoneFrame: {
      position: "relative" as const,
      width: "200px",
      height: "400px",
      background: "linear-gradient(145deg, #2d3748, #1a202c)",
      borderRadius: "32px",
      padding: "8px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      transition: "all 0.5s ease",
      cursor: "pointer",
    },
  
    iphoneScreen: {
      width: "100%",
      height: "100%",
      borderRadius: "24px",
      background: "#000",
      overflow: "hidden" as const,
      position: "relative" as const,
    },
  
    iphoneNotch: {
      position: "absolute" as const,
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "20px",
      background: "#000",
      borderRadius: "0 0 12px 12px",
      zIndex: 10,
    },
  
    screenshotImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
      borderRadius: "24px",
    },
  
    statusBar: {
      position: "absolute" as const,
      top: "8px",
      left: "16px",
      right: "16px",
      height: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 10,
      fontSize: "10px",
      fontWeight: "600",
      color: "white",
    },
  
    homeIndicator: {
      position: "absolute" as const,
      bottom: "6px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "4px",
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "2px",
    },
  
    // Features section
    features: {
      padding: "5rem 1rem",
      background: "linear-gradient(135deg, #fff7ed, #fef2f2)",
    },
  
    featuresContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
    },
  
    sectionTitle: {
      fontSize: "clamp(2.5rem, 6vw, 3rem)",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "1.5rem",
      textAlign: "center" as const,
    },
  
    sectionSubtitle: {
      fontSize: "1.25rem",
      color: "#6b7280",
      maxWidth: "48rem",
      margin: "0 auto 4rem auto",
      textAlign: "center" as const,
    },
  
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
  
    featureCard: {
      background: "white",
      padding: "2rem",
      borderRadius: "24px",
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      transition: "all 0.5s ease",
      cursor: "pointer",
    },
  
    featureIcon: {
      width: "64px",
      height: "64px",
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      marginBottom: "1.5rem",
      transition: "transform 0.3s ease",
    },
  
    featureTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "1rem",
    },
  
    featureDesc: {
      color: "#6b7280",
      lineHeight: 1.6,
    },
  
    // Contact section
    contact: {
      padding: "5rem 1rem",
      background: "linear-gradient(135deg, #111827, #000000)",
    },
  
    contactContainer: {
      maxWidth: "64rem",
      margin: "0 auto",
      textAlign: "center" as const,
    },
  
    contactTitle: {
      fontSize: "clamp(2.5rem, 6vw, 3rem)",
      fontWeight: "bold",
      color: "white",
      marginBottom: "1.5rem",
    },
  
    contactSubtitle: {
      fontSize: "1.25rem",
      color: "#d1d5db",
      marginBottom: "3rem",
      maxWidth: "32rem",
      margin: "0 auto 3rem auto",
    },
  
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
      marginBottom: "3rem",
    },
  
    contactCard: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px)",
      borderRadius: "16px",
      padding: "2rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
  
    contactCardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "white",
      marginBottom: "1rem",
    },
  
    contactCardText: {
      color: "#d1d5db",
    },
  
    contactForm: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px)",
      borderRadius: "24px",
      padding: "2rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
  
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
  
    formInput: {
      width: "100%",
      padding: "1rem 1.5rem",
      background: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "12px",
      color: "white",
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s ease",
    },
  
    formTextarea: {
      width: "100%",
      padding: "1rem 1.5rem",
      background: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "12px",
      color: "white",
      fontSize: "1rem",
      outline: "none",
      resize: "none" as const,
      marginBottom: "1.5rem",
      transition: "all 0.3s ease",
    },
  
    submitBtn: {
      width: "100%",
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      color: "white",
      padding: "1rem 2rem",
      borderRadius: "12px",
      fontSize: "1.125rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  
    // Footer
    footer: {
      background: "black",
      textAlign: "center" as const,
      padding: "2rem 1rem",
      color: "#9ca3af",
    },
  
    footerLogo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
  
    footerLogoIcon: {
      width: "32px",
      height: "32px",
      background: "linear-gradient(135deg, #fb923c, #ef4444)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
  
    footerLogoText: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      background: "linear-gradient(135deg, #f97316, #ef4444)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
  
    // Mobile responsive styles
    mobileHero: {
      gridTemplateColumns: "1fr",
      gap: "2rem",
      textAlign: "center" as const,
      padding: "64px 1rem 0 1rem",
    },
  
    mobileScreenshots: {
      height: "auto",
      padding: "2rem 1rem",
    },
  
    mobileScreenshotsGrid: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: "1.5rem",
      maxWidth: "400px",
      maxHeight: "500px",
    },
  
    mobilePhoneFrame: {
      width: "160px",
      height: "320px",
    },
  };
  
  const CookAILanding: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
    useEffect(() => {
      // Add global CSS reset and animations
      const style = document.createElement("style");
      style.textContent = `
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        ::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
      `;
      document.head.appendChild(style);
  
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
        document.head.removeChild(style);
      };
    }, []);
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ["home", "features", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
      href,
      children,
    }) => (
      <button
        onClick={() => scrollToSection(href.replace("#", ""))}
        style={{
          ...styles.navLink,
          ...(activeSection === href.replace("#", "") ? styles.navLinkActive : {}),
        }}
        onMouseEnter={(e) => {
          if (activeSection !== href.replace("#", "")) {
            e.currentTarget.style.color = "#f97316";
            e.currentTarget.style.background = "#fff7ed";
          }
        }}
        onMouseLeave={(e) => {
          if (activeSection !== href.replace("#", "")) {
            e.currentTarget.style.color = "#374151";
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        {children}
      </button>
    );
  
    const screenshots = [
      { title: "Recipe Discovery", subtitle: "Find perfect recipes", image: image1 },
      { title: "AI Assistant", subtitle: "Smart cooking guide", image: image2 },
      { title: "Meal Planning", subtitle: "Weekly meal plans", image: image3 },
      { title: "Shopping List", subtitle: "Auto-generated lists", image: image4 },
    ];
  
    const PhoneFrame: React.FC<{ 
      screenshot: typeof screenshots[0]; 
    }> = ({ screenshot }) => (
      <div
        style={styles.iphoneFrame}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
        }}
      >
        <div style={styles.iphoneScreen}>
          <div style={styles.iphoneNotch}></div>
          <div style={styles.statusBar}>
            <div>9:41</div>
            <div>100%</div>
          </div>
          <img
            src={screenshot.image}
            alt={`${screenshot.title} - Cook AI App Screenshot`}
            style={styles.screenshotImage}
          />
          <div style={styles.homeIndicator}></div>
        </div>
      </div>
    );
  
    return (
      <div style={styles.container}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <ChefHat size={24} />
              </div>
              <span style={styles.logoText}>Cook AI</span>
            </div>
  
            {/* Desktop Navigation */}
            <div style={!isMobile ? styles.navLinksDesktop : { display: "none" }}>
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button
                style={styles.downloadBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#contact">Contact</NavLink>
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
  
        {/* Hero Section with Split Layout */}
        <section 
          id="home" 
          style={{
            ...styles.heroSection,
            ...(isMobile ? styles.mobileHero : {}),
          }}
        >
          {/* Left Side - Hero Content */}
          <div style={styles.heroLeft}>
            <div style={styles.badge}>
              <Star size={16} style={{ marginRight: "0.5rem", color: "#f97316" }} />
              AI-Powered Cooking Assistant
            </div>
  
            <h1 style={styles.heroTitle}>
              Cook Smarter with{" "}
              <span style={styles.heroGradientText}>AI Magic</span>
            </h1>
  
            <p style={styles.heroSubtitle}>
              Transform your cooking experience with intelligent recipe suggestions, 
              meal planning, and personalized culinary guidance powered by advanced AI.
            </p>
  
            <div style={styles.heroButtons}>
              <button
                style={styles.primaryBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 20px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Download size={20} />
                Download Now
                <ArrowRight size={20} />
              </button>
              
              {/* <button
                style={styles.secondaryBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#fed7aa";
                  e.currentTarget.style.background = "#fff7ed";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.background = "white";
                }}
              >
                <Play size={20} />
                Watch Demo
              </button> */}
            </div>
  
            {/* Stats */}
            {/* <div style={styles.stats}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>10K+</div>
                <div style={styles.statLabel}>Recipes</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>50K+</div>
                <div style={styles.statLabel}>Downloads</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>4.9★</div>
                <div style={styles.statLabel}>Rating</div>
              </div>
            </div> */}
          </div>
  
          {/* Right Side - Screenshots with Diagonal Layout */}
          <div 
            style={{
              ...styles.heroRight,
              ...(isMobile ? styles.mobileScreenshots : {}),
            }}
          >
            <div style={styles.screenshotsContainer}>
              <div style={{
                ...styles.screenshotsGrid,
                ...(isMobile ? styles.mobileScreenshotsGrid : {}),
              }}>
                {/* Phone 1 - Top Right */}
                <div style={styles.phonePosition1}>
                  <div
                    style={{
                      ...styles.iphoneFrame,
                      ...(isMobile ? styles.mobilePhoneFrame : {}),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <div style={styles.iphoneScreen}>
                      <div style={styles.iphoneNotch}></div>
                      <div style={styles.statusBar}>
                        {/* <div>9:41</div>
                        <div>100%</div> */}
                      </div>
                      <img
                        src={screenshots[0].image}
                        alt={`${screenshots[0].title} - Cook AI App Screenshot`}
                        style={styles.screenshotImage}
                      />
                      <div style={styles.homeIndicator}></div>
                    </div>
                  </div>
                </div>
  
                {/* Phone 2 - Top Left */}
                <div style={styles.phonePosition2}>
                  <div
                    style={{
                      ...styles.iphoneFrame,
                      ...(isMobile ? styles.mobilePhoneFrame : {}),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <div style={styles.iphoneScreen}>
                      <div style={styles.iphoneNotch}></div>
                      <div style={styles.statusBar}>
                        {/* <div>9:41</div>
                        <div>100%</div> */}
                      </div>
                      <img
                        src={screenshots[1].image}
                        alt={`${screenshots[1].title} - Cook AI App Screenshot`}
                        style={styles.screenshotImage}
                      />
                      <div style={styles.homeIndicator}></div>
                    </div>
                  </div>
                </div>
  
                {/* Phone 3 - Bottom Right */}
                <div style={styles.phonePosition3}>
                  <div
                    style={{
                      ...styles.iphoneFrame,
                      ...(isMobile ? styles.mobilePhoneFrame : {}),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <div style={styles.iphoneScreen}>
                      <div style={styles.iphoneNotch}></div>
                      <div style={styles.statusBar}>
                        {/* <div>9:41</div>
                        <div>100%</div> */}
                      </div>
                      <img
                        src={screenshots[2].image}
                        alt={`${screenshots[2].title} - Cook AI App Screenshot`}
                        style={styles.screenshotImage}
                      />
                      <div style={styles.homeIndicator}></div>
                    </div>
                  </div>
                </div>
  
                {/* Phone 4 - Bottom Left */}
                <div style={styles.phonePosition4}>
                  <div
                    style={{
                      ...styles.iphoneFrame,
                      ...(isMobile ? styles.mobilePhoneFrame : {}),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <div style={styles.iphoneScreen}>
                      <div style={styles.iphoneNotch}></div>
                      <div style={styles.statusBar}>
                        {/* <div>9:41</div>
                        <div>100%</div> */}
                      </div>
                      <img
                        src={screenshots[3].image}
                        alt={`${screenshots[3].title} - Cook AI App Screenshot`}
                        style={styles.screenshotImage}
                      />
                      <div style={styles.homeIndicator}></div>
                    </div>
                  </div>
                </div>
  
                {/* Subtle connecting lines */}
                {!isMobile && (
                  <>
                    <div style={styles.connectingLine1}></div>
                    <div style={styles.connectingLine2}></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" style={styles.features}>
          <div style={styles.featuresContainer}>
            <h2 style={styles.sectionTitle}>Powerful Features for Every Cook</h2>
            <p style={styles.sectionSubtitle}>
              Discover how Cook AI revolutionizes your kitchen experience with
              intelligent features designed for modern cooking.
            </p>
  
            <div style={styles.featuresGrid}>
              {[
                {
                  icon: <ChefHat size={32} />,
                  title: "Smart Recipe Suggestions",
                  description:
                    "Get personalized recipe recommendations based on your preferences, dietary restrictions, and available ingredients.",
                },
                {
                  icon: <Smartphone size={32} />,
                  title: "Meal Planning Assistant",
                  description:
                    "Plan your weekly meals effortlessly with AI-powered suggestions that balance nutrition and taste.",
                },
                {
                  icon: <Users size={32} />,
                  title: "Cooking Instructions",
                  description:
                    "Step-by-step guidance with smart timers and cooking tips to ensure perfect results every time.",
                },
                {
                  icon: <Star size={32} />,
                  title: "Ingredient Substitution",
                  description:
                    "Missing an ingredient? Get instant smart substitutions that maintain flavor and texture.",
                },
                {
                  icon: <Download size={32} />,
                  title: "Offline Access",
                  description:
                    "Access your favorite recipes and cooking guides even without an internet connection.",
                },
                {
                  icon: <Play size={32} />,
                  title: "Video Tutorials",
                  description:
                    "Learn cooking techniques with integrated video tutorials and visual cooking guides.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  style={styles.featureCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)";
                    const icon = e.currentTarget.querySelector("[data-icon]") as HTMLElement;
                    if (icon) icon.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)";
                    const icon = e.currentTarget.querySelector("[data-icon]") as HTMLElement;
                    if (icon) icon.style.transform = "scale(1)";
                  }}
                >
                  <div style={styles.featureIcon} data-icon>
                    {feature.icon}
                  </div>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureDesc}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" style={styles.contact}>
          <div style={styles.contactContainer}>
            <h2 style={styles.contactTitle}>Get in Touch</h2>
            <p style={styles.contactSubtitle}>
              Have questions, suggestions, or need support? We'd love to hear from
              you and help make your cooking journey even better.
            </p>
  
            <div style={styles.contactGrid}>
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>Email Us</h3>
                <p style={styles.contactCardText}>support@cookai.com</p>
              </div>
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>Follow Us</h3>
                <p style={styles.contactCardText}>@CookAIApp</p>
              </div>
              <div style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>Support</h3>
                <p style={styles.contactCardText}>24/7 Chat Support</p>
              </div>
            </div>
  
            <div style={styles.contactForm}>
              <div style={styles.formGrid}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={styles.formInput}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "2px solid #f97316";
                    e.currentTarget.style.borderColor = "#f97316";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = "none";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={styles.formInput}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "2px solid #f97316";
                    e.currentTarget.style.borderColor = "#f97316";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = "none";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                style={styles.formTextarea}
                onFocus={(e) => {
                  e.currentTarget.style.outline = "2px solid #f97316";
                  e.currentTarget.style.borderColor = "#f97316";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              />
              <button
                style={styles.submitBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerLogo}>
            <div style={styles.footerLogoIcon}>
              <ChefHat size={20} />
            </div>
            <span style={styles.footerLogoText}>Cook AI</span>
          </div>
          <p>
            © 2025 Cook AI. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </footer>
      </div>
    );
  };
export default CookAILanding;
