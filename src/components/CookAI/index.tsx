// src/components/CookAI/index.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../CookAI/Navigaton/Navigation";
import HeroSection from "./Hero/HeroSection";
import FeaturesSection from "./Features/FeaturesSection";
import ContactSection from "./Contact/ContactSection";
import Footer from "./Footer/Footer";
import NotifyMeModal from "./Modals/NotifyMeModal";
import PrivacyPolicy from "./LegalPages/PrivacyPolicy";
import TermsOfUse from "./LegalPages/TermsOfUse";
import { themes } from "../../themes/colors";
import { getCommonStyles } from "../../themes/styles/common";

const CookAI: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Theme configuration
    const currentTheme = themes['blue-tech'];
    const commonStyles = getCommonStyles(currentTheme);

    // Determine current view based on URL
    const currentView = location.pathname === '/privacy' ? 'privacy'
        : location.pathname === '/terms' ? 'terms'
            : 'main';

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
      
      html {
        scroll-behavior: smooth;
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

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [location.pathname]);

    const scrollToSection = (sectionId: string) => {
        // If not on main page, navigate to home first
        if (currentView !== 'main') {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        // Only run scroll tracking when on main view
        if (currentView !== 'main') return;

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
    }, [currentView]);

    // Handle navigation to legal pages
    const handleNavigateToLegal = (page: 'privacy' | 'terms') => {
        navigate(`/${page}`);
        setIsMenuOpen(false);
    };

    // Handle back to main app
    const handleBackToMain = () => {
        navigate('/');
    };

    // Render Privacy Policy page
    if (currentView === 'privacy') {
        return <PrivacyPolicy theme={currentTheme} onBack={handleBackToMain} />;
    }

    // Render Terms of Use page
    if (currentView === 'terms') {
        return <TermsOfUse theme={currentTheme} onBack={handleBackToMain} />;
    }

    // Render main app
    return (
        <div style={commonStyles.container}>
            <Navigation
                theme={currentTheme}
                activeSection={activeSection}
                isMenuOpen={isMenuOpen}
                isMobile={isMobile}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                onNavigate={scrollToSection}
                onNotifyClick={() => setIsNotifyModalOpen(true)}
            />

            <HeroSection
                theme={currentTheme}
                isMobile={isMobile}
                onNotifyClick={() => setIsNotifyModalOpen(true)}
             />

            <FeaturesSection
                theme={currentTheme}
                isMobile={isMobile}
            />

            <ContactSection
                theme={currentTheme}
                isMobile={isMobile}
            />

            <Footer
                theme={currentTheme}
                onNavigateToLegal={handleNavigateToLegal}
            />

            <NotifyMeModal
                theme={currentTheme}
                isOpen={isNotifyModalOpen}
                onClose={() => setIsNotifyModalOpen(false)}
            />
        </div>
    );
};

export default CookAI;