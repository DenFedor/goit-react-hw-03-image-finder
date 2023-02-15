import React from 'react';
import { SearchbarHeader,SearchForm,SearchFormBtn,SearchFormInput,SearchBtnSpan } from './Searchbar.styled';
import { SlMagnifier } from "react-icons/sl";
export const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormBtn type="submit">
          <SearchBtnSpan><SlMagnifier/></SearchBtnSpan>
          {/* <SlMagnifier/> */}
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
