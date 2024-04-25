import { Card, CardBody, CardText, Button } from "reactstrap"
import { deleteWalker } from "../apiManager"

export const WalkerCard = ({ walker, setChosenWalker, toggleModal, toggleWalkerDetailsModal, fetchWalkers }) => {
    const handleAddDog = () => {
        setChosenWalker(walker)
        toggleModal()
    }

    const handleNameClick = () => {
        setChosenWalker(walker)
        toggleWalkerDetailsModal()
    }

    const handleRemove = () => {
        deleteWalker(walker.id).then(() => {
            fetchWalkers()
        })
    }

    return (
        <Card className="mb-2">
            <CardBody className="row gx-1">
                <div className="col-8 d-flex">
                    <CardText className="fs-4 fw-bold" role="button" onClick={handleNameClick}>{walker.name}</CardText>
                </div>
                <div className="col-4 d-flex gap-2 justify-content-end">
                    <Button onClick={handleRemove}>Remove</Button>
                    <Button onClick={handleAddDog}>Add Dog</Button>
                </div>
            </CardBody>
        </Card>
    )
}