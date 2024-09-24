import React from 'react';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#cbf5f7','#cbf5f7','#cbf5f7', '#cbf5f7', '#2bd3f8']}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./logo.png')} style={{ width: 200, height: 200 }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.heading}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.subtext}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="LOGIN" color="#e3c000" onPress={() => {}} />
        <Button title="SIGN UP" color="#e3c000" onPress={() => {}} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={styles.link}>HOW WE WORK?</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 29.3,
    textAlign: 'center',
    color: 'black',
  },
  subtext: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 17.58,
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
