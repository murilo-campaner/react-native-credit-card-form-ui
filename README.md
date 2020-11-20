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

## Component API
### Basic Props

| Prop | Description | Type | Default |
|---|---|---|---|
|**`placeholders`**| Placeholders used in card inputs |*object*| { number: '0000 0000 0000 0000', holder: 'TITULAR DO CARTÃO', expiration: 'MM/YYYY', cvv: '000' } |
|**`labels`**| Labels used above card inputs | *object* | { holder: 'TITULAR DO CARTÃO', expiration: 'VENCIMENTO', cvv: 'CÓD. SEGURANÇA' } |
|**`expirationDateFormat`**| Card expiration date format. Can be `MM/YYYY` or `MM/YY` | *string* | MM/YYYY |
|**`initialValues`**| Initial values of inputs | `CardData` | { number: '', holder: '', expiration: '', cvv: '', brand: ''}
|
|**`background`**| Credit card background. It can be a string (HEX / RGB) or a React element (like [LinearGradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/) for example) | `string` or `React.Component`. If it's an `React.Component`, the component will receive the card content as children.  | #612F74 |
|**`textColor`**| Label colors | `string` | #FFFFFF |
|**`placeholderTextColor`**| Placeholder color (normal state) | `string`  | #9B84A9 |
|**`errorTextColor`**| Placeholder color (error state) | `string` | #F15A5B |
|**`onValidStateChange`**| Called when card valid state changes (`true` or `false`) | `func` |(validCard) => null|

### Methods (Imperative API):

| Method | Description |
|---|---|
|**`submit`**| Submit form, validate fields and return an response like this: `{ error: null, data: cardData }`.


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
