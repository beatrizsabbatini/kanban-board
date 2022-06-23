import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import getCategoryBackgroundColor from '../../helpers/getCategoryBackgroundColor';

import ICategory from '../../interfaces/ICategory';
import { BadgeContainer } from './styles';

interface BadgeProps {
  category: ICategory
}

const Badge: React.FC<BadgeProps> = ({ category }) => {
  const theme = useContext(ThemeContext); 

  const [color, setColor] = useState<string>(theme.colors.primary);

  useEffect(() => {
    if (category) {
      const categoryColor = getCategoryBackgroundColor(theme, category);
      setColor(categoryColor);
    }
  }, [category])

  return ( 
    <BadgeContainer color={color}>
      <p>{category}</p>
    </BadgeContainer>
  )
}

export default Badge;