import {
  Modal,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {
  HomeCard,
  HomeHeader,
  HomeTab,
  NewsFeed,
} from '../../components/molecules';
import {Gap} from '../../components/atoms';
import axios from 'axios';
import {getCategories, getPostData} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.homeReducer);
  const {categories} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getPostData());
    console.log('response posts', posts);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
    console.log('response categories', categories);
  }, [dispatch]);

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleNameChange = text => {
    setName(text);
  };

  const handleEmailChange = text => {
    setContent(text);
  };

  const handleSubmit = () => {
    axios
      .post('https://sidesa.androidcorners.com/api/admin/saran', {
        name: name,
        content: content,
      })
      .then(function (response) {
        console.log('res-post', response);
        hideModal();
        Toast.show({
          type: 'success',
          text1: 'Saran terkirim!',
          text2: 'Terima kasih atas masukan Anda',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      })
      .catch(function (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Gagal mengirim saran',
          text2: 'Silakan coba lagi nanti',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      });
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getPostData());
    dispatch(getCategories());
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.mainPage}>
      <View style={styles.headerContainer}>
        <HomeHeader />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Modal visible={visible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <TextInput
                style={styles.input}
                placeholder="Masukkan Nama Anda"
                onChangeText={handleNameChange}
                value={name}
              />
              <TextInput
                style={styles.input}
                placeholder="Masukkan Saran Anda"
                onChangeText={handleEmailChange}
                value={content}
              />
              <View style={styles.buttonContainer}>
                <Button title="Cancel" onPress={hideModal} />
                <Button title="Submit" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.custom}>
          <Text style={styles.headTitle}>Latest Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.newsCardContainer}>
              <Gap width={24} />
              {categories.map(itemCat => {
                const category = itemCat.slug;
                const nama = itemCat.name;
                return (
                  <NewsFeed
                    key={itemCat.id}
                    name={itemCat.name}
                    onPress={() =>
                      navigation.navigate('NewsCategory', {category, nama})
                    }
                  />
                );
              })}
            </View>
          </ScrollView>
          <View>
            <Text style={styles.headTitle}>Trending Topic</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.newsCardContainer}>
                <Gap width={24} />
                {posts.map(itemPost => {
                  const comments = itemPost.comments;
                  const slug = itemPost.slug;
                  return (
                    <HomeCard
                      key={itemPost.id}
                      name={itemPost.title}
                      textSub={itemPost.category.name}
                      image={{uri: itemPost.image}}
                      onPress={() =>
                        navigation.navigate('NewsDetail', itemPost, {
                          comments,
                          slug,
                        })
                      }
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <Text style={styles.headTitle}>Latest Update</Text>
          <View style={styles.tabContainer}>
            <HomeTab />
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Button title="Saran" onPress={showModal} />
      </View>
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
    minHeight: 500,
  },
  headTitle: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    paddingTop: 10,
    color: '#343434',
    fontSize: 20,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
  },
});
