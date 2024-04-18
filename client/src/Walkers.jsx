import { useEffect, useState } from "react"
import { getCities, getWalkers } from "./apiManager.js"
import { WalkerCard } from "./components/WalkerCard.jsx"
import { Input, CloseButton } from "reactstrap"
import { WalkerAssignDogModal } from "./components/WalkerAssignDogModal.jsx"
import { DogDetailsModal } from "./components/DogDetailsModal.jsx"

export const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [filterSelection, setFilterSelection] = useState(0)
    const [chosenWalker, setChosenWalker] = useState({})
    const [assignDogModal, setAssignDogModal] = useState(false)
    const [chosenDog, setChosenDog] = useState({})
    const [dogDetailsModal, setDogDetailsModal] = useState(false)


    useEffect(() => {
        fetchWalkers()
        fetchCities()
    }, [])

    useEffect(() => {
        setFilteredWalkers(walkers)
    }, [walkers])

    useEffect(() => {
        if (filterSelection == 0) {
            setFilteredWalkers(walkers)
        } else {
            const filterArray = walkers.filter(walker => walker.cityWalkers.find(cityWalker => cityWalker.cityId == filterSelection))
            setFilteredWalkers(filterArray)
        }
    }, [filterSelection])

    
    const fetchWalkers = () => {
        getWalkers().then(walkersArray => {
            setWalkers(walkersArray)
        })
    }

    const fetchCities = () => {
        getCities().then(citiesArray => {
            setCities(citiesArray)
        })
    }

    const toggleAssignDogModal = () => {
        setAssignDogModal(!assignDogModal)
    }

    const toggleDogDetailsModal = () => {
        setDogDetailsModal(!dogDetailsModal)
    }


    return (
        <div className="w-75 mx-auto">
            <div className="d-flex row">
                <div className="col-6 d-flex">
                    <p className="fs-3 fw-bold mt-3">Walkers</p>
                </div>
                <div className="col-6 d-flex gap-2 align-items-center justify-content-end">
                    {filterSelection != 0 ? (
                        <CloseButton onClick={() => setFilterSelection(0)}/>
                    ) : (
                        ""
                    )}
                    <Input
                        type="select"
                        bsSize="md"
                        value={filterSelection}
                        onChange={event => setFilterSelection(parseInt(event.target.value))}
                    >
                        <option value={0} key={0} hidden>Filter by City</option>
                        {cities.map(city => <option value={city.id} key={city.id}>{city.name}</option>)}
                    </Input>
                </div>
            </div>
            {filteredWalkers.map(walker => <WalkerCard walker={walker} setChosenWalker={setChosenWalker} toggleModal={toggleAssignDogModal} key={walker.id} />)}
            <WalkerAssignDogModal walker={chosenWalker} modal={assignDogModal} setChosenDog={setChosenDog} toggleModal={toggleAssignDogModal} toggleDogDetailsModal={toggleDogDetailsModal} />
            <DogDetailsModal dog={chosenDog} modal={dogDetailsModal} toggleModal={toggleDogDetailsModal}/>
        </div>
    )
}