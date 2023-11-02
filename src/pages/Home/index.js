import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {
  HomeCard,
  HomeHeader,
  HomeTab,
  NewsFeed,
} from '../../components/molecules';

const Home = () => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.headerContainer}>
        <HomeHeader />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.custom}>
          <Text style={styles.headTitle}>Latest Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.newsCardContainer}>
              <Gap width={24} />
              <NewsFeed />
              <NewsFeed />
              <NewsFeed />
              <NewsFeed />
              <NewsFeed />
            </View>
          </ScrollView>
          <View>
            <Text style={styles.headTitle}>Trending Topic</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.newsCardContainer}>
                <Gap width={24} />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.headTitle}>Latest Update</Text>
          <View style={styles.tabContainer}>
            <HomeTab />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  newsCardContainer: {
    flexDirection: 'row',
    marginVertical: 25,
  },
  mainPage: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  custom: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1,
    minHeight: 150,
  },
  headTitle: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    paddingTop: 10,
    color: '#343434',
    fontSize: 20,
  },
});
