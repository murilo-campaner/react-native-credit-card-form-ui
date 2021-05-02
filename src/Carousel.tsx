import React from 'react';
import { View } from 'react-native';
import CardInput from './CardInput';
import Slick from 'react-native-slick';

const styles = {
  customInput: {
    backgroundColor: 'red',
  },
  inputWrapper: {
    marginHorizontal: 32,
  },
};

const TextInput = () => (
  <View style={styles.inputWrapper}>
    <CardInput style={styles.customInput} />
  </View>
);

const Carousel = ({}) => {
  return (
    <View style={{ height: 100 }}>
      <Slick>
        <TextInput />
        <TextInput />
        <TextInput />
        <CardInput />
      </Slick>
    </View>
  );
};

export default Carousel;
