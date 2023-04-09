import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Header from './components/Header'
import BooksPage from './components/Books/BooksPage'
import Auth from "./components/Auth"
import Book from './components/Books/Book';
import Movie from './components/Movies/Movie';
import MoviesPage from './components/Movies/MoviePage';
import CharactersPage from './components/Characters/CharactersPage';
import Profile from './components/Profile';



const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/books/:bookId" element={<Book  />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
