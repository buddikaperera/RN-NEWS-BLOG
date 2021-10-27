import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Screen from './app/components/Screen';

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNum(num + 5);
    }, 4000);
  }, []);
  return (
    <Screen>
      <Text>{num}</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
