import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getContactStyles } from "../../../themes/styles/contact";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
    theme: ColorTheme;
}

const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
    const styles = getContactStyles(theme);

    return (
        <section id="contact" style={styles.contact}>
            <div style={styles.contactContainer}>
                <h2 style={styles.contactTitle}>Get in Touch</h2>
                <p style={styles.contactSubtitle}>
                    Have questions, suggestions, or need support? We'd love to hear from
                    you and help make your cooking journey even better.
                </p>

                <div style={styles.contactGrid}>
                    <div style={styles.contactCard}>
                        <h3 style={styles.contactCardTitle}>Email Us</h3>
                        <p style={styles.contactCardText}>support@cookai.com</p>
                    </div>
                    <div style={styles.contactCard}>
                        <h3 style={styles.contactCardTitle}>Follow Us</h3>
                        <p style={styles.contactCardText}>@CookAIApp</p>
                    </div>
                    <div style={styles.contactCard}>
                        <h3 style={styles.contactCardTitle}>Support</h3>
                        <p style={styles.contactCardText}>24/7 Chat Support</p>
                    </div>
                </div>

                <ContactForm theme={theme} />
            </div>
        </section>
    );
};

export default ContactSection;