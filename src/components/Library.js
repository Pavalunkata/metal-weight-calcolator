import React from "react";
import LibraryFigure from "./LibrayrFigure"

const Library = ({figures, setFigures, setCurrentFigure, currentFigure}) => {
    return(
        <div className="library">
            <h2>Фигури</h2>
            <div className="library-figure">
                {figures.map((figure) =>
                    <LibraryFigure 
                    setFigures = {setFigures}
                    setCurrentFigure = {setCurrentFigure}
                    figure = {figure}
                    key = {figure.id}
                    figures = {figures}
                    id={figure.id}
                    currentFigure={currentFigure}
                    />
                )};
            </div>
        </div>
    )
};

export default Library;