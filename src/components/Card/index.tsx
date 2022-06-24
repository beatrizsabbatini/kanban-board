import React, { useContext, useEffect, useState } from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';

import getCategoryBackgroundColor from '../../helpers/getCategoryBackgroundColor';
import { useModal } from '../../hooks/useModal';
import { useAppSelector } from '../../hooks/useRedux';
import ICard from '../../interfaces/ICard';
import Badge from '../Badge';

import { CardBorder, CardBottom, CardContainer } from './styles';

interface CardProps {
  card: ICard;
  index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
  const theme = useContext(ThemeContext); 

  const [backgroundColor, setBackgroundColor] = useState<string>(theme.colors.primary);

  const { toggleVisibility } = useModal();

  useEffect(() => {
    if (card) {
      const categoryColor = getCategoryBackgroundColor(theme, card.category);
      setBackgroundColor(categoryColor);
    }
  }, [card])

  return (
    <Draggable draggableId={card.id} index={index}>
      {provided => (
        <CardContainer 
          onClick={() => toggleVisibility(card)} 
          hideCard={card.hidden}
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
        >
          <CardBorder color={backgroundColor}/> 
          <h3>{card.title}</h3>
          <CardBottom>
            <Badge category={card.category}/>
            <p>+ View More</p>
          </CardBottom>
        </CardContainer>
      )}
    </Draggable>
  )
}

export default Card;