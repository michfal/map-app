import { useContext } from 'react';
import { MapContext } from '../../context/context';

export const SearchForm: React.FC = () => {
  const { handleLocationSubmit, currentAdresses, setCurrentAdresses } =
    useContext(MapContext);

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    setCurrentAdresses({
      ...currentAdresses,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  }

  return (
    <form onSubmit={handleLocationSubmit}>
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
