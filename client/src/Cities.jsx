import { useEffect, useState } from "react"
import { createCity, getCities } from "./apiManager.js"
import { CityCard } from "./components/CityCard.jsx"
import { Input, Button } from "reactstrap"

export const Cities = () => {
    const [cities, setCities] = useState([])
    const [input, setInput] = useState("")
    

    useEffect(() => {
        fetchCities()
    }, [])


    const fetchCities = () => {
        getCities().then(setCities)
    }

    const handleAdd = () => {
        const newCityObj = {
            name: input
        }

        createCity(newCityObj).then(() => {
            setInput("")
            fetchCities()
        })
    }


    return (
        <div className="w-75 mx-auto">
            <div className="d-flex row">
                <div className="d-flex col-6">
                    <p className="fs-3 fw-bold mt-3">Dogs</p>
                </div>
                <div className="d-flex col-6 gap-2 align-items-center justify-content-end">
                    <div>
                        <Input 
                            placeholder="New City"
                            value={input}
                            onChange={event => setInput(event.target.value)}
                        />
                    </div>
                    <div>
                        <Button onClick={handleAdd}>Add</Button>
                    </div>
                    
                </div>
            </div>
            {cities.map(city => <CityCard city={city} key={city.id} />)}
        </div>
    )
}