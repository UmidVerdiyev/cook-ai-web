// src/components/CookAI/Navigation/NavLink.tsx
import React from "react";
import { ColorTheme } from "../../../themes/colors";
import { getNavigationStyles } from "../../../themes/styles/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
    theme: ColorTheme;
}

const NavLink: React.FC<NavLinkProps> = ({
                                             href,
                                             children,
                                             isActive,
                                             onClick,
                                             theme,
                                         }) => {
    const styles = getNavigationStyles(theme);

    return (
        <button
            onClick={onClick}
            style={{
                ...styles.navLink,
                ...(isActive ? styles.navLinkActive : {}),
            }}
            onMouseEnter={(e) => {
                if (!isActive) {
                    e.currentTarget.style.color = theme.primary;
                    e.currentTarget.style.background = theme.navLinkHover;
                }
            }}
            onMouseLeave={(e) => {
                if (!isActive) {
                    e.currentTarget.style.color = theme.textSecondary;
                    e.currentTarget.style.background = "transparent";
                }
            }}
        >
            {children}
        </button>
    );
};

export default NavLink;