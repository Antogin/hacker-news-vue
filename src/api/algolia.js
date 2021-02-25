export const getTop = (page = 0) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`
  ).then(d => d.json());
};

export const getItem = id => {
  return fetch(`https://hn.algolia.com/api/v1/items/${id}`);
};

export const getAsk = () => {
  return fetch("https://hn.algolia.com/api/v1/search?tags=ask_hn");
};
