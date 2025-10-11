// src/components/CookAI/Features/FeaturesSection.tsx
import React from "react";
import {ChefHat, BarChart3, RefreshCcw, Apple, ListChecks, PlayCircle} from "lucide-react";
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
            icon: <Apple size={32} />,
            title: "Personalized Diet Modes",
            description:
                "Select your lifestyle — Gym, Vegan, Vegetarian, or Standard. Cook AI tailors every recipe and suggestion to your goals.",
        },
        {
            icon: <ChefHat size={32} />,
            title: "Smart Recipe Suggestions",
            description:
                "Instantly discover recipes that fit your taste, available ingredients, and dietary preferences — all powered by AI.",
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Meal & Activity Insights",
            description:
                "Track your cooking activity, favorite dishes, and progress over time. Understand your habits with visual insights.",
        },
        {
            icon: <RefreshCcw size={32} />,
            title: "Ingredient Substitutions",
            description:
                "Missing something? Get instant AI-suggested ingredient swaps that preserve both flavor and nutrition.",
        },
        {
            icon: <ListChecks size={32} />,
            title: "Step-by-Step Guidance",
            description:
                "Follow clear, interactive steps with timers and tips to achieve perfect results every time you cook.",
        },
        {
            icon: <PlayCircle size={32} />,
            title: "Video Tutorials",
            description:
                "Watch short videos for each recipe or ingredient — ideal for beginners learning new cooking techniques.",
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
