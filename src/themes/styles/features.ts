// src/themes/styles/features.ts
import { CSSProperties } from "react";
import { ColorTheme } from "../colors";

export const getFeaturesStyles = (
  theme: ColorTheme
): { [key: string]: CSSProperties } => ({
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

  // MOBILE STYLES
  mobileFeatures: {
    width: "100%",
    padding: "3rem 0",
  },

  mobileFeaturesGrid: {
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
    maxWidth: "400px",
    margin: "0 auto",
  },

  mobileFeatureCard: {
    padding: "1.5rem",
    textAlign: "center" as const,
  },

  mobileFeatureIcon: {
    width: "48px",
    height: "48px",
    margin: "0 auto 1rem auto",
  },

  mobileFeatureTitle: {
    fontSize: "1.125rem",
    marginBottom: "0.75rem",
  },

  mobileFeatureDesc: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
});
