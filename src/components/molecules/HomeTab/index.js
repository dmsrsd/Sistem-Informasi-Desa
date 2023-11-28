import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import NewsList from '../NewsList';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getPostDataByCategory} from '../../../redux/action';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#0E34A0',
      height: 5,
      width: '5%',
      marginLeft: '3%',
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#0E34A0' : '#343434',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Ekonomi = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {ekonomi} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getPostDataByCategory('ekonomi'));
    console.log('response ekonomi', ekonomi);
  }, [dispatch]);

  return (
    <View style={{paddingTop: 8}}>
      {ekonomi.map(item => {
        return (
          <NewsList
            key={item.id}
            title={item.title}
            category={item.category.name}
            image={{uri: item.image}}
            onPress={() => navigation.navigate('NewsDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Keamanan = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {keamanan} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getPostDataByCategory('keamanan'));
  }, [dispatch]);

  return (
    <View style={{paddingTop: 8}}>
      {keamanan.map(item => {
        return (
          <NewsList
            key={item.id}
            title={item.title}
            category={item.category.name}
            image={{uri: item.image}}
            onPress={() => navigation.navigate('NewsDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Informasi = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {layanan} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getPostDataByCategory('layanan'));
  }, [dispatch]);

  return (
    <View style={{paddingTop: 8}}>
      {layanan.map(item => {
        return (
          <NewsList
            key={item.id}
            title={item.title}
            category={item.category.name}
            image={{uri: item.image}}
            onPress={() => navigation.navigate('NewsDetail', item)}
          />
        );
      })}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Ekonomi'},
    {key: '2', title: 'Informasi'},
    {key: '3', title: 'Keamanan'},
  ]);

  const renderScene = SceneMap({
    1: Ekonomi,
    2: Informasi,
    3: Keamanan,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
