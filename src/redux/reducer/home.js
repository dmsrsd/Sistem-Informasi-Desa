const initHome = {
  posts: [],
  categories: [],
  ekonomi: [],
  keamanan: [],
  layanan: [],
  kosong: [],
};

export const homeReducer = (state = initHome, action) => {

  if (action.type == 'SET_POSTS') {
    return {
      ...state,
      posts: action.value,
    };
  }

  if (action.type == 'SET_CATEGORIES') {
    return {
      ...state,
      categories: action.value,
    };
  }

  if (action.type == 'SET_EKONOMI') {
    return {
      ...state,
      ekonomi: action.value,
    };
  }

  if (action.type == 'SET_KEAMANAN') {
    return {
      ...state,
      keamanan: action.value,
    };
  }

  if (action.type == 'SET_DAFTAR') {
    return {
      ...state,
      kosong: action.value,
    };
  }

  if (action.type == 'SET_LAYANAN') {
    return {
      ...state,
      layanan: action.value,
    };
  }

  return state;
};
