// src/themes/styles/notify.ts
import { CSSProperties } from 'react';
import { ColorTheme } from '../colors';

export const getNotifyModalStyles = (theme: ColorTheme): { [key: string]: CSSProperties } => ({
    overlay: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
    },

    modal: {
        background: theme.cardBackground,
        borderRadius: "24px",
        padding: "40px",
        maxWidth: "500px",
        width: "90%",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        position: "relative" as const,
        border: `1px solid ${theme.cardBorder}`,
    },

    closeButton: {
        position: "absolute" as const,
        top: "16px",
        right: "16px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: theme.textSecondary,
        padding: "8px",
        borderRadius: "8px",
        transition: "all 0.2s ease",
    },

    iconContainer: {
        width: "64px",
        height: "64px",
        background: theme.primaryGradient,
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 24px auto",
    },

    title: {
        fontSize: "28px",
        fontWeight: "700",
        color: theme.textPrimary,
        marginBottom: "12px",
        textAlign: "center" as const,
    },

    subtitle: {
        fontSize: "16px",
        color: theme.textSecondary,
        marginBottom: "32px",
        textAlign: "center" as const,
        lineHeight: 1.6,
    },

    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "16px",
    },

    input: {
        padding: "16px 20px",
        fontSize: "16px",
        border: `2px solid ${theme.cardBorder}`,
        borderRadius: "12px",
        outline: "none",
        transition: "all 0.3s ease",
        fontFamily: "inherit",
        color: theme.textPrimary,
    },

    button: {
        padding: "16px 32px",
        background: theme.primaryGradient,
        color: "white",
        border: "none",
        borderRadius: "12px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },

    successMessage: {
        background: "#10b981",
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        textAlign: "center" as const,
        fontWeight: "600",
    },

    errorMessage: {
        background: "#ef4444",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        textAlign: "center" as const,
        fontSize: "14px",
    },

    // Mobile styles
    mobileModal: {
        padding: "32px 24px",
        width: "95%",
        maxWidth: "400px",
    },

    mobileTitle: {
        fontSize: "24px",
    },

    mobileSubtitle: {
        fontSize: "15px",
        marginBottom: "24px",
    },

    mobileInput: {
        padding: "14px 16px",
        fontSize: "16px", // Prevents zoom on iOS
    },

    mobileButton: {
        padding: "14px 24px",
    },
});