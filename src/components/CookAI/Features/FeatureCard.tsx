import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getFeaturesStyles } from "../../../themes/styles/features";
import { Feature } from "../../../types";

interface FeatureCardProps {
    feature: Feature;
    theme: ColorTheme;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, theme }) => {
    const styles = getFeaturesStyles(theme);

    return (
        <div
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
    );
};

export default FeatureCard;