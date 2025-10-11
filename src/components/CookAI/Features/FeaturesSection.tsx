// src/components/CookAI/Features/FeaturesSection.tsx
import React from "react";
import {Utensils, Sparkles, TrendingUp, Shuffle, Clock, Video, Leaf} from "lucide-react";
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
            icon: <Leaf size={32} />,
            title: "4 Personalized Diet Modes",
            description:
                "Choose Gym, Vegan, Vegetarian, or Standard. Every recipe adapts to your lifestyle and fitness goals automatically.",
        },
        {
            icon: <Sparkles size={32} />,
            title: "AI Recipe Generator",
            description:
                "Get instant recipes from ingredients you have. AI creates personalized dishes that match your taste and dietary preferences.",
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Cooking Insights & Analytics",
            description:
                "Track your favorite recipes, cooking frequency, and dietary habits with beautiful visual charts and progress reports.",
        },
        {
            icon: <Shuffle size={32} />,
            title: "Smart Ingredient Swaps",
            description:
                "Don't have an ingredient? Get instant AI substitutions that maintain taste and nutritional value perfectly.",
        },
        {
            icon: <Clock size={32} />,
            title: "Step-by-Step + Timers",
            description:
                "Follow clear instructions with built-in timers and cooking tips. Perfect results, every time you cook.",
        },
        {
            icon: <Video size={32} />,
            title: "YouTube Tutorial Links",
            description:
                "Learn with curated video tutorials for recipes and techniques. Perfect for visual learners and beginners.",
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
                <h2 style={commonStyles.sectionTitle}>Smarter Cooking, Your Way</h2>
                <p style={commonStyles.sectionSubtitle}>
                    From personalized diets to ingredient management, Cook AI adapts to you — not the other way around.
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