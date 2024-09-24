import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#cbf5f7', '#cbf5f7', '#cbf5f7', '#cbf5f7', '#2bd3f8']}
      style={{ flex: 1 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./logo3.png')}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.heading}>FORGET PASSWORD</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.subtext}>
          Provide your account’s email for which you want to reset your
          password.
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <TextInput
          style={{
            height: 45,
            width: 257,
            backgroundColor: '#C4C4C4',
            fontSize: 15,
            paddingLeft: 10,
          }}
          placeholder="Email"
        />
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{ height: 45, width: 257 }}>
          <Button title="NEXT" color="#e3c000" onPress={() => {}} />
        </View>
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
});

export default App;
