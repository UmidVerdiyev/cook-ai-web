// src/components/CookAI/Contact/ContactForm.tsx
import React, { useState } from "react";
import { Send } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getContactStyles } from "../../../themes/styles/contact";

interface ContactFormProps {
    theme: ColorTheme;
    isMobile?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ theme, isMobile = false }) => {
    const styles = getContactStyles(theme);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Replace YOUR_FORM_ID with your Formspree form ID
            const response = await fetch("https://formspree.io/f/mnnggwby", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    type: "feedback",
                    timestamp: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = theme.primary;
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = theme.inputBorder;
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                ...styles.contactForm,
                ...(isMobile ? styles.mobileContactForm : {}),
            }}
        >
            <div
                style={{
                    ...styles.formGrid,
                    ...(isMobile ? styles.mobileFormGrid : {}),
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                        ...styles.formInput,
                        ...(isMobile ? styles.mobileFormInput : {}),
                    }}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                        ...styles.formInput,
                        ...(isMobile ? styles.mobileFormInput : {}),
                    }}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
            </div>
            <textarea
                name="message"
                placeholder="What features would you love to see? What cooking challenges do you face? Share your thoughts..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                    ...styles.formTextarea,
                    ...(isMobile ? styles.mobileFormTextarea : {}),
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            {submitStatus === "success" && (
                <div
                    style={{
                        background: "#10b981",
                        color: "white",
                        padding: "16px",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "600",
                        marginBottom: "1rem",
                    }}
                >
                    ✓ Thank you! Your feedback helps us build a better app!
                </div>
            )}

            {submitStatus === "error" && (
                <div
                    style={{
                        background: "#ef4444",
                        color: "white",
                        padding: "16px",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "600",
                        marginBottom: "1rem",
                    }}
                >
                    ✗ Something went wrong. Please try again.
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    ...styles.submitBtn,
                    opacity: isSubmitting ? 0.7 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                }}
                onMouseEnter={(e) => {
                    if (!isSubmitting) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                {isSubmitting ? "Sending..." : "Send Feedback"}
                {!isSubmitting && <Send size={20} />}
            </button>
        </form>
    );
};

export default ContactForm;