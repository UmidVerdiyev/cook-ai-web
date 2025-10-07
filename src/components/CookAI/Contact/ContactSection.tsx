import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getContactStyles } from "../../../themes/styles/contact";
import ContactForm from "./ContactForm";

// FIXED: Single interface declaration with isMobile prop
interface ContactSectionProps {
    theme: ColorTheme;
    isMobile?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ theme, isMobile = false }) => {
    const styles = getContactStyles(theme);

    return (
        <section id="contact" style={{
            ...styles.contact,
            ...(isMobile ? styles.mobileContact : {}),
        }}>
            <div style={styles.contactContainer}>
                <h2 style={{
                    ...styles.contactTitle,
                    ...(isMobile ? styles.mobileContactTitle : {}),
                }}>Get in Touch</h2>
                <p style={{
                    ...styles.contactSubtitle,
                    ...(isMobile ? styles.mobileContactSubtitle : {}),
                }}>
                    Have questions, suggestions, or need support? We'd love to hear from
                    you and help make your cooking journey even better.
                </p>

                <div style={{
                    ...styles.contactGrid,
                    ...(isMobile ? styles.mobileContactGrid : {}),
                }}>
                    <div style={{
                        ...styles.contactCard,
                        ...(isMobile ? styles.mobileContactCard : {}),
                    }}>
                        <h3 style={styles.contactCardTitle}>Email Us</h3>
                        <p style={styles.contactCardText}>support@cookai.com</p>
                    </div>
                    <div style={{
                        ...styles.contactCard,
                        ...(isMobile ? styles.mobileContactCard : {}),
                    }}>
                        <h3 style={styles.contactCardTitle}>Follow Us</h3>
                        <p style={styles.contactCardText}>@CookAIApp</p>
                    </div>
                    <div style={{
                        ...styles.contactCard,
                        ...(isMobile ? styles.mobileContactCard : {}),
                    }}>
                        <h3 style={styles.contactCardTitle}>Support</h3>
                        <p style={styles.contactCardText}>24/7 Chat Support</p>
                    </div>
                </div>

                <ContactForm theme={theme} isMobile={isMobile} />
            </div>
        </section>
    );
};

export default ContactSection;