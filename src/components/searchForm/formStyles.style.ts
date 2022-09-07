import styled from 'styled-components';

interface IForm {
  map?: boolean;
}

export const Form = styled.form`
   {
    margin: 0 auto 2rem;
    width: ${(props: IForm) => (props.map ? '100%' : '50%')};
    display: flex;
    flex-direction: ${(props: IForm) => (props.map ? 'column' : 'row')};
    justify-content: space-around;
    /* height: 1.5rem; */
    height: ${(props: IForm) => (props.map ? 'auto' : '1.5rem')};
    min-width: ${(props: IForm) => (props.map ? 'auto' : '40rem')};
    /* border: 1px solid red; */
  }
`;

export const FormInput = styled.input`
   {
    height: 1.5rem;
    margin: 0 0.4rem;
    border: 1px solid #485171;
    border-radius: 0.2rem;
    background-color: #f8f9ff;
  }
`;

export const FormLabel = styled.label`
   {
    height: 100%;
    /* margin: 0 auto; */
    margin: ${(props: IForm) => (props.map ? '0 auto 1rem' : '0 auto')};
    font-weight: 600;
    color: #485171;
  }
`;

export const FormButton = styled.input`
   {
    border: none;
    /* padding: 0rem 1rem; */
    width: 6rem;
    height: 1.5rem;
    margin: auto;
    text-align: center;
    border-radius: 0.2rem;
    background-color: #485171;
    color: #f8f9ff;
    cursor: pointer;
    /* height: 100%; */
  }
`;
