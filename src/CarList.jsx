import React, {useState} from "react"

function CarList(){
    
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [cars, setCars] = useState([]);

    function handleAddCar(){
        setCars( c=> [...c, {year:carYear,make:carMake,model:carModel}]);
    }

    function handleRemoveCar(index){
        setCars(() => cars.filter((_,i) => i!==index ));
    }

    function handleChangeCarMake(event){
        setCarMake(m => event.target.value);
    }

    function handleChangeCarModel(event){
        setCarModel(m => event.target.value);
    }

    function handleChangeCarYear(event){
        setCarYear(m => event.target.value);

    }

    return(
        <div>
            <h2>List of Cars</h2>
            <input type="number" value={carYear} onChange={handleChangeCarYear}/>
            <br />
            <input type="text" value={carMake} onChange={handleChangeCarMake} placeholder="Car Make" />
            <br />
            <input type="text" value={carModel} onChange={handleChangeCarModel} placeholder="Car Model" />
            <br />
            <button onClick={handleAddCar}>Add</button>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
        </div>
    )
    
}

export default CarList