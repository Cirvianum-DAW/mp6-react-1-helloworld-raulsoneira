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
