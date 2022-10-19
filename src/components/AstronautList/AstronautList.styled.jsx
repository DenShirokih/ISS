import styled from '@emotion/styled';
import { ReactComponent as Icon } from 'icon/icon.svg';

export const Austronaut = styled.li`
  list-style-type: none;
  font-size: 16px;
  border: solid;
  border-radius: 20px;
  padding: 5px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const AstronautUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const Icons = styled(Icon)`
  width: 30px;
  margin-right: 15px;
`;
export const TimeNow = styled.div`
  border: solid;
`;
export const TimeData = styled.p`
  padding-bottom: 5px;
  margin: 0px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
