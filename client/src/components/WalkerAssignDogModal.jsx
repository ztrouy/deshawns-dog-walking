import { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getDogsToAssign } from '../apiManager.js';
import { DogCard } from './DogCard.jsx';

export const WalkerAssignDogModal = ({ walker, modal, toggleModal, toggleDogDetailsModal, setChosenDog }) => {
    const [dogs, setDogs] = useState([])


    useEffect(() => {
        if (walker.id) {
            fetchDogs()
        }
    }, [walker])
    

    const fetchDogs = () => {
        getDogsToAssign(walker.id).then(dogsArray => {
            setDogs(dogsArray)
        })
    }


    return (
        <Modal isOpen={modal} toggle={toggleModal} centered={true}>
            <ModalHeader className='d-flex'>
                <div className='fs-4 fw-bold'>
                    Dogs for {walker.name} to Walk
                </div>
            </ModalHeader>
            <ModalBody className='d-flex'>
                <div className='w-100'>
                    {dogs.map(dog => <DogCard dog={dog} setChosenDog={setChosenDog} toggleModal={toggleDogDetailsModal} toggleOtherModal={toggleModal} showAdd={true} newWalker={walker} key={dog.id} />)}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}