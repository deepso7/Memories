const posts = (posts = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_ALL":
      return payload;
    case "CREATE":
      return [...posts, payload];
    case "UPDATE":
      return posts.map((post) => (post._id === payload._id ? payload : post));
    default:
      return posts;
  }
};

export default posts;
