import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Comments = ({name, comment}) => {
  return (
    <View>
      <Text style={styles.name}>Nama : {name}</Text>
      <Text>Komentar : {comment}</Text>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  comment: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
});
