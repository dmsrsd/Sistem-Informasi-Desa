import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NewsList = ({title, image, category, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 24,
          paddingVertical: 10,
        }}>
        <Image source={image} style={styles.imageTab} />
        <View>
          <Text style={styles.Judul}>{title}</Text>
          <Text style={styles.Category}>{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  imageTab: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 13,
  },
  Judul: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#26344f',
  },
});
