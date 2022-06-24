import { createGlobalStyle } from 'styled-components'

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
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text_secondary};

    span{
      color: ${({ theme }) => theme.colors.primary};
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
 
`