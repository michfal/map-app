import { useContext, useState, useEffect } from 'react';
import { MapContext } from '../../context/context';
import { NavLink, useNavigate } from 'react-router-dom';

export const SearchForm: React.FC<any> = (props) => {
  const { handleLocationSearch, currentAdresses, setCurrentAdresses } =
    useContext(MapContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(props.intro);
    handleLocationSearch();
    props.intro && navigate('/map');
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentAdresses({
      ...currentAdresses,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
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
