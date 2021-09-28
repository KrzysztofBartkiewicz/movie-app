import { createContext } from 'react';
import { MovieData } from '../interfaces';

interface RooContextData {
  popularMovies: MovieData[];
  topRatedMovies: MovieData[];
  favMovies: MovieData[];
  searchedMovies: MovieData[];
  topRatedMoviesPageNumber: number;
  popularMoviesPageNumber: number;
  searchedMoviesPageNumber: number;
  popularTotalPages: number;
  topRatedTotalPages: number;
  searchedTotalPages: number;
  isMenuVisible: boolean;
  toggleMenuVisibility: (arg: boolean) => void;
  handleSetQuery: (arg: string) => void;
  goToPage: (arg1: string, arg2: number) => void;
  handleAddToFav: (arg: MovieData) => void;
  handleRemoveFromFav: (arg: MovieData) => void;
  goToNextPage: (arg: string) => void;
  goToPrevPage: (arg: string) => void;
}

const RootContext = createContext<RooContextData>({} as RooContextData);

export default RootContext;
