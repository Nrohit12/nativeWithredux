import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux'
import {userDetails, login} from "../../redux/actions"



import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  
  const dispatch = useDispatch()

const signIn = () => {
    let userData = {
      name, password
    }
     console.log(userData)
     dispatch(login())
     dispatch(userDetails(userData))
    
};
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2NZqZofeyv9AMBVBbx_s9q1mEUaERz-Vsw&usqp=CAU'}

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{backgroundColor: 'white'}}>
          
          <View
            style={{
              width: wp(100),
              marginTop: hp(5),
              marginLeft: wp(10),
            }}>
            <Text style={{fontSize: hp(5), fontWeight: 'bold'}}>
              Welcome back!
            </Text>
            <Text style={{fontSize: hp(2.2), paddingVertical: 5}}>
              Log back into your account
            </Text>
          </View>
          <View
            style={{
              marginVertical: hp(3),
              alignItems: 'center',
            }}>
            <TextInput
          style={styles.input}
          onChangeText={text => {
            setName(text)
          }}
          placeholder={`Enter your Name`}
          placeholderTextColor="grey"
          
        /><TextInput
          style={styles.input}
          onChangeText={text => {
           setPassword(text)
          }}
          placeholder={`Enter your password`}
          placeholderTextColor="grey"
          
        />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity style={styles.button} >
            <Text style={{fontSize: hp(2.4), color: 'white'}} onPress={() =>signIn()}>Login Now</Text>
          </TouchableOpacity>
        </View>

        
     </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logIn: {
    position: 'absolute',
    right: 10,
    elevation: 10,
    top: 10,
    width: wp(20),
    alignItems: 'center',
  },
  input: {
    margin: 12,
    width: wp(80),
    borderBottomWidth: 2,
    padding: 10,
    color: '#000',
    fontSize: 18,
    borderBottomColor: 'green',
  },

  button: {
    width: wp(70),
    padding: hp(1.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1),
    borderWidth: 2,
    backgroundColor: 'green',
    marginVertical: hp(2.5),
  },
  image: {
    width:wp(100),
    height: hp(100)
  },
});
