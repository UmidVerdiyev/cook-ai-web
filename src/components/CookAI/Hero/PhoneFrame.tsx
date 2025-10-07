// src/components/CookAI/Hero/PhoneFrame.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getHeroStyles } from "../../../themes/styles/hero";
import { Screenshot } from "../../../types";

interface PhoneFrameProps {
    screenshot: Screenshot;
    theme: ColorTheme;
    isMobile: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ screenshot, theme, isMobile }) => {
    const styles = getHeroStyles(theme);

    return (
        <div
            style={{
                ...styles.iphoneFrame,
                ...(isMobile ? styles.mobilePhoneFrame : {}),
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
            }}
        >
            <div style={styles.iphoneScreen}>
                {/* iPhone Notch */}
                <div style={styles.iphoneNotch}></div>

                {/* Status Bar */}
                <div style={{
                    position: "absolute" as const,
                    top: "8px",
                    left: "16px",
                    right: "16px",
                    height: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 20,
                    fontSize: "10px",
                    fontWeight: "600",
                    color: "white",
                    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}>
                    <div>9:41</div>
                    <div>●●●●●</div>
                    <div>100%</div>
                </div>

                {/* FIXED: Proper image container with better positioning */}
                <div style={{
                    position: "absolute" as const,
                    top: "30px", // Account for notch and status bar
                    left: "0",
                    right: "0",
                    bottom: "12px", // Account for home indicator
                    borderRadius: "20px",
                    overflow: "hidden" as const,
                    background: "#000", // Fallback background
                }}>
                    <img
                        src={screenshot.image}
                        alt={`${screenshot.title} - Cook AI App Screenshot`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover" as const,
                            objectPosition: "center top", // FIXED: Better positioning
                            borderRadius: "20px",
                            // FIXED: Ensure image is properly contained
                            maxWidth: "100%",
                            maxHeight: "100%",
                        }}
                        onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.background = "linear-gradient(135deg, #f3f4f6, #e5e7eb)";
                            target.style.display = "flex";
                            target.style.alignItems = "center";
                            target.style.justifyContent = "center";
                            target.style.color = "#6b7280";
                            target.style.fontSize = "12px";
                            target.alt = "Image not found";
                        }}
                    />
                </div>

                {/* Home Indicator */}
                <div style={styles.homeIndicator}></div>
            </div>
        </div>
    );
};

export default PhoneFrame;