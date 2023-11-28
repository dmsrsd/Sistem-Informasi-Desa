import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcBack} from '../../assets';
import {NewsCard} from '../../components/molecules';
import {getPostDataByCategory} from '../../redux/action';

const NewsCategory = ({navigation, route}) => {
  const {category} = route.params;
  const {nama} = route.params;
  const dispatch = useDispatch();
  const {kosong} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getPostDataByCategory(category));
    console.log('res kosong', kosong);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>{nama}</Text>
      <View style={styles.sampul}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
      </View>

      <View style={styles.components}>
        <ScrollView>
          <View style={styles.page}>
            {kosong.map(itemPost => {
              return (
                <NewsCard
                  key={itemPost.id}
                  title={itemPost.title}
                  category={itemPost.category.name}
                  author={itemPost.category.name}
                  date={itemPost.created_at}
                  image={{uri: itemPost.image}}
                  onPress={() => navigation.navigate('NewsDetail', itemPost)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsCategory;

const styles = StyleSheet.create({
  sampul: {
    height: 120,
    marginTop: -35,
    paddingTop: 2,
    paddingLeft: 16,
    paddingBottom: 20,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#353753',
    marginBottom: 10,
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
    paddingTop: 26,
    paddingLeft: 30,
    color: 'white',
    justifyContent: 'center',
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#353753',
  },
  components: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 5,
    flex: 1,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
