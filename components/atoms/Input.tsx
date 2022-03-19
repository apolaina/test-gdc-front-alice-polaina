import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';

type Props = TextInputProps & {
  suffix?: string;
};

const Input: React.FC<Props> = (props: Props) => {
  const { theme } = useTheme();
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View
      style={{
        ...styles.container,
        borderColor: focus ? theme.colors?.primary : theme.colors?.greyOutline,
      }}>
      <TextInput
        style={styles.input}
        selectionColor={theme.colors?.primary}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoCapitalize="none"
        {...props}
      />
      <Text>{props.suffix}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 8,
    overflow: 'hidden',
  },
  input: {
    textTransform: 'lowercase',
    flex: 1,
  },
});

export default Input;
