import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getLegalStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    // Main container
    container: {
        minHeight: "100vh",
        background: theme.backgroundGradient,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    // Content wrapper
    content: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px 80px 20px",
    },

    // Header section
    header: {
        marginBottom: "48px",
        paddingBottom: "24px",
        borderBottom: `3px solid ${theme.primary}`,
    },

    // Back button
    backButton: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 24px",
        background: theme.primaryGradient,
        color: "white",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "600",
        marginBottom: "24px",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },

    // Title
    title: {
        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        fontWeight: "bold",
        color: theme.textPrimary,
        marginBottom: "12px",
        lineHeight: 1.2,
    },

    // Gradient text effect
    gradientText: {
        background: theme.primaryGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },

    // Last updated text
    lastUpdated: {
        fontSize: "14px",
        color: theme.textSecondary,
        fontStyle: "italic",
    },

    // Content section card
    section: {
        marginBottom: "40px",
        background: theme.cardBackground,
        padding: "32px",
        borderRadius: "24px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        border: `1px solid ${theme.cardBorder}`,
    },

    // Section title
    sectionTitle: {
        fontSize: "24px",
        fontWeight: "700",
        color: theme.textPrimary,
        marginBottom: "20px",
        paddingBottom: "12px",
        borderBottom: `2px solid ${theme.primary}20`,
    },

    // Paragraph text
    paragraph: {
        fontSize: "16px",
        lineHeight: "1.8",
        color: theme.textSecondary,
        marginBottom: "16px",
    },

    // List container
    list: {
        marginLeft: "24px",
        marginBottom: "16px",
    },

    // List item
    listItem: {
        fontSize: "16px",
        lineHeight: "1.8",
        color: theme.textSecondary,
        marginBottom: "14px",
        paddingLeft: "8px",
    },

    // Highlighted text
    highlight: {
        background: `${theme.primary}15`,
        padding: "3px 8px",
        borderRadius: "6px",
        fontWeight: "600",
        color: theme.primary,
    },

    // Warning box (for Terms of Use)
    warningBox: {
        background: "linear-gradient(135deg, #fef3c7, #fde68a)",
        padding: "28px",
        borderRadius: "20px",
        border: "2px solid #f59e0b",
        marginBottom: "32px",
        boxShadow: "0 4px 12px rgba(245, 158, 11, 0.15)",
    },

    // Warning title
    warningTitle: {
        fontSize: "20px",
        fontWeight: "700",
        color: "#92400e",
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },

    // Warning text
    warningText: {
        fontSize: "15px",
        lineHeight: "1.7",
        color: "#78350f",
        margin: 0,
    },

    // Contact box
    contactBox: {
        background: theme.primaryGradient,
        padding: "32px",
        borderRadius: "24px",
        color: "white",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        marginTop: "48px",
    },

    // Contact title
    contactTitle: {
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "16px",
        color: "white",
    },

    // Contact text
    contactText: {
        fontSize: "16px",
        lineHeight: "1.8",
        marginBottom: "12px",
        color: "rgba(255, 255, 255, 0.95)",
    },

    // Link
    link: {
        color: "white",
        textDecoration: "underline",
        fontWeight: "600",
        transition: "opacity 0.3s ease",
    },

    // Mobile responsive styles
    mobileContent: {
        padding: "20px 16px 60px 16px",
    },

    mobileSection: {
        padding: "24px",
        marginBottom: "24px",
    },

    mobileTitle: {
        fontSize: "2rem",
    },

    mobileSectionTitle: {
        fontSize: "20px",
        marginBottom: "16px",
    },

    mobileParagraph: {
        fontSize: "15px",
        lineHeight: "1.7",
    },

    mobileContactBox: {
        padding: "24px",
        marginTop: "32px",
    },
});