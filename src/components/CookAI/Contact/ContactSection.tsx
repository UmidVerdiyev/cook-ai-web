// src/components/CookAI/Contact/ContactSection.tsx
import React from "react";
import { MessageSquare, Mail } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getContactStyles } from "../../../themes/styles/contact";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
    theme: ColorTheme;
    isMobile?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ theme, isMobile = false }) => {
    const styles = getContactStyles(theme);

    return (
        <section
            id="contact"
            style={{
                ...styles.contact,
                ...(isMobile ? styles.mobileContact : {}),
            }}
        >
            <div style={styles.contactContainer}>
                <h2
                    style={{
                        ...styles.contactTitle,
                        ...(isMobile ? styles.mobileContactTitle : {}),
                    }}
                >
                    Share Your Feedback
                </h2>
                <p
                    style={{
                        ...styles.contactSubtitle,
                        ...(isMobile ? styles.mobileContactSubtitle : {}),
                    }}
                >
                    Help us build the perfect cooking app! Tell us what features you'd love
                    to see and what cooking challenges you face.
                </p>

                <div
                    style={{
                        ...styles.contactGrid,
                        ...(isMobile ? styles.mobileContactGrid : {}),
                    }}
                >
                    <div
                        style={{
                            ...styles.contactCard,
                            ...(isMobile ? styles.mobileContactCard : {}),
                        }}
                    >
                        <MessageSquare size={32} color={theme.primary} style={{ margin: "0 auto 1rem auto" }} />
                        <h3 style={styles.contactCardTitle}>Send Feedback</h3>
                        <p style={styles.contactCardText}>
                            Share your cooking challenges and feature requests
                        </p>
                    </div>
                    <div
                        style={{
                            ...styles.contactCard,
                            ...(isMobile ? styles.mobileContactCard : {}),
                        }}
                    >
                        <Mail size={32} color={theme.primary} style={{ margin: "0 auto 1rem auto" }} />
                        <h3 style={styles.contactCardTitle}>Get Updates</h3>
                        <p style={styles.contactCardText}>
                            We'll keep you posted on our launch and new features
                        </p>
                    </div>
                </div>

                <ContactForm theme={theme} isMobile={isMobile} />
            </div>
        </section>
    );
};

export default ContactSection;