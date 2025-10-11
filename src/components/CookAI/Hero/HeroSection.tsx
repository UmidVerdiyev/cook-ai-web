// src/components/CookAI/Hero/HeroSection.tsx
import React from "react";
import { Star, Bell, ArrowRight } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getHeroStyles } from "../../../themes/styles/hero";
import { getCommonStyles } from "../../../themes/styles/common";
import ScreenshotsGrid from "./ScreenshotsGrid";

interface HeroSectionProps {
    theme: ColorTheme;
    isMobile: boolean;
    onNotifyClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, isMobile, onNotifyClick }) => {
    const heroStyles = getHeroStyles(theme);
    const commonStyles = getCommonStyles(theme);

    return (
        <section
            id="home"
            style={{
                ...heroStyles.heroSection,
                ...(isMobile ? heroStyles.mobileHero : {}),
            }}
        >
            {/* Left Side - Hero Content */}
            <div style={heroStyles.heroLeft}>
                <div style={heroStyles.badge}>
                    <Star size={16} style={{ marginRight: "0.5rem", color: theme.primary }} />
                    AI-Powered Cooking Assistant
                </div>

                <h1 style={heroStyles.heroTitle}>
                    <span style={heroStyles.heroGradientText}>Cook AI </span>
                    — Your Personal Kitchen Assistant
                </h1>

                <p style={heroStyles.heroSubtitle}>
                    Choose your cooking style —
                    <span style={heroStyles.statNumber}> Gym, Vegan, Vegetarian, or Standard </span>
                    — and let AI suggest recipes that fit your lifestyle.
                    Cook AI helps you plan meals, discover dishes, and make the most of your ingredients effortlessly.
                </p>

                <div style={heroStyles.heroButtons}>
                    <button
                        onClick={onNotifyClick}
                        style={commonStyles.primaryBtn}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 20px 25px rgba(0, 0, 0, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <Bell size={20} />
                        Notify Me at Launch
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Side - Screenshots */}
            <div
                style={{
                    ...heroStyles.heroRight,
                    ...(isMobile ? heroStyles.mobileScreenshots : {}),
                }}
            >
                <ScreenshotsGrid theme={theme} isMobile={isMobile} />
            </div>
        </section>
    );
};

export default HeroSection;