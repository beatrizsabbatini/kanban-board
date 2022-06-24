import React, { useEffect, useState } from 'react';

import SearchIcon from '../../assets/search.png'
import { useAppDispatch } from '../../hooks/useRedux';
import { filterCards } from '../../store/slices/cards.slice';
import { Container } from './styles';

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterCards(searchText))
  }, [searchText])
  
  return (
    <Container>
      <input 
        type='search' 
        placeholder='Search for cards titles...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img src={SearchIcon} alt="Search icon"/>
    </Container>
  )
}

export default SearchInput;