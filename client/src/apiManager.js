export const getDogs = () => {
  return fetch("/api/dogs").then(res => res.json())
}

export const getDogById = (id) => {
  return fetch(`api/dogs/${id}`).then(res => res.json())
}

export const getDogsToAssign = (walkerId) => {
  return fetch(`api/dogs/assign/${walkerId}`).then(res => res.json())
}

export const createNewDog = (newDogObject) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDogObject)
  }

  return fetch("api/dogs", postOptions).then(res => res.json())
}

export const deleteDog = (dogId) => {
  const deleteOptions = {method: "DELETE"}

  return fetch(`api/dogs/${dogId}`, deleteOptions).then(res => res.json())
}

export const assignDogWalker = (assignObject) => {
  const patchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(assignObject)
  }

  return fetch("api/dogs/assign", patchOptions).then(res => res.json())
}

export const getCities = () => {
  return fetch("api/cities").then(res => res.json())
}

export const createCity = (newCityObject) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCityObject)
  }

  return fetch("api/cities", postOptions).then(res => res.json())
}

export const getWalkers = () => {
  return fetch("api/walkers").then(res => res.json())
}

export const getWalkerById = (walkerId) => {
  return fetch(`api/walkers/${walkerId}`).then(res => res.json())
}

export const updateWalker = (walkerObj) => {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(walkerObj)
  }

  return fetch("api/walkers", putOptions).then(res => res.json())
}