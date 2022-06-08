import { useState, useContext } from 'react';
import { MyContext } from '../../context/context';

export function SearchForm() {
  const { adress1, setAdress1, adress2, setAdress2, handleSubmit } =
    useContext(MyContext);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Adress1</h1>
        <label>
          Number:
          <input
            type='text'
            name='number'
            onChange={(e) =>
              setAdress1({
                ...adress1,
                number: e.target.value,
              })
            }
            value={adress1.number}
          />
        </label>
        <label>
          Street:
          <input
            type='text'
            name='street'
            onChange={(e) =>
              setAdress1({
                ...adress1,
                streetName: e.target.value,
              })
            }
            value={adress1.streetName}
          />
        </label>
        <label>
          City:
          <input
            type='text'
            name='city'
            onChange={(e) => setAdress1({ ...adress1, city: e.target.value })}
            value={adress1.city}
          />
        </label>
        <label>
          Country:
          <input
            type='text'
            name='country'
            onChange={(e) =>
              setAdress1({
                ...adress1,
                country: e.target.value,
              })
            }
            value={adress1.country}
          />
        </label>
      </div>

      <label>
        <h1>Adress2</h1>
        <label>
          Number:
          <input
            type='text'
            name='number'
            onChange={(e) => setAdress2({ ...adress2, number: e.target.value })}
            value={adress2.number}
          />
        </label>
        <label>
          Street:
          <input
            type='text'
            name='street'
            onChange={(e) =>
              setAdress2({
                ...adress2,
                streetName: e.target.value,
              })
            }
            value={adress2.streetName}
          />
        </label>
        <label>
          City:
          <input
            type='text'
            name='city'
            onChange={(e) => setAdress2({ ...adress2, city: e.target.value })}
            value={adress2.city}
          />
        </label>
        <label>
          Country:
          <input
            type='text'
            name='country'
            onChange={(e) =>
              setAdress2({
                ...adress2,
                country: e.target.value,
              })
            }
            value={adress2.country}
          />
        </label>
      </label>
      <input type='submit' value='Find' />
    </form>
  );
}
