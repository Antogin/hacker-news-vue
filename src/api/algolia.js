export const getTop = () => {
    return fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
}

export const getItem = (id) => {
    return fetch(`https://hn.algolia.com/api/v1/items/${id}`)
}