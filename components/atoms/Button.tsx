import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps } from 'react-native-elements/dist/buttons/Button';
import { Button as RNEButton } from 'react-native-elements';

type Props = ButtonProps;

const Button: React.FC<Props> = (props: Props) => {
  return (
    <RNEButton
      title={props.title}
      titleStyle={styles.title}
      buttonStyle={styles.button}
      containerStyle={styles.container}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    height: 48,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Button;
