import React, { useEffect, useState } from 'react';

import CloseIcon from '../../assets/close.png';
import { useModal } from '../../hooks/useModal';
import ICategory from '../../interfaces/ICategory';
import { CategoriesContainer, Container, Input, ModalContent, MultilineInput } from './styles';

interface ModalProps{
  visible: boolean;
}

const Modal: React.FC<ModalProps> = ({visible}) => {
  const { toggleVisibility, selectedCard } = useModal();

  const [title, setTitle] = useState<string | undefined>(selectedCard?.title);
  const [description, setDescription] = useState<string | undefined>(selectedCard?.description);
  const [cardCategory, setCardCategory] = useState<ICategory | undefined>(selectedCard?.category);

  useEffect(() => {
    setTitle(selectedCard?.title);
    setDescription(selectedCard?.description);
    setCardCategory(selectedCard?.category);
  }, [selectedCard])
  

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
            <div>
              <input 
                type='radio' 
                name={category} 
                value={category} 
                checked={cardCategory === category}
                onChange={(e) => setCardCategory(e.currentTarget.value as ICategory)}
              />
              <label>{category}</label>
            </div>
          ))}
        </CategoriesContainer>
      </ModalContent>
    </Container>
  )
}

export default Modal;