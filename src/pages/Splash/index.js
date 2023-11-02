import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Splashi} from '../../assets';
import {Gap} from '../../components/atoms';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MyApp');
    }, 1000);
  }, []);

  return (
    <View style={styles.page}>
      <Splashi />
      <Gap height={33} />
      <Text style={styles.text}>SIDESA</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
    color: '#21130d',
  },
});
