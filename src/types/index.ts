
export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    surface: string;
    text: string;
    textDim: string;
  };
  transitions: {
    main: string;
  };
}

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
