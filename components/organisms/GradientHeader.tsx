import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  title: string;
};

const GradientHeader: React.FC<Props> = ({ title }: Props) => (
  <View>
    <LinearGradient colors={['#802254', '#F7797D']} style={styles.background}>
      <Header
        centerComponent={{ text: title, style: styles.headerStyle }}
        containerStyle={styles.headerContainerStyle}
      />
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainerStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  headerStyle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
  },
});

export default GradientHeader;
