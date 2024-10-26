import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Item = ({ img, name, price }) => (
  <View style={{ paddingTop: 20, paddingLeft: 20 }}>
    <View
      style={{
        width: 167,
        height: 200,
        backgroundColor: '#E941411A',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Image
        style={{
          position: 'absolute', // đặt position là absolute để di chuyển
          top: 5, // khoảng cách từ trên cùng
          left: 10, // khoảng cách từ bên phải
          zIndex: 1, // đảm bảo hình ảnh không bị che bởi các thành phần khác
        }}
        source={require('./heart.png')}
      />
      <Image style={{ width: 135, height: 127 }} source={{ uri: img }} />
      <Text style={{ ...styles.textButtonList, color: '#8c8681' }}>{name}</Text>
      <Text
        style={{ fontSize: 20, fontFamily: 'Voltaire', textAlign: 'center' }}>
        <Text style={{ color: '#F7BA83' }}>$</Text>
        {price}
      </Text>
    </View>
  </View>
);

const ScreenHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={{ ...styles.text1, width: 351, height: 87, paddingTop: 40 }}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.khungImage}>
        <Image
          source={require('./bifour_-removebg-preview.png')}
          style={{ width: 292, height: 270 }}
        />
      </View>

      <Text style={{ ...styles.text2, width: 200 }}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.buttonStart}
        onPress={() => navigation.navigate('List')}>
        <Text style={{ ...styles.text1, color: '#FFFFFF' }}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const ScreenListProduct = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://67167ea63fcb11b265d2a5a1.mockapi.io/bike'
        );
        const data = await response.json();
        setAllData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredData(allData);
    } else {
      setFilteredData(
        allData.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory, allData]);

  return (
    <ScrollView>
      <Text style={styles.textHeaderList}>The world’s Best Bike</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={styles.buttonList}
          onPress={() => setSelectedCategory('All')}>
          <Text
            style={{
              ...styles.textButtonList,
              color: selectedCategory === 'All' ? 'red' : '#beb6b6',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonList}
          onPress={() => setSelectedCategory('Roadbike')}>
          <Text
            style={{
              ...styles.textButtonList,
              color: selectedCategory === 'Roadbike' ? 'red' : '#beb6b6',
            }}>
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonList}
          onPress={() => setSelectedCategory('Mountain')}>
          <Text
            style={{
              ...styles.textButtonList,
              color: selectedCategory === 'Mountain' ? 'red' : '#beb6b6',
            }}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { product: item })}>
              <Item img={item.img} name={item.name} price={item.price} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
};

const ScreenProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.khungImage}>
        <Image
          source={{ uri: product.img }}
          style={{ width: 292, height: 270 }}
        />
      </View>
      <View>
        <Text
          style={{ ...styles.textProductDetail, color: 'black', fontSize: 35 }}>
          {product.name}
        </Text>
        <Text style={{ ...styles.textProductDetail, fontSize: 20 }}>
          Price: ${product.price}
          <Text
            style={{
              color: 'black',
              paddingLeft: 20,
              textDecorationLine: 'line-through',
            }}>
            449$
          </Text>
        </Text>
        <Text
          style={{
            ...styles.textProductDetail,
            fontSize: 25,
            color: 'black',
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          Description
        </Text>
        <Text style={{ ...styles.textProductDetail, fontSize: 20 }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={{ width: 375 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity>
            <Image source={require('./akar-icons_heart.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.buttonStart, borderRadius: 10, width: 269 }}>
            <Text style={{ ...styles.text1, color: '#FFFFFF' }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export default function Appp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen name="List" component={ScreenListProduct} />
        <Stack.Screen name="Detail" component={ScreenProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  khungImage: {
    width: 359,
    height: 388,
    backgroundColor: '#E941411A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  text1: {
    fontFamily: 'VT323',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 400,
    lineHeight: 26,
    alignContent: 'center',
  },
  text2: {
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 29.87,
    alignContent: 'center',
  },
  buttonStart: {
    width: 340,
    height: 61,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonList: {
    width: 99,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  textButtonList: {
    fontFamily: 'Voltaire',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 24.91,
    alignContent: 'center',
  },
  textHeaderList: {
    fontFamily: 'Ubuntu',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 29.73,
    alignContent: 'center',
    paddingLeft: 10,
    color: 'red',
  },
  textProductDetail: {
    fontFamily: 'Voltaire',
    fontWeight: 400,
    color: '#00000091',
    width: 335,
  },
});
