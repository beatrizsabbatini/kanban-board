import { createGlobalStyle } from 'styled-components'
import { SCREEN_BREAKPOINTS } from '../constants/breakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 14px;
    overflow-y: auto;
  }

  h1 {
    font-size: 3rem;
    line-height: 3rem;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text_secondary};

    span{
      color: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: ${SCREEN_BREAKPOINTS.MEDIUM}px) {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text_tertiary};
  }

    /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbar_background};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar_thumb};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.scrollbar_thumb_hover};
  }

`