import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const App = () => {
  return (
    <LinearGradient
      colors={['#cbf5f7', '#cbf5f7', '#cbf5f7', '#cbf5f7', '#2bd3f8']}
      style={{ flex: 1 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 70,
            fontWeight: 700,
            lineHeight: 70.31,
            textAlign: 'center',
          }}>
          CODE
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.heading}>VERIFICATION</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.subtext}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
        </View>
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
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 23.44,
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
  textInput: {
    height: 50,
    width: 50,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
});

export default App;
