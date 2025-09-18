import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getCommonStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    container: {
        minHeight: "100vh",
        background: theme.backgroundGradient,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    sectionTitle: {
        fontSize: "clamp(2.5rem, 6vw, 3rem)",
        fontWeight: "bold",
        color: theme.textPrimary,
        marginBottom: "1.5rem",
        textAlign: "center" as const,
    },

    sectionSubtitle: {
        fontSize: "1.25rem",
        color: theme.textSecondary,
        maxWidth: "48rem",
        margin: "0 auto 4rem auto",
        textAlign: "center" as const,
    },

    primaryBtn: {
        display: "flex",
        alignItems: "center",
        background: theme.primaryGradient,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "16px",
        fontSize: "1.125rem",
        fontWeight: "600",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        gap: "0.5rem",
    },

    secondaryBtn: {
        display: "flex",
        alignItems: "center",
        background: theme.cardBackground,
        color: theme.textSecondary,
        padding: "1rem 2rem",
        borderRadius: "16px",
        fontSize: "1.125rem",
        fontWeight: "600",
        border: `2px solid ${theme.cardBorder}`,
        cursor: "pointer",
        transition: "all 0.3s ease",
        gap: "0.5rem",
    },
});