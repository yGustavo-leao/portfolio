import { createGlobalStyle, keyframes } from "styled-components";
import { Roboto_Slab } from 'next/font/google'

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['400', '700']
})

const backgroundAnimation = keyframes`
    0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
`

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${robotoSlab.style.fontFamily};
    }

    body {
        background-color: #111;
        padding: 1rem;
        background-image: linear-gradient(145deg,
            #012326,
            #024959,
            #8C034E
            );
        background-size: 200% 200%;
        animation: ${backgroundAnimation} 10s ease infinite alternate-reverse;
    }
`