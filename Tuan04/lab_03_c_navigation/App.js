import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreenBlue({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
        width: 350,
        height: 640,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Image
          source={require('./vs_blue.png')}
          style={{ width: 301, height: 361 }}
        />
      </View>
      <View
        style={{
          flex: 8,
          alignItems: 'stretch',
          flexDirection: 'column',
          marginLeft: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 30,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 17.58,
              width: 350,
              height: 18,
            }}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 'bold',
              lineHeight: 17.58,
              textAlign: 'left',
            }}>
            1.790.000 đ
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: '700',
              lineHeight: 17.58,
              textAlign: 'left',
              textDecorationLine: 'line-through',
              opacity: 0.5,
              marginLeft: 80,
            }}>
            1.790.000 đ
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 14.06,
              color: '#FA0000',
              marginTop: 20,
            }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <View style={styles.circle}>
            <Text style={styles.questionMark}>?</Text>
          </View>
        </View>
        <View style={{ width: 300, marginTop: 20 }}>
          <Button
            title="4 MÀU-CHỌN MÀU"
            onPress={() => navigation.navigate('ColorBlue')}></Button>
        </View>
      </View>
      <View style={{ width: 300, marginLeft: 20, marginBottom: 50 }}>
        <Button title="CHỌN MUA" color="#FA0000" onPress={() => {}}></Button>
      </View>
    </View>
  );
}

function ColorScreenBlue({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
        width: 350,
        height: 640,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./vs_blue.png')}
            style={{ width: 112, height: 132 }}
          />
        </View>
        <View style={{ width: 164, height: 36, marginLeft: 10 }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 17.58,
              marginTop: 20,
            }}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={{ flex: 7, backgroundColor: '#c4c4c4' }}>
        <View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 21.09,
              marginTop: 10,
              marginLeft: 10,
            }}>
            Chọn một màu bên dưới:
          </Text>
          <View
            style={{
              height: 450,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#c5f1fb',
              }}></View>
            <TouchableOpacity
              style={styles1.button}
              onPress={() =>
                navigation.navigate('ColorRed')
              }></TouchableOpacity>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#000000',
              }}></View>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#234896',
              }}></View>
          </View>
        </View>
        <View style={{ width: 300, marginLeft: 20, marginTop: 10 }}>
          <Button title="Xong" color="#4d6ec2" onPress={() => {}}></Button>
        </View>
      </View>
    </View>
  );
}
function ColorScreenRed({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
        width: 350,
        height: 640,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./vs_red_a_1.png')}
            style={{ width: 112, height: 132 }}
          />
        </View>
        <View style={{ width: 164, height: 36, marginLeft: 10 }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 17.58,
              marginTop: 10,
            }}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 17.58,
              marginTop: 10,
            }}>
            Màu: <span style={{ fontWeight: 700 }}>đỏ</span>
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 17.58,
              marginTop: 10,
              width: 180,
            }}>
            Cung cấp bởi: <span style={{ fontWeight: 700 }}>Tiki Tradding</span>
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 18,
              fontWeight: 700,
              lineHeight: 21.09,
              marginTop: 10,
            }}>
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View style={{ flex: 7, backgroundColor: '#c4c4c4' }}>
        <View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 21.09,
              marginTop: 10,
              marginLeft: 10,
            }}>
            Chọn một màu bên dưới:
          </Text>
          <View
            style={{
              height: 450,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#c5f1fb',
              }}></View>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#F30D0D',
              }}></View>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#000000',
              }}></View>
            <View
              style={{
                width: 85,
                height: 80,
                backgroundColor: '#234896',
              }}></View>
          </View>
        </View>
        <View style={{ width: 300, marginLeft: 20, marginTop: 10 }}>
          <Button title="Xong" color="#4d6ec2" onPress={() => navigation.navigate('HomeRed')}></Button>
        </View>
      </View>
    </View>
  );
}
function HomeScreenRed() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
        width: 350,
        height: 640,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Image
          source={require('./vs_red_a_1.png')}
          style={{ width: 301, height: 361 }}
        />
      </View>
      <View
        style={{
          flex: 8,
          alignItems: 'stretch',
          flexDirection: 'column',
          marginLeft: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 30,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 17.58,
              width: 350,
              height: 18,
            }}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 'bold',
              lineHeight: 17.58,
              textAlign: 'left',
            }}>
            1.790.000 đ
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: '700',
              lineHeight: 17.58,
              textAlign: 'left',
              textDecorationLine: 'line-through',
              opacity: 0.5,
              marginLeft: 80,
            }}>
            1.790.000 đ
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 14.06,
              color: '#FA0000',
              marginTop: 20,
            }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <View style={styles.circle}>
            <Text style={styles.questionMark}>?</Text>
          </View>
        </View>
        <View style={{ width: 300, marginTop: 20 }}>
          <Button
            title="4 MÀU-CHỌN LOẠI"
            onPress={() => {}}></Button>
        </View>
      </View>
      <View style={{ width: 300, marginLeft: 20, marginBottom: 50 }}>
        <Button title="CHỌN MUA" color="#FA0000" onPress={() => {}}></Button>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeBlue">
        <Stack.Screen name="ColorBlue" component={ColorScreenBlue} />
        <Stack.Screen name="HomeBlue" component={HomeScreenBlue} />
        <Stack.Screen name="ColorRed" component={ColorScreenRed} />
        <Stack.Screen name="HomeRed" component={HomeScreenRed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  questionMark: {
    fontSize: 13,
    color: 'black',
  },
});
const styles1 = StyleSheet.create({
  button: {
    width: 86,
    height: 80,
    backgroundColor: '#FA0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
