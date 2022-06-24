import styled from "styled-components";
import { SCREEN_BREAKPOINTS } from "../../constants/breakpoints";

interface LabelContainerProps {
  color: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 5rem 0 5rem 0;

  @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    padding: 2rem 0 2rem 0;
  }
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
  gap: 1.5rem;
  overflow: auto;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10rem;

  @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const SearchAndFilters = styled.div`
  width: auto;

  @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    width: 100%;
  }
`

export const TitleAndSwitch = styled.div`
  @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`