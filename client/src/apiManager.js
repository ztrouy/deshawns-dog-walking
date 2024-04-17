export const getDogs = () => {
  return fetch("/api/dogs").then(res => res.json())
}

export const getDogById = (id) => {
  return fetch(`api/dogs/${id}`).then(res => res.json())
}

export const getCities = () => {
  return fetch("api/cities").then(res => res.json())
}