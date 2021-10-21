import { useState } from 'react';
import CountriesTable from '../components/CountriesTable';
import SearchBar from '../components/SearchBar'

const Homepage = () => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <main>
      <SearchBar handleChange={handleKeywordChange}/>
      <CountriesTable keyword={keyword}/>
    </main>
  );
};

export default Homepage;
