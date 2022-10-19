import { getPeople } from 'api/apiService';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {
  Austronaut,
  AstronautUl,
  Icons,
  Wrapper,
  TimeNow,
  TimeData,
} from './AstronautList.styled';
import useInterval from 'hooks/useInterval';
import { getLocation } from 'api/apiService';
import shortid from 'shortid';
export const AstronautList = () => {
  const [astronaut, setAstronaut] = useState('');
  const [time, setTime] = useState('');
  useInterval(() => {
    getLocation().then(resp => setTime(resp.timestamp));
  }, 5000);
  useEffect(() => {
    getPeople()
      .then(resp =>
        setAstronaut(resp.people.filter(data => data.craft === 'ISS'))
      )
      .catch(error => console.log(error));
  }, []);

  return (
    <Wrapper>
      <TimeNow>
        <TimeData>
          Current UTC time: {dayjs.unix(time).format('HH:mm')}
        </TimeData>
        <TimeData>{dayjs.unix(time).format('dddd,D MMMM YYYY ')}</TimeData>
      </TimeNow>
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
      <div>
        <p> Total amount: {astronaut.length} people on ISS</p>
      </div>
    </Wrapper>
  );
};
