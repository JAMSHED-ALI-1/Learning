import {
  View,
  Text,
  text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-paper'
export default function Login() {
  const [select, setselect] = useState(1);
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const navigation = useNavigation();
  const handlelogin = () => {
    if (select === 1) {
      console.log('Email', email);
    } else if (select === 2) {
      console.log('phone');
    }
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={{flex: 1, gap: 35}}>
      <View style={{alignItems: 'center', gap: 25}}>
        <Image
          source={require('../Images/Group545.png')}
          style={{resizeMode: 'contain', marginTop: 80}}
        />
        <View>
          <Text style={{fontSize: 27, color: '#262626'}}> Welcome Back</Text>
          <Text style={{marginLeft: 40}}>Sign In to continue</Text>
        </View>

        {/* <View style={{}}>
          <Button
            mode="contained"
            style={{width: 100, backgroundColor: '#EC1F24'}}>
            Email
          </Button>
          <Button
            mode="contained"
            style={{width: 100, backgroundColor: '#EC1F24'}}>
            Email
          </Button>
        </View> */}
        <View
          style={{
            height: 40,
            width: 200,
            marginTop: 40,
            // borderWidth: 2,
            // borderColor: 'black',
            // borderRadius: 5,
            flexDirection: 'row',
          }}>
          <Button
            mode="contained"
            buttonColor={select == 1 ? 'red' : '#fff'}
            dark={true}
            textColor={select == 1 ? 'white' : 'black'}
            onPress={() => {
              setselect(1);
            }}
            style={select == 1 ? styles.bt1 : styles.btn2}>
            {' '}
            Email
          </Button>

          <Button
            mode="contained"
            buttonColor={select === 2 ? 'red' : '#fff'}
            dark={true}
            onPress={() => {
              setselect(2);
            }}
            textColor={select == 2 ? 'white' : 'black'}
            style={select == 2 ? styles.bt1 : styles.btn2}>
            {' '}
            Phone
          </Button>
        </View>
      </View>
      <View style={{width: '90%', alignSelf: 'center', gap: 20}}>
        {select === 1 && (
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setemail(text)}
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
            left={<TextInput.Icon name="account" />}
            outlineColor="red"
            outlineStyle={{borderRadius: 10}}
            activeOutlineColor="red"
            placeholder="Enter Your E-mail"
            style={(borderRadius = 50)}
          />
        )}

        {select === 2 && (
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={text => setphone(text)}
            mode="outlined"
            right={<TextInput.Icon name="eye" />}
            left={<TextInput.Icon name="phone" />}
            outlineStyle={{borderRadius: 10}}
            outlineColor="red"
            keyboardType="phone-pad"
            activeOutlineColor="red"
            placeholder="Enter Your Phone Number"
          />
        )}
        <TextInput
          label="Password"
          secureTextEntry={true}
          value={text}
          mode="outlined"
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="password" />}
          outlineStyle={{borderRadius: 10}}
          outlineColor="red"
          activeOutlineColor="red"
          placeholder="Password"
          // width={40}
        />
        <Text style={{alignSelf: 'flex-end', color: 'red', fontSize: 18}}>
          Forgrt Password?
        </Text>
      </View>
      <View style={{}}>
        <Button
          mode="contained"
          buttonColor="red"
          contentStyle={{fontSize: 400}}
          style={{height: 50, width: '95%', marginLeft: 10, fontSize: 30}}
          onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
          Don't have an account
        </Text>
        <Button
          mode="text"
          textColor="red"
          style={{height: 40}}
          onPress={handleSignUp}>
          SignUp
        </Button>
      </View>
    </View>
  );
}
styles = StyleSheet.create({
  btn1: {
    backgroundColor: 'red',
    width: 100,
  },
  btn2: {
    backgroundColor: '#fff',
    width: 100,
    color: 'black',
  },
  signUptext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
});
