import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const DogDetailsModal = ({ dog, modal, toggleModal }) => {
    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader className='d-flex'>
                <div className='fs-4 fw-bold'>
                    {dog.name}
                </div>
            </ModalHeader>
            <ModalBody className='d-flex'>
                <div>
                    <div className='fs-5 fw-bold'>
                        City
                    </div>
                    <div>{dog.city?.name}</div>
                    {dog.walker ? (
                        <>
                            <div className='fs-5 fw-bold mt-3'>
                                Walker
                            </div>
                            <div>{dog.walker.name}</div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}