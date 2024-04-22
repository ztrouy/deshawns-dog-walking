import { Fragment, useEffect, useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getWalkerById, updateWalker } from '../apiManager.js';
import { DogCard } from './DogCard.jsx';

export const WalkerDetailsModal = ({ walker, fetchWalkers, cities, modal, toggleModal }) => {
    const [detailedWalker, setDetailedWalker] = useState({})
    const [walkerName, setWalkerName] = useState("")
    const [walkerCities, setWalkerCities] = useState([])


    useEffect(() => {
        if (walker.id) {
            getWalkerById(walker.id).then(walkerObj => {
                setDetailedWalker(walkerObj)
                setWalkerName(walkerObj.name)
                if (walkerObj.cityWalkers != null) {
                    importWalkerCities(walkerObj.cityWalkers)
                }
            })
        }
    }, [walker, modal])


    const handleCheckChange = (event) => {
        const checkBoxValue = parseInt(event.target.value)
        const checkedState = event.target.checked
        const copy = [...walkerCities]

        if (!walkerCities.includes(checkBoxValue) && checkedState) {
            copy.push(checkBoxValue)
        } else if (walkerCities.includes(checkBoxValue) && !checkedState) {
            const itemToRemove = walkerCities.indexOf(checkBoxValue)
            copy.splice(itemToRemove, 1)
        }

        setWalkerCities(copy)
    }

    const importWalkerCities = (cityWalkers) => {
        const checkedArray = []
        
        for (const cityWalker of cityWalkers) {
            checkedArray.push(parseInt(cityWalker.cityId))
        }
        
        setWalkerCities(checkedArray)
    }

    const handleSubmit = () => {
        if (walkerName == "") {
            window.alert("Name field cannot be empty!")
            return
        }
        
        const walkerObj = {
            id: detailedWalker.id,
            name: walkerName,
            cityWalkers: []
        }

        for (const item of walkerCities) {
            const cityWalkerObj = {
                cityId: item,
                walkerId: detailedWalker.id
            }
            walkerObj.cityWalkers.push(cityWalkerObj)
        }

        updateWalker(walkerObj).then(() => {
            toggleModal()
            fetchWalkers()
        })
    }
    

    return (
        <Modal isOpen={modal} toggle={toggleModal} centered={true}>
            <ModalHeader className='d-flex'>
                <div className='fs-4 fw-bold'>
                    {detailedWalker.name}
                </div>
            </ModalHeader>
            <ModalBody>
                <Input 
                    type='text' 
                    value={walkerName} 
                    placeholder="Walker's Name" 
                    onChange={event => setWalkerName(event.target.value)} 
                />
                <div className='fs-5 fw-bold mt-3'>Cities</div>
                <Form>
                    {cities.map(city => {
                        let isChecked = false
                        if (walkerCities.includes(parseInt(city.id))) {
                            isChecked = true
                        }
                        return (
                        <Fragment key={city.id}>
                            <FormGroup check inline>
                                <Input type='checkbox' value={city.id} checked={isChecked} onChange={handleCheckChange}/>
                                <Label check>{city.name}</Label>
                            </FormGroup>
                        </Fragment>)
                    })}
                </Form>
                {detailedWalker.dogs?.length >= 1 && (
                    <>
                        <div className='fs-5 fw-bold mt-3 mb-1'>Dogs</div>
                        <div className='w-100'>
                            {detailedWalker.dogs?.map(dog => <DogCard dog={dog} key={dog.id} />)}
                        </div>
                    </>
                )}
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Close</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </ModalFooter>
        </Modal>
    )
}