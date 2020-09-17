# react-native-credit-card-form-ui

CreditCard Form UI for React Native

![](https://github.com/murilo-campaner/react-native-credit-card-form-ui/raw/master/demo.gif)

## Installation

```sh
npm install react-native-credit-card-form-ui
```

## Usage

```js
import * as React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import CreditCard from 'react-native-credit-card-form-ui';

export default function App() {
  const creditCardRef = React.useRef() as any;

  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <CreditCard ref={creditCardRef} />
      <Button title="Submit" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Roadmap
- [x] Card data validation
- [x] Custom background
- [x] Control keyboard behavior (next, done...)
- [ ] Code refactory
- [ ] Add brands logos


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
