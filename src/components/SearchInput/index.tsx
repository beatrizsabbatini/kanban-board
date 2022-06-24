import React from 'react';

import SearchIcon from '../../assets/search.png'
import { Container } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <input type='search' placeholder='Search for cards titles...'/>
      <img src={SearchIcon} alt="Search icon"/>
    </Container>
  )
}

export default SearchInput;