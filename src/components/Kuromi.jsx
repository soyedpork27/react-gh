import React from 'react';
import styled from 'styled-components';

const Nyong = styled.section`
  background-color : ${props => props.unique ? '#f00' : '#66a571'};
  > article {
    background-color : #bcc480;
  }
`;

function Kuromi(props) {
  return (
    <div>
      <Nyong unique>
        <p>뇽이 태그입니다.</p>

        <article>
          쿠로미 컴포넌트입니다.
        </article>
      </Nyong>

      <Nyong>
        <p>하아아아아</p>
        <article>
          킹받쥬
        </article>
      </Nyong>
    </div>
  );
}

export default Kuromi;