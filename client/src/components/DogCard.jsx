import { Card, CardBody, CardText, Button } from "reactstrap"
import { assignDogWalker, getDogById } from "../apiManager"

export const DogCard = ({ dog, setChosenDog, toggleModal, toggleOtherModal, showRemove, showAdd, isNameClickable, newWalker }) => {
    const handleNameClick = () => {
        getDogById(dog.id).then(dogObject => {
            setChosenDog(dogObject)
        })
        toggleModal()
    }

    const handleAssign = () => {
        const assignObject = {
            id: dog.id,
            cityId: dog.cityId,
            walkerId: newWalker.id
        }

        assignDogWalker(assignObject).then(dogObject => {
            setChosenDog(dogObject)
            toggleOtherModal()
            toggleModal()
        })
    }
    

    return (
        <Card className="mb-2">
            <CardBody className="row gx-1">
                <div className="col-8 d-flex">
                    {isNameClickable ? (
                        <CardText className="fs-4 fw-bold" role="button" onClick={handleNameClick}>{dog.name}</CardText>
                    ) : (
                        <CardText className="fs-4 fw-bold">{dog.name}</CardText>
                    )}
                </div>
                <div className="col-4 d-flex justify-content-end">
                    {showRemove && <Button>Remove</Button>}
                    {showAdd && <Button onClick={handleAssign}>Assign</Button>}
                </div>
            </CardBody>
        </Card>
    )
}