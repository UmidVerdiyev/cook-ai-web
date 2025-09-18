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
                <div style={styles.iphoneNotch}></div>
                <div style={{
                    position: "absolute" as const,
                    top: "8px",
                    left: "16px",
                    right: "16px",
                    height: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 10,
                    fontSize: "10px",
                    fontWeight: "600",
                    color: "white",
                }}>
                    {/* Status bar content can be added here if needed */}
                </div>
                <img
                    src={screenshot.image}
                    alt={`${screenshot.title} - Cook AI App Screenshot`}
                    style={styles.screenshotImage}
                />
                <div style={styles.homeIndicator}></div>
            </div>
        </div>
    );
};

export default PhoneFrame;