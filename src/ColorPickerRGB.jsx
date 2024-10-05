import React, {useState} from "react"

function ColorPickerRGB(){

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function handleRedChange(event){
        setRed(event.target.value);
    }

    function handleGreenChange(event){
        setGreen(event.target.value);
    }

    function handleBlueChange(event){
        setBlue(event.target.value);
    }

    return(
        <div className="picker-container">

            <div className="color-display" style={{
                backgroundColor: `rgb(${red},${green}, ${blue})`}
            }>
                
            </div>




            <div className="color-block">
                <label className="color-text" htmlFor="red">Red</label>
                <br />
                <input type="range" name="red" className="color-input" min={0} max={255} value={red} onChange={handleRedChange}/>
                <p className="color-text">{red}</p>
            </div>            
            <div className="color-block">
                <label className="color-text" htmlFor="green">Green</label>
                <br />
                <input type="range" name="green" className="color-input"min={0} max={255} value={green} onChange={handleGreenChange}/>
                <p className="color-text">{green}</p>
            </div>     

            <div className="color-block" >
                <label className="color-text" htmlFor="blue">Blue</label>
                <br />
                <input type="range" name="blue" className="color-input" min={0} max={255} value={blue} onChange={handleBlueChange}/>
                <p className="color-text">{blue}</p>
            </div>     

        </div>
    )
}

export default ColorPickerRGB
