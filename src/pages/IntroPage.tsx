import { Header } from '../components/header/Header';
import { SearchForm } from '../components/searchForm/SearchForm';
import { History } from '../components/history/History';

export const IntroPage = () => {
  return (
    <>
      <Header />
      <SearchForm intro={'intro'} />
      <History />
    </>
  );
};
