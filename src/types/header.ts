export interface HeaderProps {
  navItems: NavItem[];
}

export interface NavItem {
    label: string;
    href: string;
}

export interface HeaderPages {
    pages: string[];
    logoSrc: string;
    handleLogoClick: () => void;
}

