export interface BonusItem {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  stars: number;
  image?: string;
  contentImage?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SyllabusItem {
  id: number;
  title: string;
}