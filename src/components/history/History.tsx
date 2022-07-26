import { useContext } from 'react';
import { MapContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

export const History = () => {
  const { searchHistory, setCurrentAdresses } = useContext(MapContext);

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>, key: number) => {
    console.log(event.target);
    console.log('key index: ', key);
    setCurrentAdresses(searchHistory[key]);
    navigate('/map');
  };

  // console.log(searchHistory);
  return (
    <div>
      <h2>Wcześniej wyszukiwane</h2>
      {searchHistory.map((element: IAdressFormat, key: number) => (
        <h4 onClick={(event) => handleClick(event, key)} key={key}>
          {element.adress1} - {element.adress2}
        </h4>
      ))}
    </div>
  );
};
