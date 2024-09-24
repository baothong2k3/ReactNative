import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#00ccf9' }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./logo.png')} style={{ width: 200, height: 200 }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 25,
            fontWeight: 'bold',
            lineHeight: 29.3,
            textAlign: 'center',
          }}>
          GROW YOUR BUSINESS
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 17.58,
            textAlign: 'center',
          }}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={styles.buttonContainer}>
          <Button title="LOGIN" color="#e3c000" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="SIGN UP" color="#e3c000" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#e3c000',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default App;