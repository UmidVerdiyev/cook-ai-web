import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getFeaturesStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    features: {
        padding: "5rem 1rem",
        background: theme.featuresGradient,
    },

    featuresContainer: {
        maxWidth: "1280px",
        margin: "0 auto",
    },

    featuresGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
    },

    featureCard: {
        background: theme.cardBackground,
        padding: "2rem",
        borderRadius: "24px",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        transition: "all 0.5s ease",
        cursor: "pointer",
    },

    featureIcon: {
        width: "64px",
        height: "64px",
        background: theme.primaryGradient,
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
        color: theme.textPrimary,
        marginBottom: "1rem",
    },

    featureDesc: {
        color: theme.textSecondary,
        lineHeight: 1.6,
    },
});
