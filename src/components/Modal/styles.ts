import styled from "styled-components";
import { SCREEN_BREAKPOINTS } from "../../constants/breakpoints";

interface LabelContainerProps {
  color: any;
}

interface ErrorProps {
  containsError?: boolean
}

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
  min-height: 400px;
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

  @media(max-width: ${SCREEN_BREAKPOINTS.SMALL}px) {
    padding: 2rem;
    width: 80VW;

    img{
      right: 1rem;
      top: 1rem;
    }
  }
`

export const Input = styled.input<ErrorProps>`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0 ${({ containsError }) => containsError ? 0 : '2rem'} 0;
  border-radius: 5px;
  padding: 0.3rem;
`

export const MultilineInput = styled.textarea<ErrorProps>`
  width: 100%;
  height: 4rem;
  margin: 0.5rem 0 ${({ containsError }) => containsError ? 0 : '2rem'} 0;
  padding: 0.3rem;
  border-radius: 5px;
`

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  @media(max-width: ${SCREEN_BREAKPOINTS.SMALL}px) {
    gap: 10px;
  }
`

export const Button = styled.button`
  margin-top: 2rem;
  background-color: ${({theme}) => theme.colors.primary};
  color: #fff;
  font-weight: bold;
  padding: 8px 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
`

export const LabelContainer = styled.div<LabelContainerProps>`
  padding: 5px;
  background-color: ${({color}) => color};
  border-radius: 5px;

  label{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between ;
  }

  i{
    font-style: normal;
    font-weight: bold;
    color: #fff;
    padding-left: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  color: ${({theme}) => theme.colors.bug};
  padding: 0.5rem 0 1.5rem 0;
`