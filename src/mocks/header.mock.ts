
import { HeaderPages } from "@/types/header";

export const headerMock: HeaderPages = {
    pages: ['Deploys', 'Repositories', 'Design', 'Blog', 'About', 'Resources'],
    logoSrc: '/rocfeler-logo.png',
    handleLogoClick: () => { window.location.href = '/'; },
};

