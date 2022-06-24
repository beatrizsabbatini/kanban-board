import styled from "styled-components";

interface LabelContainerProps {
  color: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 5rem 10rem;
`

export const SwitchIcon = styled.img`
  margin: 4px;
  height: 70%;
  width: 70%;
`

export const StatusesColumnsContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 1.5rem;
`

export const LabelContainer = styled.div<LabelContainerProps>`
  padding: 5px;
  background-color: ${({color}) => color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between ;
  border-radius: 5px;

  label{
    font-weight: bold;
    color: #fff;
    padding-left: 5px;
    text-transform: uppercase;
  }
`