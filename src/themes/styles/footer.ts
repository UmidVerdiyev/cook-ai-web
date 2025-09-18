import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getFooterStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    footer: {
        background: "black",
        textAlign: "center" as const,
        padding: "2rem 1rem",
        color: theme.textLight,
    },

    footerLogo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        marginBottom: "1rem",
    },

    footerLogoIcon: {
        width: "32px",
        height: "32px",
        background: theme.logoGradient,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },

    footerLogoText: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        background: theme.primaryGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },
});