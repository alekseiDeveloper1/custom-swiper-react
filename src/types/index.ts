export interface SubSlide {
  title: number;
  description: string;
}

export interface Slide {
  id: string;
  title: string;
  stage: string[];
  subSlides: SubSlide[];
}
