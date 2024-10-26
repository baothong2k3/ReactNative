import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: 1,
    img: require('./bifour_-removebg-preview.png'),
    name: 'Pinarello',
    price: '1800',
    category: 'Roadbike',
  },
  {
    id: 2,
    img: require('./bione-removebg-preview.png'),
    name: 'Pina Mountain',
    price: '1700',
    category: 'Mountain',
  },
  {
    id: 3,
    img: require('./bithree_removebg-preview.png'),
    name: 'Pina Bike',
    price: '1500',
    category: 'Roadbike',
  },
  {
    id: 4,
    img: require('./bitwo-removebg-preview.png'),
    name: 'Pinarello',
    price: '1900',
    category: 'Mountain',
  },
  {
    id: 5,
    img: require('./bithree_removebg-preview.png'),
    name: 'Pinarello',
    price: '2700',
    category: 'Roadbike',
  },
  {
    id: 6,
    img: require('./bione-removebg-preview.png'),
    name: 'Pinarello',
    price: '1350',
    category: 'Mountain',
  },
];

const ScreenListProduct = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState(DATA);

  // Hàm để lọc sản phẩm theo danh mục
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredData(DATA);
    } else {
      setFilteredData(DATA.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView>
      <Text style={styles.textHeaderList}>The world’s Best Bike</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={styles.buttonList}
          onPress={() => setSelectedCategory('All')}>
          <Text style={{ ...styles.textButtonList, color: selectedCategory === 'All' ? 'red' : '#beb6b6' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonList}
          onPress={() => setSelectedCategory('Roadbike')}>
          <Text style={{ ...styles.textButtonList, color: selectedCategory === 'Roadbike' ? 'red' : '#beb6b6' }}>
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonList}
          onPress={() => setSelectedCategory('Mountain')}>
          <Text style={{ ...styles.textButtonList, color: selectedCategory === 'Mountain' ? 'red' : '#beb6b6' }}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <Item img={item.img} name={item.name} price={item.price} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const Item = ({ img, name, price }) => (
  <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
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
        style={{ width: 135, height: 127 }}
        source={img}
      />
      <Text style={{ ...styles.textButtonList, color: '#8c8681' }}>{name}</Text>
      <Text style={{ fontSize: 20, fontFamily: 'Voltaire', textAlign: 'center' }}>
        <Text style={{ color: '#F7BA83' }}>$</Text>
        {price}
      </Text>
    </View>
  </View>
);

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

// Đoạn code khác cho các màn hình và NavigationContainer
