import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {News} from '../../../assets';

const NewsCard = ({image, author, title, category, date, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View
          style={{
            position: 'absolute',
            top: '-90%',
            left: '-0.1%',
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            textAlign: 'right',
          }}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textCategory}>{category}</Text>
          <Text style={styles.textDate}>{date}</Text>
          <Text style={styles.textSub}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#063970',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.9,
    shadowRadius: 17,
    elevation: 14,
    width: 350,
    overflow: 'hidden',
    marginHorizontal: 5,
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 170,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    backgroundColor: '#063970',
    alignSelf: 'flex-start',
  },
  textCategory: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  textDate: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginTop: 10,
    textAlign: 'right',
  },
  textSub: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    textAlign: 'right',
  },
  content: {
    padding: 10,
  },
});
