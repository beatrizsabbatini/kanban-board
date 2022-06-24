import styled from 'styled-components';
import { SCREEN_BREAKPOINTS } from '../../constants/breakpoints';

export const Container = styled.div`
  width: 40vw;
  background-color: ${({theme}) => theme.colors.components_background};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  -webkit-box-shadow: 2px 5px 10px 2px rgba(0,0,0,0.11); 
  box-shadow: 2px 5px 10px 2px rgba(0,0,0,0.11);
  border: 1px solid ${({theme}) => theme.colors.border};

  @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    margin-top: 2rem;
    width: 100%;
  }

  input{
    width: calc(100% - 1rem - 20px);
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 1rem;
  }

  input[type = 'search']::-webkit-search-cancel-button{
    cursor: pointer;
  }

  img{
    width: 20px;
    height: 20px;
  }
`;
