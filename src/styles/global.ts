import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text_primary};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text_secondary};

    span{
      color: ${({ theme }) => theme.colors.primary};
    }
  }
 
`