import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  padding: 3rem;
  height: 400px;
  width: 600px;
  background-color: ${({theme}) => theme.colors.components_background};
  border-radius: 5px;
  position: relative;

  img {
    height: 15px;
    width: 15px;
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0 2rem 0;
`

export const MultilineInput = styled.textarea`
  width: 100%;
  height: 4rem;
  margin: 0.5rem 0 2rem 0;
`

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`