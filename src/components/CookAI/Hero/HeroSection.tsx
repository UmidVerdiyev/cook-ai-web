import React from "react";
import { Star, Download, ArrowRight } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getHeroStyles } from "../../../themes/styles/hero";
import { getCommonStyles } from "../../../themes/styles/common";
import ScreenshotsGrid from "./ScreenshotsGrid";

interface HeroSectionProps {
    theme: ColorTheme;
    isMobile: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, isMobile }) => {
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
                    Cook Smarter with
                    <span style={heroStyles.heroGradientText}>AI Magic</span>
                </h1>

                <p style={heroStyles.heroSubtitle}>
                    Transform your cooking experience with intelligent recipe suggestions,
                    meal planning, and personalized culinary guidance powered by advanced AI.
                </p>

                <div style={heroStyles.heroButtons}>
                    <button
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
                        <Download size={20} />
                        Download Now
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