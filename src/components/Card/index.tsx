import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import getCategoryBackgroundColor from '../../helpers/getCategoryBackgroundColor';
import ICard from '../../interfaces/ICard';
import Badge from '../Badge';

import { CardBorder, CardBottom, CardContainer } from './styles';

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const theme = useContext(ThemeContext); 

  const [backgroundColor, setBackgroundColor] = useState<string>(theme.colors.primary);

  useEffect(() => {
    if (card) {
      const categoryColor = getCategoryBackgroundColor(theme, card.category);
      setBackgroundColor(categoryColor);
    }
  }, [card])

  return (
  <CardContainer>
    <CardBorder color={backgroundColor}/>
    <h3>{card.title}</h3>
    <CardBottom>
      <Badge category={card.category}/>
      <p>+ View More</p>
    </CardBottom>

  </CardContainer>
  )
}

export default Card;