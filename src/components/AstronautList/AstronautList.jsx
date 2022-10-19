import { getPeople } from 'api/apiService';
import { useEffect, useState } from 'react';
import {
  Austronaut,
  AstronautUl,
  Icons,
  Wrapper,
} from './AstronautList.styled';
import shortid from 'shortid';
export const AstronautList = () => {
  const [astronaut, setastronaut] = useState('');
  useEffect(() => {
    getPeople()
      .then(resp => setastronaut(resp.people))
      .catch(error => console.log(error));
  }, []);

  return (
    <Wrapper>
      <AstronautUl>
        {astronaut &&
          astronaut
            .filter(data => data.craft === 'ISS')
            .map(({ name }) => {
              return (
                <Austronaut key={shortid.generate()}>
                  <Icons /> {name}
                </Austronaut>
              );
            })}
      </AstronautUl>
      <p>{astronaut.length}</p>
    </Wrapper>
  );
};
