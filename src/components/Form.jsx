import React, { useState } from 'react';

function Form(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const handleSubmit = (event) => {
    setWelcomeMessage(`Benvingut ${firstName} ${lastName}!`);
    props.setPlacesDisponibles(props.placesActuals - 1);
    event.preventDefault(); // Necessari per evitar que el form es refresqui
  };

  return (
    <div className="flex justify-center h-screen">
      <form className="w-2/3" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-8">
          Detalls d'estudiant: {props.tipusEstudiantSelect}
        </h1>
        <label className="block mb-2">Nom:</label>
        <input
          className="w-full mb-4 p-2 rounded-lg bg-gray-200"
          type="text"
          name="fname"
          onBlur={(event) => setFirstName(event.target.value)}
        />
        <label className="block mb-2">Cognom:</label>
        <input
          className="w-full mb-4 p-2 rounded-lg bg-gray-200 border-1 border-dotted border-black"
          type="text"
          name="lname"
          onBlur={(event) => setLastName(event.target.value)}
        />
        <input
          className="w-full mb-4 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          value="Submit"
        />
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}

export default Form;
