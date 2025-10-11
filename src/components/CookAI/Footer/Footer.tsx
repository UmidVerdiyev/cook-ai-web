// src/components/CookAI/Footer/Footer.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getFooterStyles } from "../../../themes/styles/footer";

interface FooterProps {
    theme: ColorTheme;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
    const styles = getFooterStyles(theme);

    return (
        <footer style={styles.footer}>
            {/* ✅ Updated Logo Section */}
            <div style={styles.footerLogo}>
                <div style={styles.footerLogoIcon}>
                    <img
                        src="/images/logo.svg"
                        alt="Cook AI Logo"
                        style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                            borderRadius: "8px",
                            opacity: 0.95,
                        }}
                    />
                </div>
                <span style={styles.footerLogoText}>Cook AI</span>
            </div>

            {/* ✅ Footer Text */}
            <p style={styles.footerText}>
                © 2025 <strong>Cook AI</strong>. All rights reserved. Made with ❤️ for food lovers.
            </p>
        </footer>
    );
};

export default Footer;
