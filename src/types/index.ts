export interface Screenshot {
    title: string;
    subtitle: string;
    image: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
    theme: any;
}