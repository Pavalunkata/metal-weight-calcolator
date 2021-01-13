import React from "react";

const LibraryFigure = ({figure, figures, id, setFigures, currentFigure, setCurrentFigure}) => {

    //Adding Event Handlers
    const figureSelectHandler = () =>{
        const selectoedFigure = figures.filter((state) => state.id===id);
        setCurrentFigure(selectoedFigure[0])
        // Adding accent to selected figure
        const accentFigure = figures.map((figure) =>{
             if(figure.id === currentFigure.id){
                return {
                    ...figure,
                    active: true,
                 }
            }else{
                return{
                    ...figure,
                    active: false,
                    }
                }
            });
        setFigures (accentFigure)
    }

    return(
        <div onClick = {figureSelectHandler} className={`library-figure ${figure.active ? `selected-figure` : ""}`}>
            <img src={figure.picture} alt={`Снимка на ${figure.name}`}/>
            <div className="figure-description">
                <h3>{figure.name}</h3>
            </div>
        </div>
    )
}

export default LibraryFigure;