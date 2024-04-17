import { Card, CardBody, CardText, Button } from "reactstrap"

export const DogCard = ({ dog }) => {
    return (
        <Card className="mb-2">
            <CardBody className="row gx-1">
                <div className="col-8 d-flex">
                    <CardText className="fs-4 fw-bold">{dog.name}</CardText>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <Button>Remove</Button>
                </div>
            </CardBody>
        </Card>
    )
}