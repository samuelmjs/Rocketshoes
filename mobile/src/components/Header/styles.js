import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: ${colors.dark};
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 20;
  font-weight: bold;
`;
