import { Map } from '../Map/Map';
import { AstronautList } from 'components/AstronautList/AstronautList';
import { Wrapper, WrapperMap } from './App.styled';
export const App = () => {
  return (
    <Wrapper>
      <WrapperMap>
        <Map />
      </WrapperMap>
      <AstronautList />
    </Wrapper>
  );
};
