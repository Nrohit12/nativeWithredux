import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {leftIcon, subtractIcon} from '../../constants/images';

import {IconButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux'
import {userDetails, removefromCart} from "../../redux/actions"
import { useSelector } from 'react-redux'

export default function Cart({navigation}) {
  const image = {
    uri: 'https://images.wallpapersden.com/image/download/picture-plane-clouds_ZmVtZm2UmZqaraWkpJRmaWllrWdqa2VnZWdmbmZm.jpg',
  };
  
  const dispatch = useDispatch()
  const {details, cartItems} = useSelector(state => state.userDetails)  
    // useEffect(() => {
        
    //     console.log(cartItems)
        
    // }, [])
   

  

  const updateQuantity = (data) => {
      
      dispatch(removefromCart(data))
  }

//rendering cart items
  const renderItems = ({item, index}) => <Items item={item}  index={index}/>;
  const Items = ({item, index}) => {
    return (
      <View style={{marginHorizontal: wp(4)}}>
        <View style={styles.item}>
          <Image source={{uri: `${item.image}`}} style={styles.itemImage} />
          <View style={{flex: 2, marginLeft: 20}}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={styles.itemQuantity}>
              
              <IconButton
                color="green"
                icon={subtractIcon}
                style={{width: 15, height: 15}}
                onPress={() => updateQuantity(item)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
        <IconButton
                color="black"
                icon={leftIcon}
                style={{width: 25, height: 25}}
                onPress={() => navigation.goBack()}
              />
          <Text style={styles.headerText}> Cart </Text>
        </View>

        {cartItems.length === 0 ? <Text> Oops no item available</Text> : <FlatList
          data={cartItems}
          renderItem={renderItems}
          keyExtractor={item => item.name}
        />}

        

        
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    backgroundColor: 'white',
    padding: 10,
    flexDirection:'row'
  },
  headerText: {color: 'red', fontSize: 20},
  
  image: {
    width: wp(100),
    height: hp(100),
  },
  item: {
    padding: wp(3),
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: wp(99),
  },
  itemQuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    elevation: 1,
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 3,
    color: 'blue',
  },

  itemImage: {
    resizeMode: 'cover',
    width: 60,
    height: 60,
  },
  separator: {
    height: 30,
    width: 1,
    backgroundColor: '#FFCCD2',
  },
});
