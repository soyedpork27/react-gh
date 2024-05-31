import styled from 'styled-components';


export const Nyong = styled.section`
  background-color : ${props => props.primary?`#f00`:`#fff`};
  > article {
    background-color : #f0f;
  }
`;