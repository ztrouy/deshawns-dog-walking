import { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import { createNewDog, getCities } from '../apiManager';

export const DogAddModal = ({ modal, toggleModal, fetchDogs }) => {
    const [cities, setCities] = useState([])
    const [name, setName] = useState("")
    const [city, setCity] = useState(0)


    useEffect(() => {
        getCities().then(citiesArray => {
            setCities(citiesArray)
        })
    }, [])

    useEffect(() => {
        if (!modal) {
            setName("")
            setCity(0)
        }
    }, [modal])


    const handleSubmit = () => {
        const newDogObject = {
            name: name,
            cityId: city
        }

        createNewDog(newDogObject).then(() => {
            fetchDogs()
            toggleModal()
        })
    }


    return (
        <Modal isOpen={modal} toggle={toggleModal} centered={true}>
            <ModalHeader className='d-flex'>
                <div className='fs-4 fw-bold'>
                    Add New Dog
                </div>
            </ModalHeader>
            <ModalBody className='d-flex'>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input 
                            name="text" 
                            type="text" 
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>City</Label>
                        <Input 
                            name="select"
                            type="select"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        >
                            <option value={0} key={0} hidden>Pick a City</option>
                            {cities.map(city => <option value={city.id} key={city.id}>{city.name}</option>)}
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </ModalFooter>
        </Modal>
    )
}