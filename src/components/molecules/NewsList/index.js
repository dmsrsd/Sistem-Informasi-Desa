import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {News} from '../../../assets';
import {TouchableOpacity} from 'react-native';

const NewsList = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 24,
          paddingVertical: 10,
        }}>
        <Image source={News} style={styles.imageTab} />
        <View>
          <Text style={styles.Judul}>Judul Post</Text>
          <Text style={styles.Category}>Kategori Post</Text>
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
