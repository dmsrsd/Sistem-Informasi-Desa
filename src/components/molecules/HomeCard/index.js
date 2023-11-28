import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {News} from '../../../assets';

const HomeCard = ({ image, name,textSub, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.textSub}>{textSub}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 200,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    paddingBottom: 10,
    width : 200
  },
  textSub: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  content: {
    padding: 20,
    backgroundColor: '#063970',
  },
});
