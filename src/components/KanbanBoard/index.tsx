import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Column, Container, StatusesColumnsContainer, SwitchIcon } from './styles';
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import statuses from '../../data/statuses';
import mockCards from '../../data/cards';
import Card from '../Card';

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
        {statuses.map(status => (
          <Column>
            <h2>{status}</h2>
            {mockCards
              .filter(card => card.status === status)
              .map(card => <Card card={card}/>)}
          </Column>
        ))}
      </StatusesColumnsContainer>
    </Container>
  )
}

export default KanbanBoard;