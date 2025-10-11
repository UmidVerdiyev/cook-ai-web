// src/components/CookAI/LegalPages/PrivacyPolicy.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getLegalStyles } from "../../../themes/styles/legal";

interface PrivacyPolicyProps {
    theme: ColorTheme;
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ theme, onBack }) => {
    const styles = getLegalStyles(theme);

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <button
                        style={styles.backButton}
                        onClick={onBack}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                        }}
                    >
                        ← Back to Cook AI
                    </button>
                    <h1 style={styles.title}>
                        <span style={styles.gradientText}>Privacy Policy</span>
                    </h1>
                    <p style={styles.lastUpdated}>Last Updated: January 2025</p>
                </div>

                <div style={styles.section}>
                    <p style={styles.paragraph}>
                        At <span style={styles.highlight}>Cook AI</span>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our AI-powered recipe generation application.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
                    <p style={styles.paragraph}>
                        When you use Cook AI, we may collect the following types of information:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Ingredient Data:</strong> Information about ingredients you input to generate recipes
                        </li>
                        <li style={styles.listItem}>
                            <strong>Recipe Preferences:</strong> Your dietary preferences, cuisine types, and cooking methods
                        </li>
                        <li style={styles.listItem}>
                            <strong>Usage Data:</strong> How you interact with our app, including features used and time spent
                        </li>
                        <li style={styles.listItem}>
                            <strong>Device Information:</strong> Browser type, device type, and operating system for app optimization
                        </li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
                    <p style={styles.paragraph}>
                        We use the information we collect to:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Generate personalized recipe recommendations based on your ingredients</li>
                        <li style={styles.listItem}>Improve our AI algorithms and recipe generation quality</li>
                        <li style={styles.listItem}>Enhance user experience and app functionality</li>
                        <li style={styles.listItem}>Analyze usage patterns to develop new features</li>
                        <li style={styles.listItem}>Ensure the security and proper functioning of our service</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. Data Storage and Security</h2>
                    <p style={styles.paragraph}>
                        Your data is stored securely and we implement industry-standard security measures to protect it. We do not sell, trade, or rent your personal information to third parties. Your ingredient lists and generated recipes are stored temporarily to provide you with the best experience.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>4. AI and Third-Party Services</h2>
                    <p style={styles.paragraph}>
                        Cook AI uses artificial intelligence technology to generate recipes. The ingredient data you provide may be processed by our AI service providers to create recipe suggestions. These providers are contractually obligated to protect your data and use it only for recipe generation purposes.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. Cookies and Local Storage</h2>
                    <p style={styles.paragraph}>
                        We use browser storage technologies to save your preferences and improve your experience. This includes remembering your theme preference, recent ingredients, and favorite recipes. You can clear this data at any time through your browser settings.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>6. Your Rights</h2>
                    <p style={styles.paragraph}>
                        You have the right to:
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Access the personal data we hold about you</li>
                        <li style={styles.listItem}>Request correction of inaccurate data</li>
                        <li style={styles.listItem}>Request deletion of your data</li>
                        <li style={styles.listItem}>Opt-out of data collection (though this may limit app functionality)</li>
                        <li style={styles.listItem}>Export your data in a portable format</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>7. Children's Privacy</h2>
                    <p style={styles.paragraph}>
                        Cook AI is designed for general audiences. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>8. Changes to This Policy</h2>
                    <p style={styles.paragraph}>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                </div>

                <div style={styles.contactBox}>
                    <h2 style={styles.contactTitle}>Contact Us</h2>
                    <p style={styles.contactText}>
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;