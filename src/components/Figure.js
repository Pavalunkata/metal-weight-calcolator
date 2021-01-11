import React from "react";

const Figure = ({currentFigure}) =>{
    

    return(
        <div className="figure-conteiner">
            <img src={currentFigure.picture} alt={`Снимка на ${currentFigure.name}`}/>
            <div className="figure-description">
                <h3>{currentFigure.name}</h3>
            </div>
        </div>
    )
};

export default Figure;