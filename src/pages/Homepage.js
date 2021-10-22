import { useState } from 'react';
import CountriesTable from '../components/CountriesTable';
import SearchBar from '../components/SearchBar';
import ToolBar from '../components/ToolBar';

const Homepage = () => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      <header className="bg-pink-odd"><ToolBar /></header>
      <main className="bg-pink-odd">
        <SearchBar handleChange={handleKeywordChange} />
        <CountriesTable keyword={keyword} />
      </main>
    </>
  );
};

export default Homepage;
