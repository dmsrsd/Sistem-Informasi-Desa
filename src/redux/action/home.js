import Axios from 'axios';
import {API_HOST} from '../../config';

export const getPostData = () => dispatch => {
  Axios.get(`${API_HOST.url}/posts`)
    .then(res => {
      dispatch({type: 'SET_POSTS', value: res.data.data.data});
    })
    .catch(err => {});
};

export const getCategories = () => dispatch => {
  Axios.get(`${API_HOST.url}/categories`)
    .then(res => {
      dispatch({type: 'SET_CATEGORIES', value: res.data.data.data});
    })
    .catch(err => {});
};

export const getPostDataByCategory = types => dispatch => {
  Axios.get(`${API_HOST.url}/categories/${types}`)
    .then(res => {
      if (types === 'ekonomi') {
        dispatch({type: 'SET_EKONOMI', value: res.data.data.posts});
      }
      if (types === 'keamanan') {
        dispatch({type: 'SET_KEAMANAN', value: res.data.data.posts});
      }
      if (types === 'layanan') {
        dispatch({type: 'SET_LAYANAN', value: res.data.data.posts});
      }
      if (types === `${types}`) {
        dispatch({type: 'SET_DAFTAR', value: res.data.data.posts});
      }
    })
    .catch(err => {});
};
