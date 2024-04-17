import { useEffect, useState } from "react";
import { Button } from "reactstrap"
import { DogCard } from "./components/DogCard.jsx";
import { DogDetailsModal } from "./components/DogDetailsModal.jsx";
import { getDogs } from "./apiManager.js"

export default function Home() {
  const [dogs, setDogs] = useState([])
  const [chosenDog, setChosenDog] = useState({})
  const [modal, setModal] = useState(false)


  useEffect(() => {
    getDogs().then(dogsArray => {
      setDogs(dogsArray)
    })
  }, [])


  const toggleModal = () => {
    setModal(!modal)
  }


  return (
    <div className="w-75 mx-auto">
      <div className="d-flex gap-3">
        <p className="fs-3 fw-bold mt-3">Dogs</p>
        <div className="my-auto">
          <Button className="btn-secondary">Add</Button>
        </div>
      </div>
      {dogs.map(dog => <DogCard dog={dog} key={dog.id} setChosenDog={setChosenDog} toggleModal={toggleModal} />)}
      <DogDetailsModal dog={chosenDog} modal={modal} toggleModal={toggleModal} />
    </div>
  )
}
