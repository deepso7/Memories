const posts = (posts = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_ALL":
      return payload;
    case "CREATE":
      return [...posts, payload];
    default:
      return posts;
  }
};

export default posts;
