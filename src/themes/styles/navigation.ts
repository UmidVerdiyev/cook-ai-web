import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getNavigationStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    nav: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: theme.navBackground,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.navBorder}`,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },

    navContainer: {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
    },

    logo: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },

    logoIcon: {
        width: "40px",
        height: "40px",
        background: theme.logoGradient,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },

    logoText: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        background: theme.primaryGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },

    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },

    navLink: {
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        transition: "all 0.3s ease",
        color: theme.textSecondary,
        textDecoration: "none",
    },

    navLinkActive: {
        background: theme.primary,
        color: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },

    downloadBtn: {
        marginLeft: "1rem",
        background: theme.primaryGradient,
        color: "white",
        padding: "0.5rem 1.5rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },

    mobileMenuBtn: {
        display: "block",
        padding: "0.5rem",
        borderRadius: "8px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },

    mobileMenu: {
        display: "block" as const,
        background: "white",
        borderTop: "1px solid #e5e7eb",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        gap: "0.5rem",
        flexDirection: "column" as const,
    },
});