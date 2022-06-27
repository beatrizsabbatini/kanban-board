import React, { useContext, useEffect, useState } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import ICard from '../../interfaces/ICard';
import IStatus from '../../interfaces/IStatus';
import IColumn from '../../interfaces/IColumn';
import ICategory from '../../interfaces/ICategory';
import Column from '../Column';
import Modal from '../Modal';
import SearchInput from '../SearchInput';
import getCategoryBackgroundColor from '../../helpers/getCategoryBackgroundColor';
import { useModal } from '../../hooks/useModal';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { Container, FiltersContainer, Header, LabelContainer, SearchAndFilters, StatusesColumnsContainer, SwitchIcon, TitleAndSwitch } from './styles';
import { setColumns } from '../../store/slices/columns.slice';
import { filterCards, setCards } from '../../store/slices/cards.slice';
import { ButtonAddCard } from '../ButtonAddCard';

interface KanbanBoardProps {
  toggleTheme: () => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const theme = useContext(ThemeContext); 

  const { cards } = useAppSelector((state => state.cards));
  const { columns } = useAppSelector((state => state.columns));
  const { visible } = useModal();

  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>(Object.values(ICategory));

  const dispatch = useAppDispatch();
  
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
        destination.droppableId === source.droppableId && 
        destination.index === source.index
      ) return;

    const updatedCards: ICard[] = cards.map(card => {
      if (card.id === draggableId) {

        const status: IStatus = destination.droppableId as IStatus;

        return {
          ...card,
          status
        }
      } else return card;
    })

    const sourceColumn: IColumn = columns.find(column => column.id === source.droppableId) as IColumn;
    const destinationColumn: IColumn = columns.find(column => column.id === destination.droppableId) as IColumn;

    //Moving cards in the same column
    if (sourceColumn === destinationColumn) {

      const newColumnCardsIds = [...destinationColumn.cardsIds];

      newColumnCardsIds.splice(source.index, 1);
      newColumnCardsIds.splice(destination.index, 0, draggableId);
  
      const newDestinationColumn: IColumn = {
        ...destinationColumn,
        cardsIds: newColumnCardsIds
      }
  
      const updatedColumns: IColumn[] = columns.map(column => {
        if (column.id === newDestinationColumn.id) return newDestinationColumn;
        else return column;
      }) ;
  
      dispatch(setColumns(updatedColumns))
      dispatch(setCards(updatedCards))

      return
    }

    //Moving cards from one column to another
    const sourceCardsIds = [...sourceColumn.cardsIds];
    sourceCardsIds.splice(source.index, 1);

    const newSourceColumn: IColumn = {
      ...sourceColumn,
      cardsIds: sourceCardsIds
    }

    const destinationCardsIds = [...destinationColumn.cardsIds];
    destinationCardsIds.splice(destination.index, 0, draggableId);

    const newDestinationColumn: IColumn = {
      ...destinationColumn,
      cardsIds: destinationCardsIds
    }

    const updatedColumns: IColumn[] = columns.map(column => {
      if (column.id === newDestinationColumn.id) return newDestinationColumn;
      if (column.id === newSourceColumn.id) return newSourceColumn;
      else return column;
    }) ;

    dispatch(setColumns(updatedColumns))
    dispatch(setCards(updatedCards))

  }

  const handleChangeCheckbox = (category: ICategory) => {
    const foundCategory = selectedCategories.find(item => item === category);

    if (foundCategory){
      const categoriesWithItemRemoved = selectedCategories.filter(item => item !== category);
      setSelectedCategories(categoriesWithItemRemoved);
      return
    }

    setSelectedCategories([...selectedCategories, category])
  }

  useEffect(() => {
    dispatch(filterCards({categories: selectedCategories}))
  }, [selectedCategories])
  
  
  return (
    <>
      <Container>
        <Header>
          <TitleAndSwitch>
            <h1>Kanban <span>Board</span></h1>
            <Switch
              onChange={toggleTheme}
              checked={title === 'light'}
              checkedIcon={<SwitchIcon src={SunIcon} alt="Sun"/>} 
              uncheckedIcon={<SwitchIcon src={MoonIcon} alt="Moon"/>} 
              onColor={colors.primary}
              offColor={colors.switch}
            />
          </TitleAndSwitch>
          <SearchAndFilters>
            <SearchInput/>
            <FiltersContainer>
              {Object.values(ICategory).map(category => (
                <LabelContainer 
                  key={category}
                  color={() => getCategoryBackgroundColor(theme, category)}
                  onClick={() => handleChangeCheckbox(category)}
                >
                  <input 
                    type='checkbox' 
                    name={category} 
                    value={category}
                    checked={selectedCategories.includes(category)} 
                    onChange={() => handleChangeCheckbox(category)}
                  />
                  <label>{category}</label>
                </LabelContainer>
              ))}
          </FiltersContainer>
          </SearchAndFilters>
          
        </Header>
        
        <StatusesColumnsContainer>
          <DragDropContext onDragEnd={onDragEnd}>
            {columns.map((column, index) => {

              const cardsArray: ICard[] = [];

              column.cardsIds.forEach(cardId => {
                const foundedCard = cards.find(card => card.id === cardId);
                if (foundedCard) cardsArray.push(foundedCard);
              })
            
              return (
                <Column 
                  key={column.id} 
                  index={index}
                  status={column.id} 
                  cards={cardsArray}
                />
            )})}
          </DragDropContext>
        </StatusesColumnsContainer>
        <ButtonAddCard/>
      </Container>
      <Modal visible={visible}/>
    </>
  )
}

export default KanbanBoard;