// src/components/CookAI/Features/FeaturesSection.tsx
import React from "react";
import { ChefHat, Smartphone, Users, Star, Download, Play } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getFeaturesStyles } from "../../../themes/styles/features";
import { getCommonStyles } from "../../../themes/styles/common";
import FeatureCard from "./FeatureCard";
import { Feature } from "../../../types";

interface FeaturesSectionProps {
    theme: ColorTheme;
    isMobile?: boolean;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ theme, isMobile = false }) => {
    const featuresStyles = getFeaturesStyles(theme);
    const commonStyles = getCommonStyles(theme);

    const features: Feature[] = [
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
    ];

    return (
        <section
            id="features"
            style={{
                ...featuresStyles.features,
                ...(isMobile ? featuresStyles.mobileFeatures : {}),
            }}
        >
            <div style={featuresStyles.featuresContainer}>
                <h2 style={commonStyles.sectionTitle}>Powerful Features for Every Cook</h2>
                <p style={commonStyles.sectionSubtitle}>
                    Discover how Cook AI revolutionizes your kitchen experience with
                    intelligent features designed for modern cooking.
                </p>

                <div
                    style={{
                        ...featuresStyles.featuresGrid,
                        ...(isMobile ? featuresStyles.mobileFeaturesGrid : {}),
                    }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            theme={theme}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;