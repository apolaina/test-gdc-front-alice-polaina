import React from 'react';
import { View } from 'react-native';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

type Props = {
  buttonTile?: string;
  inputSuffix: string;
  inputPlaceholder: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const Form: React.FC<Props> = ({
  buttonTile = 'Submit',
  inputSuffix,
  inputPlaceholder,
  loading = false,
  onChange,
  onSubmit,
}) => {
  return (
    <View>
      <Input
        suffix={inputSuffix}
        placeholder={inputPlaceholder}
        onChangeText={value => onChange(value)}
      />
      <Button title={buttonTile} onPress={onSubmit} loading={loading} />
    </View>
  );
};

export default Form;
