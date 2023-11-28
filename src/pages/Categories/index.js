import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import {CategoriesList, HomeHeader} from '../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../redux/action';

const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.homeReducer);
  const [refreshing, setRefreshing] = useState(false);

  // definisikan fungsi handleRefresh
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(getCategories());
    setRefreshing(false);
  };

  useEffect(() => {
    dispatch(getCategories());
    console.log('res categories', categories.posts);
  }, [dispatch]);

  return (
    <View style={styles.mainPage}>
      <View style={styles.headerContainer}>
        <HomeHeader />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.custom}>
            <Text style={styles.headTitle}>Semua Kategori</Text>
            <View style={styles.page}>
              {categories.map(itemCat => {
                // const jumlah = itemCat.posts.length;
                const category = itemCat.slug;
                const nama = itemCat.name;
                return (
                  <CategoriesList
                    key={itemCat.id}
                    title={itemCat.name}
                    // jumlah={jumlah}
                    image={{uri: itemCat.image}}
                    onPress={() =>
                      navigation.navigate('NewsCategory', {category, nama})
                    }
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#353753',
    marginBottom: 10,
  },
  headerContainer: {
    backgroundColor: 'white',
  },
  custom: {
    flex: 1,
  },
  page: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  headTitle: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    paddingTop: 24,
    color: '#343434',
    fontSize: 20,
  },
});
