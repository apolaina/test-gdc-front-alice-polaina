import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card as RNECard, Icon, Text, useTheme } from 'react-native-elements';

type Props = {
  success?: boolean;
  text: string;
  onDelete: () => void;
};

const Card: React.FC<Props> = ({ text, success = false, onDelete }) => {
  const { theme } = useTheme();

  return (
    <RNECard containerStyle={styles.card}>
      <View style={styles.view}>
        <Text
          style={{
            ...styles.text,
            color: success ? theme.colors?.success : theme.colors?.error,
          }}>
          {text}
        </Text>

        <Icon
          name="cross"
          type="entypo"
          tvParallaxProperties
          onPress={onDelete}
        />
      </View>
    </RNECard>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    width: '100%',
    margin: 0,
    borderRadius: 4,
    marginBottom: 12,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
});

export default Card;
