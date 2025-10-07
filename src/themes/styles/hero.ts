import { CSSProperties } from "react";
import { ColorTheme } from "../colors";

export const getHeroStyles = (
  theme: ColorTheme
): { [key: string]: CSSProperties } => ({
  heroSection: {
    paddingTop: "64px",
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "2rem", 
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "64px 1rem 0 1rem", 
    width: "100%",
    boxSizing: "border-box",
    // overflow: "hidden", 
  },

  heroLeft: {
    width: "100%",
    padding: "2rem 0",
    boxSizing: "border-box", 
  },

  heroRight: {
    position: "relative" as const,
    height: "100vh",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0", 
    boxSizing: "border-box", 
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    background: theme.badgeBackground,
    borderRadius: "9999px",
    color: theme.badgeText,
    fontSize: "0.875rem",
    fontWeight: "500",
    marginBottom: "1.5rem",
  },

  heroTitle: {
    fontSize: "clamp(3rem, 6vw, 4.5rem)",
    fontWeight: "bold",
    color: theme.textPrimary,
    marginBottom: "1.5rem",
    lineHeight: 1.1,
  },

  heroGradientText: {
    background: theme.primaryGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  heroSubtitle: {
    fontSize: "1.25rem",
    color: theme.textSecondary,
    marginBottom: "2.5rem",
    lineHeight: 1.6,
  },

  heroButtons: {
    display: "flex",
    gap: "1rem",
    marginBottom: "3rem",
    flexWrap: "wrap" as const,
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
    maxWidth: "24rem",
  },

  statItem: {
    textAlign: "center" as const,
  },

  statNumber: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: theme.primary,
  },

  statLabel: {
    color: theme.textSecondary,
  },

  // Screenshots styles
  screenshotsContainer: {
    position: "relative" as const,
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    margin: "0", 
    boxSizing: "border-box", 
  },

  screenshotsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "1.5rem",
    width: "fit-content",
    height: "auto", 
    maxWidth: "480px",
    margin: "0 auto", 
  },

  iphoneFrame: {
    position: "relative" as const,
    width: "200px",
    height: "400px",
    background: "linear-gradient(145deg, #2d3748, #1a202c)",
    borderRadius: "32px",
    padding: "8px",
    boxShadow:
      "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    transition: "all 0.5s ease",
    cursor: "pointer",
    boxSizing: "border-box", 
  },

  iphoneScreen: {
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    background: "#000",
    overflow: "hidden" as const,
    position: "relative" as const,
  },

  iphoneNotch: {
    position: "absolute" as const,
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "20px",
    background: "#000",
    borderRadius: "0 0 12px 12px",
    zIndex: 10,
  },

  screenshotImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    borderRadius: "24px",
  },

  homeIndicator: {
    position: "absolute" as const,
    bottom: "6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "4px",
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "2px",
  },

  // Phone positions - adjusted for better centering
  phonePosition1: {
    transform: "rotate(-3deg) translateY(-10px)",
    justifySelf: "end",
    alignSelf: "end",
  },

  phonePosition2: {
    transform: "rotate(2deg) translateY(10px)",
    justifySelf: "start",
    alignSelf: "end",
  },

  phonePosition3: {
    transform: "rotate(1deg) translateY(-20px)",
    justifySelf: "end",
    alignSelf: "start",
  },

  phonePosition4: {
    transform: "rotate(-2deg) translateY(15px)",
    justifySelf: "start",
    alignSelf: "start",
  },

  // Mobile responsive
mobileHero: {
    width: '100%',
    gridTemplateColumns: "1fr",
    gap: "2rem",
    textAlign: "center" as const,
    padding: "64px 1rem 2rem 1rem",
    minHeight: "auto", 
},

mobileScreenshots: {
    height: "auto",
    padding: "0",
    marginBottom: "3rem", 
},

mobileScreenshotsGrid: {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "1rem",
    maxWidth: "360px",
    maxHeight: "none", 
    margin: "0 auto", 
},

  mobilePhoneFrame: {
    width: "160px",
    height: "320px",
  },
});
