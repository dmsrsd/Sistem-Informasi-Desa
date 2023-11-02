import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import NewsList from '../NewsList';

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
  return (
    <View style={{paddingTop: 8}}>
      <NewsList />
    </View>
  );
};

const Keamanan = () => {
  return (
    <View style={{paddingTop: 8}}>
      <NewsList />
    </View>
  );
};
const Informasi = () => {
  return (
    <View style={{paddingTop: 8}}>
      <NewsList />
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
