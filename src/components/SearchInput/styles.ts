import styled from 'styled-components';

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

  input{
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.text_primary};
    font-size: 1rem;
  }

  img{
    width: 20px;
    height: 20px;
  }
`;
