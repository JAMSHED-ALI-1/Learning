import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/Ionicons';

export default function Login() {
  return (
    <View>
      <Image
        source={require('../Images/Checkmark.png')}
        style={{tintColor: 'red'}}
      />
      <Text>WelCome</Text>
      <Icon name="home" size={30} />
      <TextInput
        label="E-mail"
        mode="outlined"
        left={<TextInput.Icon icon="Email" />}
      />
    </View>
  );
}
