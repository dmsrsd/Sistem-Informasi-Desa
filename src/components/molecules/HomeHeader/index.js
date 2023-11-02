import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {LogoApp} from '../../../assets';

const HomeHeader = () => {
  return (
    <View style={styles.homeProfile}>
      <View>
        <Text style={styles.title}>S I D E S A</Text>
        <Text style={styles.subTitle}>Sistem Informasi Desa</Text>
      </View>
      <Image source={LogoApp} style={styles.profile}></Image>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#063970',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  subTitle: {
    fontSize: 19,
    fontFamily: 'Poppins_Medium',
    color: 'white',
  },
});
