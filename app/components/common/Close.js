import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Close = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Icon
        size={35}
        color="black"
        name="cancel"
        style={styles.button}
        onPress={onPress}
      />
    </View>
  );
};

export default Close;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,
    marginVertical: 30,
  },
  button: {
    backgroundColor: 'rgba(92,90,91,0.7)',
    padding: 10,
    borderRadius: 30,
  },
});
