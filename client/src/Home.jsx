import { useEffect, useState } from "react";
import { Button } from "reactstrap"
import { DogCard } from "./components/DogCard.jsx";
import { getDogs } from "./apiManager.js"

export default function Home() {
  const [dogs, setDogs] = useState([])


  useEffect(() => {
    getDogs().then(dogsArray => {
      setDogs(dogsArray)
    })
  }, [])


  return (
    <div className="w-75 mx-auto mt-3 mb-3">
      <div className="d-flex gap-3">
        <p className="fs-3 fw-bold mt-2">Dogs</p>
        <div className="my-auto">
          <Button className="btn-secondary">Add</Button>
        </div>
      </div>
      {dogs.map(dog => <DogCard dog={dog} key={dog.id} />)}
    </div>
  )
}
