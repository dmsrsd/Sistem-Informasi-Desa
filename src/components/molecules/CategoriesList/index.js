import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcArrow, IcBack, IcNext } from '../../../assets';

const CategoriesList = ({image, title, jumlah, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.imageTab} />
        <View style={styles.text}>
          <Text style={styles.Judul}>{title}</Text>
          <Text style={styles.Judul}>{jumlah}</Text>
        </View>
        <View style={styles.icon}>
          <IcBack style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 60,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
  imageTab: {
    width: 60,
    height: 60,
    borderRadius: 60,
    overflow: 'hidden',
    marginRight: 19,
    marginLeft: -10,
  },
  text: {
    justifyContent: 'center',
    flex: 1,
  },
  Judul: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#000000',
  },
  category: {
    marginTop: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});
