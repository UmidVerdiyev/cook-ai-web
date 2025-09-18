import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getHeroStyles } from "../../../themes/styles/hero";
import { screenshots } from "../../../data/screenshots";
import PhoneFrame from "./PhoneFrame";

interface ScreenshotsGridProps {
    theme: ColorTheme;
    isMobile: boolean;
}

const ScreenshotsGrid: React.FC<ScreenshotsGridProps> = ({ theme, isMobile }) => {
    const styles = getHeroStyles(theme);

    const phonePositions = [
        styles.phonePosition1,
        styles.phonePosition2,
        styles.phonePosition3,
        styles.phonePosition4,
    ];

    return (
        <div style={styles.screenshotsContainer}>
            <div
                style={{
                    ...styles.screenshotsGrid,
                    ...(isMobile ? styles.mobileScreenshotsGrid : {}),
                }}
            >
                {screenshots.map((screenshot, index) => (
                    <div key={index} style={phonePositions[index]}>
                        <PhoneFrame
                            screenshot={screenshot}
                            theme={theme}
                            isMobile={isMobile}
                        />
                    </div>
                ))}

                {/* Subtle connecting lines for desktop */}
                {!isMobile && (
                    <>
                        <div style={{
                            position: "absolute" as const,
                            top: "45%",
                            left: "45%",
                            width: "60px",
                            height: "2px",
                            background: `linear-gradient(90deg, ${theme.primary}, transparent)`,
                            opacity: 0.3,
                            borderRadius: "1px",
                        }} />
                        <div style={{
                            position: "absolute" as const,
                            top: "55%",
                            right: "45%",
                            width: "60px",
                            height: "2px",
                            background: `linear-gradient(270deg, ${theme.secondary}, transparent)`,
                            opacity: 0.3,
                            borderRadius: "1px",
                        }} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ScreenshotsGrid;