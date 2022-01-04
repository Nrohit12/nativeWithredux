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
  Alert
} from 'react-native';
import {renderItems} from './renderItems';
import {allItems} from '../../constants/items';
import {addIcon, subtractIcon, userIcon, cartIcon} from '../../constants/images';

import {IconButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux'
import {userDetails, logout, addtoCart} from "../../redux/actions"
import { useSelector } from 'react-redux'

export default function Home({navigation}) {
  const image = {
    uri: 'https://images.wallpapersden.com/image/download/picture-plane-clouds_ZmVtZm2UmZqaraWkpJRmaWllrWdqa2VnZWdmbmZm.jpg',
  };
  const dispatch = useDispatch()
  const {details, cartItems} = useSelector(state => state.userDetails)
  // // let quantity = cartItems.count
  //  useEffect(() => {
  //    console.log(cartItems)
     
  //  }, [])

  const logOut = () => {
      let userData = {
        name:'', password: ''
      }
      console.log('logout')
      dispatch(logout())
     dispatch(userDetails(userData))
  }

  const updateQuantity = (data) => {
      if(cartItems.includes(data)){
         Alert.alert(  
            'ALready added',  
            'You have already added this to cart.',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
      }
      else
      dispatch(addtoCart(data))
      // console.log(cartItems)
  }

//rendering home items
  const renderItems = ({item, index}) => <Items item={item} />;
  const Items = ({item}) => {
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
                icon={addIcon}
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
          <Text style={styles.headerText}> Your Cart Selector </Text>
        </View>

        <FlatList
          data={allItems}
          renderItem={renderItems}
          keyExtractor={item => item.name}
        />

        <View style={styles.bottom}>
            <View style={{width:'50%', alignItems:'center'}}>
            <Text >{cartItems.length}</Text>
            <IconButton
                color="cyan"
                icon={cartIcon}
                style={{width: 15, height: 15}}
                onPress={() => navigation.navigate('Cart')}
              />
                <Text style={{color: 'blue',}}>Cart</Text>
                
            </View>
              <View style={{width:'50%',alignItems:'center'}}>
                <IconButton
                color="red"
                icon={userIcon}
                style={{width: 25, height: 25}}
                onPress={() => logOut()}
              />
              <Text style={{color: 'green',}}> Logout
              </Text>
              </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp(100),
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {color: 'red', fontSize: 20},
  bottom: {
    width: wp(100),
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
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
