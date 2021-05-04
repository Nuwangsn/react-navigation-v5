import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const LoginScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Login Screen</Text>
      <Button
        title="Go to home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
