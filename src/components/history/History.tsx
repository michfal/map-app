import { useContext } from 'react';
import { MapContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { Header } from '../header/header.style';
import { HistoryItem } from './history.style';

export const History = () => {
  const { searchHistory, setCurrentAdresses } = useContext(MapContext);

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>, key: number) => {
    // console.log(event.target);
    // console.log('key index: ', key);
    setCurrentAdresses(searchHistory[key]);
    navigate('/map');
  };

  return (
    <div>
      <Header>Wcześniej wyszukiwane</Header>
      {searchHistory.map((element: IAdressFormat, key: number) => (
        <HistoryItem onClick={(event) => handleClick(event, key)} key={key}>
          {element.adress1} - {element.adress2}
        </HistoryItem>
      ))}
    </div>
  );
};
