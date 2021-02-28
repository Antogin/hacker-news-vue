import subDays from "date-fns/subDays";
import getUnixTime from "date-fns/getUnixTime";

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

export const getShow = (page = 0) => {
  const now = new Date();

  const yesterday = subDays(now, 1);

  return fetch(
    `https://hn.algolia.com/api/v1/search?tags=show_hn&page=${page}&numericFilters=created_at_i>${getUnixTime(
      yesterday
    )},created_at_i<${getUnixTime(now)}`
  ).then(d => d.json());
};
