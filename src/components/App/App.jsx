import { Map } from '../Map/Map';
import { AstronautList } from 'components/AstronautList/AstronautList';
import { Wrapper, WrapperMap, Container } from './App.styled';
export const App = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperMap>
          <Map />
        </WrapperMap>
        <AstronautList />
      </Container>
    </Wrapper>
  );
};
