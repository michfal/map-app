import { useContext } from 'react';
import { MapContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../../logic/capitalize';
import { searchFormCheck } from '../../logic/formCheck';
import { Form, FormInput, FormLabel, FormButton } from './formStyles.style';

export const SearchForm: React.FC<IProps> = (props) => {
  const { handleLocationSearch, currentAdresses, setCurrentAdresses } =
    useContext(MapContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchFormCheck(currentAdresses).allTestsPass()) {
      handleLocationSearch();
      props.intro && navigate('/map');
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | string>) => {
    const target = capitalize((e.target as HTMLInputElement).value);

    setCurrentAdresses({
      ...currentAdresses,
      [(e.target as HTMLInputElement).name]: target,
    });
  };

  return (
    <Form onSubmit={handleSubmit} map={props.map}>
      <FormLabel map={props.map}>
        Adress1:
        <FormInput type='text' name='adress1' onChange={handleInput} />
      </FormLabel>

      <FormLabel map={props.map}>
        Adress2:
        <FormInput type='text' name='adress2' onChange={handleInput} />
      </FormLabel>

      <FormButton type='submit' value='Znajdź' />
    </Form>
  );
};
