// src/components/CookAI/Modals/NotifyMeModal.tsx
import React, {useState} from "react";
import {X, Bell} from "lucide-react";
import {ColorTheme} from "../../../themes/colors";

interface NotifyMeModalProps {
    theme: ColorTheme;
    isOpen: boolean;
    onClose: () => void;
}

const NotifyMeModal: React.FC<NotifyMeModalProps> = ({theme, isOpen, onClose}) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            // Send email to your Gmail using a form service
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

    const styles = {
        overlay: {
            position: "fixed" as const,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backdropFilter: "blur(4px)",
        },
        modal: {
            background: theme.cardBackground,
            borderRadius: "24px",
            padding: "40px",
            maxWidth: "500px",
            width: "90%",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            position: "relative" as const,
            border: `1px solid ${theme.cardBorder}`,
        },
        closeButton: {
            position: "absolute" as const,
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: theme.textSecondary,
            padding: "8px",
            borderRadius: "8px",
            transition: "all 0.2s ease",
        },
        iconContainer: {
            width: "64px",
            height: "64px",
            background: theme.primaryGradient,
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px auto",
        },
        title: {
            fontSize: "28px",
            fontWeight: "700",
            color: theme.textPrimary,
            marginBottom: "12px",
            textAlign: "center" as const,
        },
        subtitle: {
            fontSize: "16px",
            color: theme.textSecondary,
            marginBottom: "32px",
            textAlign: "center" as const,
            lineHeight: 1.6,
        },
        form: {
            display: "flex",
            flexDirection: "column" as const,
            gap: "16px",
        },
        input: {
            padding: "16px 20px",
            fontSize: "16px",
            border: `2px solid ${theme.cardBorder}`,
            borderRadius: "12px",
            outline: "none",
            transition: "all 0.3s ease",
            fontFamily: "inherit",
            color: theme.textPrimary,
        },
        button: {
            padding: "16px 32px",
            background: theme.primaryGradient,
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        successMessage: {
            background: "#10b981",
            color: "white",
            padding: "16px",
            borderRadius: "12px",
            textAlign: "center" as const,
            fontWeight: "600",
        },
        errorMessage: {
            background: "#ef4444",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            textAlign: "center" as const,
            fontSize: "14px",
        },
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
                    <X size={24}/>
                </button>

                {!isSuccess ? (
                    <>
                        <div style={styles.iconContainer}>
                            <Bell size={32} color="white"/>
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