import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import mockCards from '../../data/cards';
import IStatus from '../../interfaces/IStatus';
import Card from '../Card';

import { CardsList, Container } from './styles';

interface ColumnProps {
  status: IStatus;
}

const Column: React.FC<ColumnProps> = ({ status }) => {
  return (
    <Container>
      <h2>{status}</h2>
      <Droppable droppableId={status}>
        {(provided) => (
          <CardsList ref={provided.innerRef} {...provided.droppableProps}>
            {mockCards
              .filter(card => card.status === status)
              .map((card, index) => <Card key={card.id} card={card} index={index}/>)
            }
        </CardsList>
        )}
        </Droppable>
    </Container>
  )
}

export default Column;