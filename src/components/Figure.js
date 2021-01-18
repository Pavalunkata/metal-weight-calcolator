import React from "react";

const Figure = ({currentFigure, metals}) =>{
    

    return(
        <div className="figure-conteiner">
            <img src={currentFigure.picture} alt={`Снимка на ${currentFigure.name}`}/>
            <div className="figure-description">
                <h2>{currentFigure.name}</h2>
            </div>

            <div className="metals">
                <h3>Изберете метал</h3>
                <select nameClass = "pick-metal">
                {metals.map(metal =>
                    <option value = {metal.weight} 
                    key = {metal.id}
                    >
                        {metal.name}
                    </option>
                )};
                </select>
            </div>

            <div className="input">
                    <div onChange = {() => console.log(1)}>{currentFigure.sideA}</div>
                    <div onChange = {() => console.log(2)}>{currentFigure.sideB}</div>
                    <div onChange = {() => console.log(3)}>{currentFigure.thicknessA}</div>
                    <div onChange = {() => console.log(4)}>{currentFigure.thicknessB}</div>
                    <div onChange = {() => console.log(5)}>{currentFigure.lengh}</div>
                    <div onChange = {() => console.log(6)}>{currentFigure.many}</div>
            </div>

            <div className="result">
                <h4>Тегло за един брой:</h4>
                <h4>Общо тегло:</h4>
            </div>
        </div>
    )
};

export default Figure;