# La meva aplicació React

Amb aquesta pràctica anem a familiaritzar-nos amb (un possible) entorn de desenvolupament de React i els primers passos per crear una aplicació.

## Instal·lació

Et proposem un boilerplate per a React que utilitza [Vite](https://vitejs.dev/) com a eina de desenvolupament. Podeu trobar més informació sobre Vite a la seva [documentació](https://vitejs.dev/guide/). Vite a data d'avui (Novembre 2023) és un bundler que està guanyant molta popularitat i que té un rendiment molt superior a altres bundlers com Webpack o Parcel. Es possible que trobeu força recursos relacionats amb React que fan referència al seu ús.

1. Cloneu aquest repositori al vostre ordinador local.
2. Navegueu fins al directori del projecte.
3. Executeu `npm install` per instal·lar les dependències del projecte.

## Execució del projecte

Per iniciar el servidor de desenvolupament, executeu `npm run dev`. Això iniciarà el servidor de desenvolupament Vite. Podeu veure l'aplicació obrint `http://localhost:3000` al vostre navegador.

## Estructura del projecte

El projecte té la següent estructura:

- `src/App.jsx`: Aquest és el component principal de l'aplicació. És responsable de renderitzar la disposició principal de l'aplicació i altres components.
- `src/index.jsx`: Aquest és el punt d'entrada de l'aplicació. És responsable de renderitzar el component `App` i adjuntar-lo al DOM.
- `src/components/HelloWorld.jsx`: Aquest és un component senzill que mostra un missatge "Hola, món!". És utilitzat pel component `App`.
- `vite.config.js`: Aquest és el fitxer de configuració per a Vite. S'utilitza per personalitzar el comportament de Vite, com ara definir àlies i canviar el directori de sortida de la compilació.
- `package.json`: Aquest és el fitxer de configuració per a npm. Llista les dependències i scripts del projecte.

## Pràctica

### Introducció als Components

Els components són els blocs de construcció de qualsevol aplicació React. La interfície d'usuari (UI) d'una aplicació React és un component, i pot estar formada per múltiples components. Imagina que tens una paret de maons i cada maó aquí és un component que forma part del component final, la paret.

Un component és una classe o funció de JavaScript que pot optcionalment prendre algun "input" i retorna un element React. Aquest element defineix com ha d'aparèixer una certa part de la UI. Anem a veure-ho amb el cas del nostre HelloWorld.

```jsx
import React from 'react'; // Importem la llibreria de React

function HelloWorld() {
  // Declarem la funció HelloWorld
  return <h1>Hola, món!</h1>; // Retornem un element React
}

export default HelloWorld; // Exportem la funció HelloWorld
```

Si estàs visualitzant aquest document en un navegador, pots veure el resultat de l'execució del component `HelloWorld` a la part superior de la pàgina. En aquest projecte el component `HelloWorld` està sent importat i utilitzat pel component `App` que a la vegada és utilitzat pel component `main`.

Modifica la funció `HelloWorld` amb el següent codi:

```jsx
function HelloWorld() {
  const handleClick = () => {
    alert('Hello World!');
  };
  return (
    <div className="App">
      <button onClick={handleClick}>React</button>
    </div>
  );
}
```

Funciona?

Veureu que la pàgina del navegador s'actualitza i apareix el botó React. Quan feu clic, obtindreu l'alerta. Aquest component és un exemple d'un component funcional. Aquest no té paràmetres d'entrada, simplement retorna l'element que descriu com ha de ser l'aspecte de la secció de la UI:

```jsx
<div className="App">
  <button onClick={handleClick}>React</button>
</div>
```

El clic del botó invoca una funció `handleClick`. Aquesta funció també forma part del component HelloWorld. Aquesta funció mostra una alerta amb el text "Hello World!".

Finalment exportem la funció `HelloWorld` perquè pugui ser utilitzada per altres components.

```jsx
export default HelloWorld;
```

Així doncs un component conté tant la lògica com la UI. Això és una de les coses que fa que React sigui tan popular permetent que els desenvolupadors puguin crear components reutilitzables i mantenibles. És important que fragmentem la nostra aplicació en components petits i orientats a resolde una única tasca.

### Renderitzant Components

Com pots veure a `main` es RENDERITZEN el components. Això és un concepte elemental de React que requereix d'uns certs mòduls i d'una sintaxi específica. Per renderitzar un component, utilitzem la funció `ReactDOM.render()`. Aquesta funció pren dos paràmetres:

- El component que volem renderitzar
- El node del DOM on volem renderitzar el component

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### JSX

A la secció anterior, has vist que vam retornar alguns elements `div` i `button` al component HelloWorld. Sembla HTML, **PERÒ NO HO ÉS!**. Es coneix com a JavaScript XML (JSX). JSX s'utilitza per descriure com ha de ser la interfície d'usuari (UI) a React. JSX sembla HTML, però és una capa de sintaxi sobre JavaScript. Vite s'encarrega de convertir JSX a JavaScript vàlid que el navegador pot entendre.

Ens estem anticipant, però permet que t'ensenyi alguns exemples de JSX per veure les diferències amb HTML:

```jsx
// HTML
<div class="App">
  <button>React</button>
</div>

// JSX
<div className="App"> // class -> className
  <button>React</button>
</div>
```

```jsx
// HTML
<div class="App">
  <button onclick="handleClick()">React</button>
</div>

// JSX
<div className="App">
  <button onClick={handleClick}>React</button> // onclick -> onClick
</div>
```

Algunes diferències destacables són:

- className enlloc de class
- camelCase pels atributs enlloc de kebab-case
- Funcions enlloc de strings per als atributs que fan referència a funcions (ex: onClick)
- No es poden utilitzar paraules reservades de JavaScript com ara class o for
- ...

Les anirem coneixent al llarg de les pràctiques...

### Reaccionant a Inputs

Anem a crear un component formulari i mostra-ho per pantalla.

Crea un component addicional anomenat `Form` a la carpeta `components`. Aquest component tindrà un input de text i un botó. Quan l'usuari faci clic al botó, el text de l'input es mostrarà per pantalla.

```jsx
import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    alert(text);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Alert</button>
    </div>
  );
}

export default Form;
```
