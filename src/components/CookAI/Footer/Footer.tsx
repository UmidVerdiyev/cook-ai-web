// src/components/CookAI/Footer/Footer.tsx
import React from "react";
import { ChefHat } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getFooterStyles } from "../../../themes/styles/footer";

interface FooterProps {
    theme: ColorTheme;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
    const styles = getFooterStyles(theme);

    return (
        <footer style={styles.footer}>
            <div style={styles.footerLogo}>
                <div style={styles.footerLogoIcon}>
                    <ChefHat size={20} />
                </div>
                <span style={styles.footerLogoText}>Cook AI</span>
            </div>
            <p>
                © 2025 Cook AI. All rights reserved. Made with ❤️ for food lovers.
            </p>
        </footer>
    );
};

export default Footer;