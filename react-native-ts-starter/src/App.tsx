import {registerRootComponent} from 'expo';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: blue;
`;

const App: React.FC = () => {
  return (
    <StyledView>
      <Text>React Native</Text>
    </StyledView>
  );
};

registerRootComponent(App);
