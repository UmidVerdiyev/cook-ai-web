// src/components/CookAI/Contact/ContactForm.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getContactStyles } from "../../../themes/styles/contact";

// FIXED: Added isMobile prop to interface
interface ContactFormProps {
    theme: ColorTheme;
    isMobile?: boolean;
}

// FIXED: Added isMobile to component props
const ContactForm: React.FC<ContactFormProps> = ({ theme, isMobile = false }) => {
    const styles = getContactStyles(theme);

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.outline = `2px solid ${theme.primary}`;
        e.currentTarget.style.borderColor = theme.primary;
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.outline = "none";
        e.currentTarget.style.borderColor = theme.inputBorder;
    };

    return (
        <div style={{
            ...styles.contactForm,
            // FIXED: Apply mobile form styles when on mobile
            ...(isMobile ? styles.mobileContactForm : {}),
        }}>
            <div style={{
                ...styles.formGrid,
                // FIXED: Apply mobile grid styles when on mobile
                ...(isMobile ? styles.mobileFormGrid : {}),
            }}>
                <input
                    type="text"
                    placeholder="Your Name"
                    style={{
                        ...styles.formInput,
                        // FIXED: Apply mobile input styles when on mobile
                        ...(isMobile ? styles.mobileFormInput : {}),
                    }}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    style={{
                        ...styles.formInput,
                        // FIXED: Apply mobile input styles when on mobile
                        ...(isMobile ? styles.mobileFormInput : {}),
                    }}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
            </div>
            <textarea
                placeholder="Your Message"
                rows={6}
                style={{
                    ...styles.formTextarea,
                    // FIXED: Apply mobile textarea styles when on mobile
                    ...(isMobile ? styles.mobileFormTextarea : {}),
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <button
                style={styles.submitBtn}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                Send Message
            </button>
        </div>
    );
};

export default ContactForm;