import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getContactStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    contact: {
        padding: "5rem 1rem",
        background: theme.darkBackground,
    },

    contactContainer: {
        maxWidth: "64rem",
        margin: "0 auto",
        textAlign: "center" as const,
    },

    contactTitle: {
        fontSize: "clamp(2.5rem, 6vw, 3rem)",
        fontWeight: "bold",
        color: "white",
        marginBottom: "1.5rem",
    },

    contactSubtitle: {
        fontSize: "1.25rem",
        color: theme.textMuted,
        marginBottom: "3rem",
        maxWidth: "32rem",
        margin: "0 auto 3rem auto",
    },

    contactGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem",
    },

    contactCard: {
        background: theme.buttonHover,
        backdropFilter: "blur(16px)",
        borderRadius: "16px",
        padding: "2rem",
        border: `1px solid ${theme.inputBorder}`,
    },

    contactCardTitle: {
        fontSize: "1.25rem",
        fontWeight: "600",
        color: "white",
        marginBottom: "1rem",
    },

    contactCardText: {
        color: theme.textMuted,
    },

    contactForm: {
        background: theme.buttonHover,
        backdropFilter: "blur(16px)",
        borderRadius: "24px",
        padding: "2rem",
        border: `1px solid ${theme.inputBorder}`,
    },

    formGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        marginBottom: "1.5rem",
    },

    formInput: {
        width: "100%",
        padding: "1rem 1.5rem",
        background: theme.buttonHover,
        border: `1px solid ${theme.inputBorder}`,
        borderRadius: "12px",
        color: "white",
        fontSize: "1rem",
        outline: "none",
        transition: "all 0.3s ease",
    },

    formTextarea: {
        width: "100%",
        padding: "1rem 1.5rem",
        background: theme.buttonHover,
        border: `1px solid ${theme.inputBorder}`,
        borderRadius: "12px",
        color: "white",
        fontSize: "1rem",
        outline: "none",
        resize: "none" as const,
        marginBottom: "1.5rem",
        transition: "all 0.3s ease",
    },

    submitBtn: {
        width: "100%",
        background: theme.primaryGradient,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "12px",
        fontSize: "1.125rem",
        fontWeight: "600",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
});