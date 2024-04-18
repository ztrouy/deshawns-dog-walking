import { Card, CardBody, CardText, Button } from "reactstrap"

export const WalkerCard = ({ walker, setChosenWalker, toggleModal }) => {
    const handleAddDog = () => {
        setChosenWalker(walker)
        toggleModal()
    }

    return (
        <Card className="mb-2">
            <CardBody className="row gx-1">
                <div className="col-8 d-flex">
                    <CardText className="fs-4 fw-bold" role="button">{walker.name}</CardText>
                </div>
                <div className="col-4 d-flex gap-2 justify-content-end">
                    <Button>Remove</Button>
                    <Button onClick={handleAddDog}>Add Dog</Button>
                </div>
            </CardBody>
        </Card>
    )
}