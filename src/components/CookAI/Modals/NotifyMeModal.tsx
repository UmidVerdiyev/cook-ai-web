// src/components/CookAI/Modals/NotifyMeModal.tsx
import React, { useState } from "react";
import { X, Bell } from "lucide-react";
import { ColorTheme } from "../../../themes/colors";
import { getNotifyModalStyles } from "../../../themes/styles/notify";

interface NotifyMeModalProps {
    theme: ColorTheme;
    isOpen: boolean;
    onClose: () => void;
}

const NotifyMeModal: React.FC<NotifyMeModalProps> = ({ theme, isOpen, onClose }) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const styles = getNotifyModalStyles(theme);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mnnggwby", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    type: "waitlist",
                    timestamp: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setEmail("");
                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                }, 2000);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button
                    style={styles.closeButton}
                    onClick={onClose}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = theme.navLinkHover;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                    }}
                >
                    <X size={24} />
                </button>

                {!isSuccess ? (
                    <>
                        <div style={styles.iconContainer}>
                            <Bell size={32} color="white" />
                        </div>

                        <h2 style={styles.title}>Get Notified at Launch! 🚀</h2>
                        <p style={styles.subtitle}>
                            Be the first to know when Cook AI launches. We'll send you an exclusive
                            early access invite!
                        </p>

                        <form style={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={styles.input}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = theme.primary;
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = theme.cardBorder;
                                }}
                            />

                            {error && <div style={styles.errorMessage}>{error}</div>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    ...styles.button,
                                    opacity: isSubmitting ? 0.7 : 1,
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                                }}
                            >
                                {isSubmitting ? "Submitting..." : "Notify Me"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div style={styles.successMessage}>
                        ✓ Success! We'll notify you at launch!
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotifyMeModal;