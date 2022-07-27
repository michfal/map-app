import { useContext, useState, useEffect } from 'react';
import { MapContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../logic/capitalize';

export const SearchForm: React.FC<IProps> = ({ intro }) => {
  const { handleLocationSearch, currentAdresses, setCurrentAdresses } =
    useContext(MapContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(typeof intro);
    handleLocationSearch();
    intro && navigate('/map');
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | string>) => {
    const target = capitalize((e.target as HTMLInputElement).value);

    setCurrentAdresses({
      ...currentAdresses,
      [(e.target as HTMLInputElement).name]: target,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
