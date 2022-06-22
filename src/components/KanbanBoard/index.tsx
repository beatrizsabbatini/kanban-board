import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, StatusesColumnsContainer, SwitchIcon } from './styles';
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';

interface KanbanBoardProps {
  toggleTheme: () => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext); 
  
  return (
    <Container>
      <h1>Kanban <span>Board</span></h1>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={<SwitchIcon src={SunIcon} alt="Sun"/>} 
        uncheckedIcon={<SwitchIcon src={MoonIcon} alt="Moon"/>} 
        onColor={colors.primary}
        offColor={colors.switch}
      />
      <StatusesColumnsContainer>
        
      </StatusesColumnsContainer>

    </Container>
  )
}

export default KanbanBoard;