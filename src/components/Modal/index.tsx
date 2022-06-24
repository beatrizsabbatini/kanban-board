import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import CloseIcon from '../../assets/close.png';
import getCategoryBackgroundColor from '../../helpers/getCategoryBackgroundColor';
import { useModal } from '../../hooks/useModal';
import { useAppDispatch } from '../../hooks/useRedux';
import ICategory from '../../interfaces/ICategory';
import { updateOneCard } from '../../store/slices/cards.slice';
import { 
  Container, 
  Input, 
  Button,
  ModalContent, 
  MultilineInput, 
  CategoriesContainer, 
  LabelContainer
} from './styles';

interface ModalProps{
  visible: boolean;
}

const Modal: React.FC<ModalProps> = ({visible}) => {
  const { toggleVisibility, selectedCard } = useModal();
  const theme = useContext(ThemeContext); 

  const [title, setTitle] = useState<string | undefined>(selectedCard?.title);
  const [description, setDescription] = useState<string | undefined>(selectedCard?.description);
  const [cardCategory, setCardCategory] = useState<ICategory | undefined>(selectedCard?.category);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTitle(selectedCard?.title);
    setDescription(selectedCard?.description);
    setCardCategory(selectedCard?.category);
  }, [selectedCard])

  const handleSave = () => {
    const newCard = {
      ...selectedCard,
      title,
      description,
      category: cardCategory
    }
    dispatch(updateOneCard(newCard))

    toggleVisibility(undefined);
  }
  

  if (!visible) return null;

  return (
    <Container>
      <ModalContent>
        <img src={CloseIcon} alt="Gray X icon" onClick={() => toggleVisibility(undefined)}/>
        <h3>Title</h3>
        <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <h3>Description</h3>
        <MultilineInput aria-multiline value={description} onChange={(e) => setDescription(e.target.value)}/>
        <CategoriesContainer>
          {Object.values(ICategory).map(category => (
            <LabelContainer 
              color={() => getCategoryBackgroundColor(theme, category)}
             
            >
              <label>
                <input 
                  type='radio' 
                  name={category} 
                  value={category} 
                  checked={cardCategory === category}
                  onChange={(e) => setCardCategory(e.currentTarget.value as ICategory)}
                />
                <i>{category}</i>
              </label>
            </LabelContainer>
          ))}
        </CategoriesContainer>
        <Button type='button' onClick={handleSave}>Save Changes</Button>
      </ModalContent>
    </Container>
  )
}

export default Modal;