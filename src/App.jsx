import React from "react";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("No Graduat");
  const [places, setPlaces] = useState(100);
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };
  // Afegim la funció que actualitza el valor de la variable d'estat places

  const [ngPlaces, setPlacesNoGraduats] = useState(60);
  const [gPlaces, setPlacesGraduats] = useState(40);

  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "No Graduat"
      ? setPlacesNoGraduats(updatedPlaces)
      : setPlacesGraduats(updatedPlaces);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        {/* // Afegim una nova etiqueta que mostra el nombre de places disponibles */}
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles No Graduats: {ngPlaces}
          <br />
          Places Disponibles Graduats: {gPlaces}
        </label>
        <label className="text-2xl mx-2">Selecciona Tipus d'Estudiant:</label>
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="No Graduat">No Graduat</option>
          <option value="Graduat">Graduat</option>
        </select>
      </div>
      {/* // Afegim les dues noves props al component Form */}
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === "No Graduat" ? ngPlaces : gPlaces}
      />
    </div>
  );
}

export default App;
