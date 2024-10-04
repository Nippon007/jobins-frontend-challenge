import React from 'react';
import Input from '../Input';
import { IoMdSearch } from 'react-icons/io';

interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilter = (props: ISearch) => {
  const { search, setSearch } = props;
  return (
    <Input
      placeholder="Search..."
      rightIcon={<IoMdSearch />}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchFilter;
