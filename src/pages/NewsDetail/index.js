import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBack} from '../../assets/Icon';
import Comments from '../Comments';

const NewsDetail = ({navigation, route}) => {
  const detail = route.params;
  const {comments} = route.params;
  const {slug} = route.params;

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log('response detail', detail);
  }, []);

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
    setEmail(text);
  };

  const handleCommentChange = text => {
    setContent(text);
  };

  const handleSubmit = () => {
    axios
      .post('https://sidesa.androidcorners.com/api/web/posts/storeComment', {
        slug: slug,
        name: name,
        email: email,
        comment: content,
      })
      .then(function (response) {
        navigation.reset({
          index: 0,
          routes: [{name: 'MyApp'}],
        });
        hideModal();
      })
      .catch(function (error) {});
  };

  return (
    <View style={styles.page}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={handleNameChange}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Comment"
            onChangeText={handleCommentChange}
            value={content}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={hideModal} />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
      <ImageBackground source={{uri: detail.image}} style={styles.sampul}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.components}>
        <View style={styles.newsContainer}>
          <View>
            <Text style={styles.title}>{detail.title}</Text>
          </View>
          <Text style={styles.author}>{detail.category.name}</Text>
        </View>
        <Text style={styles.date}>{detail.created_at}</Text>
        <ScrollView>
          <View>
            <Text style={styles.textContent}>
              {detail.content.replace(/<(?:.|\n)*?>/gm, '')}
            </Text>
          </View>
          <Text style={styles.headTitle}>Komentar</Text>
          <View style={styles.comment}>
            {comments.length === 0 ? (
              <Text>No comments yet</Text>
            ) : (
              comments.map(commentsList => {
                return (
                  <Comments
                    key={commentsList.id}
                    name={commentsList.name}
                    comment={commentsList.comment}
                  />
                );
              })
            )}
          </View>
        </ScrollView>
        <View style={styles.container}>
          <Button title="Post Comment" onPress={showModal} />
        </View>
      </View>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  newsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sampul: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 16,
  },
  backButton: {
    backgroundColor: 'black',
    borderRadius: 60,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  components: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: 'black',
  },
  author: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  date: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: 'black',
    marginBottom: 30,
  },
  textContent: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'justify',
  },
  comment: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  footer: {
    backgroundColor: 'black',
  },
  headTitle: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    paddingTop: 10,
    color: '#343434',
    fontSize: 20,
  },
  comment: {
    marginBottom: 20,
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
});
