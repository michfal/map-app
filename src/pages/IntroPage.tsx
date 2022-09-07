import { Header } from '../components/header/header.style';
import { SearchForm } from '../components/searchForm/SearchForm';
import { History } from '../components/history/History';
import { Navbar } from '../components/navbar/Navbar';

export const IntroPage = () => {
  return (
    <>
      <Navbar>
        <Header primary>Oblicz Koszt Podróży</Header>
      </Navbar>

      <SearchForm intro={'intro'} />
      <History />
    </>
  );
};
