export const blueTechTheme = {
    // Primary colors
    primary: "#0598CE",           // mobile: blue500
    primaryDark: "#047BB8",       // mobile: blue600
    secondary: "#33A7FF",         // mobile: blue400 (used as lighter accent)
    secondaryDark: "#035E91",     // mobile: blue700

    // Gradients
    primaryGradient: "linear-gradient(135deg, #0598CE, #33A7FF)", // mobile gradientStart → gradientEnd
    logoGradient: "linear-gradient(135deg, #0598CE, #33A7FF)",    // match branding with mobile
    backgroundGradient: "linear-gradient(135deg, #F8F8F8 0%, #FFFFFF 50%, #E6F4FF 100%)",
    featuresGradient: "linear-gradient(135deg, #F8F8F8, #E6F4FF)",

    // Background colors
    navBackground: "rgba(255, 255, 255, 0.9)", // keep same, matches light background
    cardBackground: "#FFFFFF",                 // mobile: gray50
    darkBackground: "linear-gradient(135deg, #113768, #0D0D0D)", // mobile: dark.primary → dark.secondary

    // Border colors
    navBorder: "#E0E0E0",        // mobile: light.border
    cardBorder: "#E0E0E0",       // same as above
    inputBorder: "rgba(0, 0, 0, 0.1)", // slightly darker to match mobile gray200

    // Text colors
    textPrimary: "#113768",      // mobile: light.text.primary
    textSecondary: "#6B6B6B",    // mobile: light.text.secondary
    textLight: "#B3B3B3",        // mobile: dark.text.secondary
    textWhite: "#FFFFFF",        // mobile: dark.text.primary
    textMuted: "#E0E0E0",        // slightly lighter for disabled text

    // Badge colors
    badgeBackground: "linear-gradient(135deg, #CCE9FF, #99D3FF)", // mobile: blue100 → blue200
    badgeText: "#113768",        // mobile: dark blue

    // Hover states
    navLinkHover: "#E6F4FF",     // mobile: blue50
    buttonHover: "rgba(5, 152, 206, 0.1)", // semi-transparent primary hover
}