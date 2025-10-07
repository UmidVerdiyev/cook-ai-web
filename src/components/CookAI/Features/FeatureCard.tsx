// src/components/CookAI/Features/FeatureCard.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getFeaturesStyles } from "../../../themes/styles/features";
import { Feature } from "../../../types";

interface FeatureCardProps {
    feature: Feature;
    theme: ColorTheme;
    isMobile?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, theme, isMobile = false }) => {
    const styles = getFeaturesStyles(theme);

    return (
        <div
            style={{
                ...styles.featureCard,
                ...(isMobile ? styles.mobileFeatureCard : {}),
            }}
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
            <div
                style={{
                    ...styles.featureIcon,
                    ...(isMobile ? styles.mobileFeatureIcon : {}),
                }}
                data-icon
            >
                {feature.icon}
            </div>
            <h3 style={{
                ...styles.featureTitle,
                ...(isMobile ? styles.mobileFeatureTitle : {}),
            }}>
                {feature.title}
            </h3>
            <p style={{
                ...styles.featureDesc,
                ...(isMobile ? styles.mobileFeatureDesc : {}),
            }}>
                {feature.description}
            </p>
        </div>
    );
};

export default FeatureCard;