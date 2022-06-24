import React from 'react';
import { useModal } from '../../hooks/useModal';

import { Container } from './styles';

export const ButtonAddCard: React.FC = () => {
    const { toggleVisibility } = useModal();

    const handleOpenModal = () => {
        toggleVisibility(undefined)
    }

  return (
    <Container onClick={handleOpenModal}>
        <strong>+ Add Card</strong>
    </Container>
  );
}