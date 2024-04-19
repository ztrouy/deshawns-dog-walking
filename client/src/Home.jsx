import { useEffect, useState } from "react";
import { Button } from "reactstrap"
import { DogCard } from "./components/DogCard.jsx";
import { DogDetailsModal } from "./components/DogDetailsModal.jsx";
import { getDogs } from "./apiManager.js"
import { DogAddModal } from "./components/DogAddModal.jsx";

export default function Home() {
  const [dogs, setDogs] = useState([])
  const [chosenDog, setChosenDog] = useState({})
  const [detailsModal, setDetailsModal] = useState(false)
  const [addModal, setAddModal] = useState(false)


  useEffect(() => {
    fetchDogs()
  }, [])


  const fetchDogs = () => {
    getDogs().then(dogsArray => {
      setDogs(dogsArray)
    })
  }

  const toggleDetailsModal = () => {
    setDetailsModal(!detailsModal)
  }

  const toggleAddModal = () => {
    setAddModal(!addModal)
  }


  return (
    <div className="w-75 mx-auto">
      <div className="d-flex gap-3">
        <p className="fs-3 fw-bold mt-3">Dogs</p>
        <div className="my-auto">
          <Button className="btn-secondary" onClick={toggleAddModal}>Add</Button>
        </div>
      </div>
      {dogs.map(dog => <DogCard dog={dog} showRemove={true} isNameClickable={true} key={dog.id} setChosenDog={setChosenDog} toggleModal={toggleDetailsModal} />)}
      <DogDetailsModal dog={chosenDog} modal={detailsModal} toggleModal={toggleDetailsModal} />
      <DogAddModal modal={addModal} toggleModal={toggleAddModal} fetchDogs={fetchDogs} setChosenDog={setChosenDog} toggleDetailsModal={toggleDetailsModal} />
    </div>
  )
}
