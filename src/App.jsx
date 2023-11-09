import React from 'react';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState('No Graduat');
  const [ngPlaces, setNGPlaces] = useState(60);
  const [gPlaces, setGPlaces] = useState(40);
  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };
  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === 'Graduat'
      ? setGPlaces(updatedPlaces)
      : setNGPlaces(updatedPlaces);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="text-2xl text-center mx-2 block">
          Places Disponibles No Graduats: {ngPlaces}
        </label>
        <label className="text-2xl text-center mx-2 block">
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
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={tipusEstudiant === 'Graduat' ? gPlaces : ngPlaces}
      />
    </div>
  );
}

export default App;
