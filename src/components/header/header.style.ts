import styled from 'styled-components';

export const Header = styled.h1`
   {
    margin: 1rem auto;
    text-align: center;
    width: 20rem;
    font-size: ${(props: IHeader) => (props.primary ? '2rem' : '1.4rem')};
    color: #2d3346;
    color: ${(props: IHeader) => (props.primary ? '#2d3346' : '#485171')};
  }
`;
