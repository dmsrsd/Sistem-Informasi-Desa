import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import {HomeHeader, NewsCard} from '../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {getPostData} from '../../redux/action';

const News = ({navigation}) => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getPostData());
  }, [dispatch]);

  const [refreshing, setRefreshing] = useState(false);

  // definisikan fungsi handleRefresh
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(getPostData());
    setRefreshing(false);
  };

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
            <Text style={styles.headTitle}>Informasi Terbaru</Text>
            <View style={styles.page}>
              {posts.map(itemPost => {
                return (
                  <NewsCard
                    key={itemPost.id}
                    title={itemPost.title}
                    category={itemPost.category.name}
                    author={itemPost.user.name}
                    date={itemPost.created_at}
                    image={{uri: itemPost.image}}
                    onPress={() => navigation.navigate('NewsDetail', itemPost)}
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

export default News;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#353753',
    marginBottom: 10,
  },
  mainPage: {
    flex: 1,
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
