
import imgA from '@/assets/images/img3.png';
import imgB from '@/assets/images/img4.png';
import imgC from '@/assets/images/img5.png';
import { BlogPost } from "@/types/blog";

export const blogMock: BlogPost[] = [
    {
        id: 1,
        title: 'Primer Post',
        description: 'Trump Is sentenced in N.Y. Hush-Money Case and Will Avoid Jail: Live Updates',
        image: [imgA],
        date: 'January 23, 2025',
    },
    {
        id: 2,
        title: 'Segundo Post',
        description: 'Battle against Los Angeles Fires gains ground as intense winds ease',
        image: [imgB],
        date: 'January 23, 2025',
    },
    {
        id: 3,
        title: 'Tercer Post',
        description: 'Live updates: Suprem Court appears likely to uphold TikTok ban-or-sale law',
        image: [imgC],
        date: 'January 23, 2025',
    },
];


