import { StaticImageData } from 'next/image'; 

export interface BlogPost {
  id: number ;
  title: string;
  description: string;
  image: StaticImageData[];
  date: string;
}