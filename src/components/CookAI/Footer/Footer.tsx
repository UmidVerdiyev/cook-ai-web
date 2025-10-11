// src/components/CookAI/Footer/Footer.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getFooterStyles } from "../../../themes/styles/footer";

interface FooterProps {
    theme: ColorTheme;
    onNavigateToLegal?: (page: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ theme, onNavigateToLegal }) => {
    const styles = getFooterStyles(theme);

    const handleLegalClick = (page: 'privacy' | 'terms') => {
        if (onNavigateToLegal) {
            onNavigateToLegal(page);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={styles.footer}>
            {/* 🔹 Logo Section */}
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

            {/* 🔹 Text + Legal Links */}
            <p style={styles.footerText}>
                © 2025 <strong>Cook AI</strong>. All rights reserved. Made with ❤️ for food lovers.
            </p>

            <div style={styles.legalLinks}>
                <button
                    onClick={() => handleLegalClick('privacy')}
                    style={{
                        ...styles.legalLink,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        font: 'inherit'
                    }}
                >
                    Privacy Policy
                </button>
                <span style={styles.separator}>·</span>
                <button
                    onClick={() => handleLegalClick('terms')}
                    style={{
                        ...styles.legalLink,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        font: 'inherit'
                    }}
                >
                    Terms of Use
                </button>
            </div>
        </footer>
    );
};

export default Footer;