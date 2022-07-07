import { useState, useContext } from 'react';
import { MapContext } from '../../context/context';

export function SearchForm() {
  const { handleSubmit, currentAdresses, setCurrentAdresses } =
    useContext(MapContext);

  function handleInput(e) {
    setCurrentAdresses({
      ...currentAdresses,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adress1:
        <input
          type='text'
          name='adress1'
          onChange={handleInput}
          // value={currentAdresses[0].adress}
        />
      </label>

      <label>
        <label>
          Adress2:
          <input
            type='text'
            name='adress2'
            onChange={handleInput}
            // value={currentAdress[1].adress}
          />
        </label>
      </label>
      <input type='submit' value='Znajdź' />
    </form>
  );
}
