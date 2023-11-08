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
import React from 'react';
function Form() {
  return (
    <div>
      <form>
        <h1>Informació Estudiant</h1>
        <label>Nom:</label>
        <input type="text" name="fname" />
        <br />
        <label>Cognom:</label>
        <input type="text" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Form;
```

Afegeix el component `Form` al component `App` i mostra'l per pantalla com es veu en la següent imatge:

![Form](./assets/img_readme/form.webp)

T'hauria de cridar l'atenció la manera en com has d'injectar el component `Form` dins del component `App`. Això és una de les característiques més potents de React. Els components poden ser injectats dins d'altres components. Com ja has pogut veure amb el cas del HelloWorld, podem injectar components fent ús de la sintaxi `<Component />`:

```jsx
import React from 'react';
import HelloWorld from './components/HelloWorld';
import Form from './components/Form'; // Importem el component Form

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Form /> // Injectem el component Form
    </div>
  );
}

export default App;
```

### Estils dels components

Podem aplicar estils als components de dues maneres:

- Utilitzant la propietat `style` dels elements JSX
- Utilitzant CSS

Òbviament la manera més habitual de fer-ho és utilitzant CSS, però nosaltres, ja que hem vist TailwindCSS, anirem un passet més enllà i ho farem amb aquest.

### TailwindCSS amb Vite

Això no té res a veure amb React però ens permetrà fer ús d'una eina que ja coneixem i que ens permet obtenir resultats molt vistosos i professionals amb poques línies de codi.

Per poder utilitzar Tailwind al nostre projecte de React hem de seguir els següents passos (alguns d'ells potser no caldrien ja que el boilderplate ja els té fets):

1. Instal·lar TailwindCSS i PostCSS

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

2. Crear un fitxer de configuració per a TailwindCSS

```bash
npx tailwindcss init -p
```

Pots afegir el següent contingut al fitxer `tailwind.config.js`:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Bàsicament podem configurar sobre quins fitxers s'aplicarà TailwindCSS. Per més informació sobre la configuració de TailwindCSS pots consultar la seva [documentació](https://tailwindcss.com/docs/configuration).
Amb això TailwindCSS ja està configurat per a utilitzar els colors, fonts, etc. que necessita.

3. Configurar PostCSS

Si no existeix, crea `postcss.config.js`:

```bash
touch postcss.config.js
```

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

4. Configurar Vite per utilitzar PostCSS

```js
// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
```

5. Importar TailwindCSS al nostre projecte

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
...
```

6. Utilitzar TailwindCSS

Pots aplicar els estils de Tailwind fent servir classNames a les teves etiquetes HTML:

```jsx
// src/components/Form.jsx
import React from 'react';

function Form() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2">
        <h1 className="text-3xl font-bold text-center mb-8">
          Informació Estudiant
        </h1>
        ....
      </form>
    </div>
  );
}

export default Form;
```

Intenta afegir estils a la resta del formulari de manera que acabis tenint quelcom semblant a la següent imatge:

![Form](./assets/img_readme/form_tailwind.webp)

### State a React

Tornem a la càrrega amb conceptes específics de React. "State" o "estat" és un dels conceptes més importants de React. Els components React tenen un estat intern que pot ser utilitzat per guardar dades que poden canviar al llarg del temps. El valor d'una variable s'esfuma quan sortim d'una funció (àmbit de la funció), però en el cas de React podem utilitzar l'estat per guardar dades que persisteixen al llarg del temps.

Anem a veure com fer el nostre formulari interactiu. Anem a intentar posar un missatge que doni la benvinguda a l'usuari que ha introduït el seu nom i cognom al formulari.

En primer lloc haurem de fer servir les funcions d'estat de React. Per fer-ho, importem la funció `useState` de React:

```jsx
import React, { useState } from 'react';
```

Ara podem utilitzar la funció `useState` per crear una variable d'estat. Aquesta funció pren un paràmetre que és el valor inicial de la variable d'estat i retorna un array amb dos elements:

- El valor de la variable d'estat
- Una funció per actualitzar el valor de la variable d'estat

Per exemple, en el nostre cas si volem guardar el nom de l'usuari, podem fer-ho de la següent manera (dins de la funció `Form`!):

```jsx
const [firstName, setFirstName] = useState('');
```

Ara podem utilitzar la variable `firstName` per emmagatzemar el nom de l'usuari i la funció `setFirstName` per actualitzar el valor de la variable `firstName`. Com que nosaltre ho tenim dins de l'input, podem fer servir la propietat `onBlur` de React que ens permet actualitzar el valor de la variable `firstName` quan l'usuari **surt de l'input**:

```jsx
<input
  className="w-full mb-4 p-2 rounded-lg bg-gray-200"
  type="text"
  name="fname"
  onBlur={(e) => setFirstName(e.target.value)}
/>
```

Ara que ja saps com fer-ho amb firstName, **fes-ho també amb el cognom de l'usuari**. Crea també un estat `welcomeMessage` que ens permeti emmagatzemar el missatge de benvinguda a l'usuari. També pots crear un nou label al final del formulari per mostrar el missatge de benvinguda a l'usuari.

```jsx
<label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
  {welcomeMessage}
</label>
```

Ara que ja tenim els nom i congom de l'usuari, anem a crear un altra variable `welcomeMessage` que ens permeti emmagatzemar i mostrar el missatge de benvinguda a l'usuari. Aquesta variable l'actualitzarem quan es faci el submit del formulari. Per fer-ho, utilitzarem la propietat `onSubmit` del formulari:

```jsx
<form
  className="w-1/2"
  onSubmit={handleSubmit}
>
```

Ara només ens queda implementar la funció `handleSubmit` que actualitzarà el valor de la variable `welcomeMessage` i mostrarà el missatge de benvinguda a l'usuari:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  setWelcomeMessage(`Hola ${firstName} ${lastName}!`);
};
```

> **IMPORTANT:** Fixa't que per tal de fer ús de variables a JSX cal que fer ús de `{}`. Per exemple, `{welcomeMessage}`.

Si has fet els passos correctament, hauries d'obtenir quelcom semblant a la següent imatge:

![Form](./assets/img_readme/benvingut_BorderCollie.png)

A continuació tens el codi d'exemple complet:

```jsx
import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const handleSubmit = (e) => {
    setWelcomeMessage(`Benvingut ${firstName} ${lastName}!`);
    e.preventDefault(); // Necessari per evitar que el form es refresqui
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-8">
          Informació Estudiant
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
```

> Nota: Utilitzem `event.preventDefault( )` per evitar que el navegador carregui una nova pàgina quan fem submit, que és un comportament natiu del botó d'enviament.
