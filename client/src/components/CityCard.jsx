import { Card, CardBody, CardText } from "reactstrap"

export const CityCard = ({ city }) => {
    return (
        <Card className="mb-2">
            <CardBody className="row gx-1">
                <div className="col-8 d-flex">
                    <CardText className="fs-4 fw-bold">{city.name}</CardText>
                </div>
            </CardBody>
        </Card>
    )
}