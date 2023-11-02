import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NewsFeed = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Kategori</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#063970',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 'auto',
    overflow: 'hidden',
    marginRight: 40,
    marginLeft: -20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    textAlign: 'center',
  },
  textSub: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  content: {
    padding: 10,
    backgroundColor: '#063970',
  },
});
