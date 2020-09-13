import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const CardSideEnum = {
  FRONT: 'FRONT',
  BACK: 'BACK',
};

const CardSide = ({
  children,
  style = [],
  bgColor = '#612F74',
  renderBackground,
  ...props
}: any) => {
  const DefaultBackground: React.FC<{ children: any }> = React.useCallback(
    ({ children: child }) => {
      const bgStyle = { backgroundColor: bgColor, borderRadius: 9 };
      return <View style={bgStyle}>{child}</View>;
    },
    [bgColor]
  );

  const Background = renderBackground || DefaultBackground;

  return (
    <Animated.View style={[styles.sideWrapper, ...style]} {...props}>
      <Background>
        <View style={styles.container}>{children}</View>
      </Background>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sideWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    borderRadius: 9,
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 16,
  },
});

export default CardSide;
