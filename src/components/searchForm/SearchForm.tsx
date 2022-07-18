import { useContext, useState, useEffect } from 'react';
import { MapContext } from '../../context/context';

export const SearchForm: React.FC = () => {
  const { handleLocationSearch, currentAdresses, setCurrentAdresses } =
    useContext(MapContext);

  const [inputAdress, setInputAdress] = useState({
    adress1: '15 Podborska Warszawa',

    adress2: '11 Lipińskiego Sanok',
  });

  // useEffect(() => {
  //   console.log(inputAdress);
  // }, [inputAdress]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentAdresses({
      ...currentAdresses,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentAdresses({
      ...currentAdresses,
      adress1: inputAdress.adress1,
      adress2: inputAdress.adress2,
    });
    // await handleLocationSearch();
  };

  return (
    <form onSubmit={handleLocationSearch}>
      <label>
        Adress1:
        <input type='text' name='adress1' onChange={handleInput} />
      </label>

      <label>
        <label>
          Adress2:
          <input type='text' name='adress2' onChange={handleInput} />
        </label>
      </label>
      <input type='submit' value='Znajdź' />
    </form>
  );
};
