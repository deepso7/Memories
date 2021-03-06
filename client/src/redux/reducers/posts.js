import {
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_ALL,
} from "../constants/actionTypes";

const posts = (posts = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL:
      return payload;
    case CREATE:
      return [...posts, payload];
    case UPDATE:
    case LIKE:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== payload);
    default:
      return posts;
  }
};

export default posts;
