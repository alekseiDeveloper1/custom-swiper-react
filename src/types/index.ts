
export interface SlideData {
  id: string;
  title: string;
  description: string;
  color: string;
  image?: string;
}

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
