import React, { useState, useEffect } from "react";
import Navigation from "../CookAI/Navigaton/Navigation";
import HeroSection from "./Hero/HeroSection";
import FeaturesSection from "./Features/FeaturesSection";
import ContactSection from "./Contact/ContactSection";
import Footer from "./Footer/Footer";
import { themes } from "../../themes/colors";
import { getCommonStyles } from "../../themes/styles/common";

const CookAI: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    // Change this to switch themes: 'orange-red', 'blue-purple', 'green-teal'
    const currentTheme = themes['blue-tech'];
    const commonStyles = getCommonStyles(currentTheme);

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

    return (
        <div style={commonStyles.container}>
            <Navigation
                theme={currentTheme}
                activeSection={activeSection}
                isMenuOpen={isMenuOpen}
                isMobile={isMobile}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                onNavigate={scrollToSection}
            />

            <HeroSection
                theme={currentTheme}
                isMobile={isMobile}
            />

            <FeaturesSection
                theme={currentTheme}
            />

            <ContactSection
                theme={currentTheme}
            />

            <Footer
                theme={currentTheme}
            />
        </div>
    );
};

export default CookAI;