import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Container, StatusesColumnsContainer, SwitchIcon } from './styles';
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import statuses from '../../data/statuses';
import Column from '../Column';

interface KanbanBoardProps {
  toggleTheme: () => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
  }
  
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
          <DragDropContext onDragEnd={onDragEnd}>
            {statuses.map(status => (
              <Column key={status} status={status}/>
            ))}
          </DragDropContext>
      </StatusesColumnsContainer>
    </Container>
  )
}

export default KanbanBoard;