import { Header } from '../components/header/Header';
import { SearchForm } from '../components/searchForm/SearchForm';

export const IntroPage = () => {
  return (
    <>
      <Header />
      <SearchForm intro={'intro'} />
    </>
  );
};
