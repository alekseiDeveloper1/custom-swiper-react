import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f0f0f0;
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: rgb(66, 86, 122);
    }

    .swiper-pagination-bullet {
        background-color: rgba(66, 86, 122, 0.5);
    }

    .swiper-slide {
        background: rgb(240, 240, 240);
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
