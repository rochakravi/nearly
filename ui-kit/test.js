import React from 'react';
import {AppRegistry} from 'react-native';
import styled, {css} from '@emotion/native';
import theme from './theme';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  color: theme.colors.primary;
`;

const Description = styled.Text({
  color: 'hotpink',
});

const Image = styled.Image`
  padding: 40px;
`;

const emotionLogo =
  'https://cdn.rawgit.com/emotion-js/emotion/master/emotion.png';

class Test extends React.Component {
  render() {
    return (
      <Container
        style={css`
          border-radius: 10px;
        `}>
        <Description style={{fontSize: 45, fontWeight: 'bold'}}>
          Emotion Primitives
        </Description>
        <Image
          source={{
            uri: emotionLogo,
            height: 150,
            width: 150,
          }}
        />
      </Container>
    );
  }
}

export default Test;
