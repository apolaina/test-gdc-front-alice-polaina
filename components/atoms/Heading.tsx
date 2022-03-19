import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const Heading: React.FC = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    paddingBottom: 15,
  },
});

export default Heading;
