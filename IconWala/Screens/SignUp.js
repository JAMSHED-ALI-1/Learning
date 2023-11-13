import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Checkbox, Button, Chip} from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist';
import {useNavigation} from '@react-navigation/native';
export default function SignUp() {
  const [checked, setchecked] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const data = [
    {
      time: '09:00',
      title: 'Create Account',
      description: 'Enter your account detail',
    },
    {
      time: '09:20',
      title: 'Persional Information',
      description: 'Enter your persional detail',
    },
    {
      time: '09:50 ',
      title: 'Identity Varification',
      description: 'Veryfy Your identity to protect your account',
    },
  ];
  return (
    <View
      style={{flex: 1, gap: 30, marginTop: 10, padding: 19, height: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../Images/Group545.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>
      <View style={{alignSelf: 'center', gap: 10}}>
        <Text style={{fontSize: 25, color: '#1f1f1f', fontWeight: 600}}>
          Create Your Account
        </Text>
        <Text style={{fontFamily: 'popines', fontSize: 16}}>
          To get started, we need you to create an account with us. It's a quick
          and straight forward process that will only take a few minutes.
        </Text>
      </View>
      <View
        style={{
          height: 250,
          // borderWidth: 4,
          borderColor: 'black',
          borderRadius: 5,
          // marginTop: 50,
          // paddingHorizontal: 20,
          // alignSelf:'flex-start'
          // alignItems:'flex-start'
        }}>
        <Timeline
          data={data}
          circleColor="#1f1f1f"
          lineColor="1f1f1f"
          circleSize={20}
          lineWidth={2}
          titleStyle={{color: '#1f1f1f', fontSize: 19}}
          // lineHeight={}
          // renderFullLine={true}
          // separator={false}
          separatorStyle={styles.seprator}
          innerCircle={'dot'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Checkbox
          status={checked ? 'ckecked' : 'unchecked'}
          onPress={() => {
            setchecked(!checked);
          }}
          color="red"
        />
        <Text>
          By creating an account you agree to our{' '}
          <Text style={styles.termsText}>Terms and Condition </Text>and
          <Text style={styles.policyText}>Privacy Policy.</Text>
        </Text>
      </View>
      <View style={{}}>
        <Button
          mode="contained"
          buttonColor="red"
          contentStyle={{fontSize: 400}}
          style={{height: 50, width: '95%', marginLeft: 10, fontSize: 30}}
          onPress={() => console.log('Pressed')}>
          CREATE ACCOUNT
        </Button>
      </View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
        <Text style={{marginTop:10,fontSize:15,color:'#1f1f1f'}}>Already have an account?</Text>
        <Button
          mode="text"
          textColor="red"
          style={{height: 40}}
          onPress={handleLogin}>
          LOGIN
        </Button>
      </View>
    </View>
  );
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems:'flex-start'
    // marginTop: 50,
    //  paddingHorizontal: 20,
  },
  seprator: {
    width: 2,
    marginTop: 80,
    height: 20,
  },
  termsText: {
    color: '#FF7A00',
    fontWeight: 'bold',
  },
  policyText: {
    color: '#FF7A00',
    fontWeight: 'bold',
  },
});
